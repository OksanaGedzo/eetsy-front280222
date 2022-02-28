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

    <div v-if="radioButton > 1">
      Primary Group:
      <select class="opts" v-model="selectedPrimaryGroup" @change="populatePrimaryGroupFields()">
        <option v-for="row in primaryGroups" :value="row">{{ row.name }}</option>
      </select>
    </div>

    <div v-if="radioButton == 1 || selectedPrimaryGroup">
      <table style="display: inline-table">
        <tr>
          <th>Primary Group Name</th>
          <th></th>
        </tr>
        <tr>
          <td><input value="primaryGroupFieldName" v-model="primaryGroupFieldName"></td>
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
  name: "PrimaryGroupCrud",
  data() {
    return {
      radioButton: null,
      selectedPrimaryGroup: null,
      primaryGroupFieldName: null,
      primaryGroups:[],
      pictures:[],
      picture: null,
      selectedPrimaryGroupPicture: null,
    }
  },

  methods: {
    addPrimaryGroup: function () {
      let primaryGroupRequest = {
        name: this.primaryGroupFieldName,
        pictureData: this.pictures[0].pictureData,
      }
      this.$http.post("/add/primarygroup/", primaryGroupRequest
      ).then(response => {
        alert((response.data.message === null) ? response.data.error : response.data.message)
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },
    populatePrimaryGroupFields() {
      if (this.radioButton == 3){
      this.countPrimaryGroupRelations();
      }
      this.primaryGroupFieldName = this.selectedPrimaryGroup.name;
      this.picture = {
        pictureId: this.selectedPrimaryGroup.pictureId,
        pictureData: this.selectedPrimaryGroup.pictureData,
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
          this.addPrimaryGroup();
          break;
        case "2":
          this.updatePrimaryGroup();
          break;
        case "3":
          this.deletePrimaryGroup();
          break;
      }
    },
    countPrimaryGroupRelations: function () {
      this.$http.get("/get/primarygroup/relation/count", {
            params: {
              id: this.selectedPrimaryGroup.id
            }
          }
      ).then(response => {
        alert((response.data.message === null) ? response.data.error : response.data.message)

        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },
    deletePrimaryGroup: function () {
      this.$http.delete("/delete/primarygroup/", {
            params: {
              id: this.selectedPrimaryGroup.id
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
      this.selectedPrimaryGroup = null;
      this.pictures = null;
      this.primaryGroupFieldName = null;
    },
    removeNewPreviewImage(image) {
      let i = this.pictures.map(picture => picture.pictureData).indexOf(image.pictureData);
      this.pictures.splice(i, 1);
    },
    deleteImage: function (image) {
      if (typeof image.pictureId === 'undefined') {
        this.removeNewPreviewImage(image)
      } else if (this.pictures.length == 1){
        alert("Primary group must always have exactly 1 image. Add a new image first.")
      } else {
        //peab enne updatima ning siis vana pildi ära kustutama
        let oldImageId = this.selectedPrimaryGroup.pictureId;
        this.removeNewPreviewImage(image)
      }
    },
    updatePrimaryGroup: function () {
      if (this.pictures.length != 1) {
        alert("Primary group must always have exactly 1 image. hrehfshf")
        return;
      }
      let primaryGroupRequest = {
        id: this.selectedPrimaryGroup.id,
        name: this.primaryGroupFieldName,
        pictureId: this.pictures[0].pictureId,
        pictureData: this.pictures[0].pictureData,
      }
      this.$http.put("/update/primarygroup/", primaryGroupRequest
      ).then(response => {
        if (this.picture.pictureId != this.pictures[0].pictureId){
        this.deleteOldPrimaryGroupImage(this.picture.pictureId)
        }
        alert((response.data.message === null) ? response.data.error : response.data.message)
        this.getAllPrimaryGroups();
        this.emptyLists();
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },
    deleteOldPrimaryGroupImage: function (id) {
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


