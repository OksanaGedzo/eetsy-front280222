<template>
  <div>
    <div>
      <span> Select item operation: </span>
      <input type="radio" id="add" value="1" v-model="radioButton" @change="emptyLists">
      <label for="add">Add</label>
      <input type="radio" id="edit" value="2" v-model="radioButton" @change="emptyLists">
      <label for="edit">Edit</label>
      <input type="radio" id="delete" value="3" v-model="radioButton" @change="emptyLists">
      <label for="delete">Delete</label>
    </div>

    <div v-if="radioButton">
      Primary Group:
      <select class="opts" v-model="selectedPrimaryGroup" @change="populateSubgroup()">
        <option v-for="row in primaryGroups" :value="row">{{ row.name }}</option>
      </select>
      <br>
      <div v-if="radioButton>1">
        SubGroup:
        <select class="opts" v-model="selectedSubGroup" @change="populateSubGroupFields()">
          <option v-for="row in subGroups" :value="row">{{ row.name }}</option>
        </select>
      </div>
      <br>
    </div>

    <div v-if="radioButton == 1 || selectedSubGroup">
      <table style="display: inline-table">
        <tr>
          <th>Sub Group Name</th>
          <th></th>
        </tr>
        <tr>
          <td><input value="subGroupFieldName" v-model="subGroupFieldName"></td>
          <td>
            <button v-on:click="submitForm">Confirm</button>
          </td>
        </tr>
        <tr>
          <div v-if="radioButton > 0">
            <input type="file" @change="handleImage" accept="image/x-png,image/jpeg"> <br>
          </div>
        </tr>
      </table>
      <div v-if="pictures !== null">
        <h4>Image Gallery</h4>
        <div class="itemGallery">
          <div class="itemGallery-panel" v-for="image in pictures">
            <img :src="image.pictureData"><br>
            <button v-on:click="deleteImage(image)">Delete</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "SubGroupCrud",
  data() {
    return {
      radioButton: null,
      selectedSubGroup: null,
      selectedPrimaryGroup: null,
      subGroupFieldName: null,
      subGroups: [],
      primaryGroups: [],
      pictures: [],
      picture: null,
      selectedSubGroupPicture: null,
    }
  },

  methods: {
    populateSubgroup: function () {
      this.getAllSubGroupsByPrimaryGroupId(this.selectedPrimaryGroup.id);
    },
    getAllSubGroupsByPrimaryGroupId: function (id) {
      this.$http.get("/get/subgroups/by/primarygroup/id", {
            params: {
              id: id
            }
          }
      ).then(response => {
        this.subGroups = response.data;
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },
    addSubGroup: function () {
      let subGroupRequest = {
        id: this.selectedSubGroup.id,
        primaryGroupId: this.selectedPrimaryGroup.id,
        pictureId: this.pictures[0].pictureId,
        pictureData: this.pictures[0].pictureData,
        name: this.subGroupFieldName,
      }
      this.$http.post("/add/subgroup/", subGroupRequest
      ).then(response => {
        alert((response.data.message === null) ? response.data.error : response.data.message)
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },
    populateSubGroupFields() {
      if (this.radioButton == 3) {
        this.countPrimaryGroupRelations();
      }
      this.subGroupFieldName = this.selectedSubGroup.name;
      this.picture = {
        pictureId: this.selectedSubGroup.pictureId,
        pictureData: this.selectedSubGroup.pictureData,
      }
      this.pictures = [this.picture];
    },
    handleImage(event) {
      const selectedImage = event.target.files[0];
      this.createBase64Image(selectedImage);
    },
    createBase64Image(fileObject) {
      const reader = new FileReader();
      reader.onload = () => {
        let tempPicture = new Object();
        tempPicture.pictureData = reader.result;
        if (this.pictures === null) {
          this.pictures = [tempPicture]
        } else {
          this.pictures.push(tempPicture);
        }

        console.log(this.pictures)
      };
      reader.onerror = function (error) {
        alert(error);
      }
      reader.readAsDataURL(fileObject);
    },
    submitForm: function () {
      switch (this.radioButton) {
        case "1":
          this.addSubGroup();
          break;
        case "2":
          this.updateSubGroup();
          break;
        case "3":
          this.deleteSubGroup();
          break;
      }
    },
    countSubGroupRelations: function () {
      this.$http.get("/get/subgroup/relation/count", {
            params: {
              id: this.selectedSubGroup.id
            }
          }
      ).then(response => {
        alert((response.data.message === null) ? response.data.error : response.data.message)

        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },
    deleteSubGroup: function () {
      this.$http.delete("/delete/subgroup/", {
            params: {
              id: this.selectedSubGroup.id
            }
          }
      ).then(response => {
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },
    getAllPrimaryGroups: function () {
      this.$http.get("/get/all/primarygroups/", {}
      ).then(response => {
        console.log(response.data)
        this.primaryGroups = response.data;
      }).catch(error => {
        console.log(error)
      })
    },
    emptyLists() {
      this.selectedSubGroup = null;
      this.pictures = null;
      this.SubGroupFieldName = null;
    },
    removeNewPreviewImage(image) {
      let i = this.pictures.map(picture => picture.pictureData).indexOf(image.pictureData);
      this.pictures.splice(i, 1);
    },
    deleteImage: function (image) {
      if (typeof image.pictureId === 'undefined') {
        this.removeNewPreviewImage(image)
      } else if (this.pictures.length == 1) {
        alert("Primary group must always have exactly 1 image. Add a new image first.")
      } else {
        //peab enne updatima ning siis vana pildi ära kustutama
        let oldImageId = this.selectedSubGroup.pictureId;
        this.removeNewPreviewImage(image)
      }
    },
    updateSubGroup: function () {
      if (this.pictures.length != 1) {
        alert("Primary group must always have exactly 1 image. hrehfshf")
        return;
      }
      let subGroupRequest = {
        id: this.selectedPrimaryGroup.id,
        name: this.primaryGroupFieldName,
        pictureId: this.pictures[0].pictureId,
        pictureData: this.pictures[0].pictureData,
      }
      this.$http.put("/update/subgroup/", subGroupRequest
      ).then(response => {
        if (this.picture.pictureId != this.pictures[0].pictureId) {
          this.deleteOldSubGroupImage(this.picture.pictureId)
        }
        alert((response.data.message === null) ? response.data.error : response.data.message)
        this.getAllSubGroups();
        this.emptyLists();
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },
    deleteOldSubGroupImage: function (id) {
      this.$http.delete("/delete/picture", {
            params: {
              id: id
            }
          }
      ).then(response => {
        alert((response.data.message === null) ? response.data.error : response.data.message);
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    }
  },
  beforeMount() {
    this.getAllPrimaryGroups();

  }
}
</script>