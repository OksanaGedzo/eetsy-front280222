<template>
  <div>
    <span> Select item operation: </span>
    <input type="radio" id="add" value="1" v-model="radioButton" @change="emptyLists">
    <label for="add">Add</label>
    <input type="radio" id="edit" value="2" v-model="radioButton" @change="emptyLists">
    <label for="edit">Edit</label>
    <input type="radio" id="delete" value="3" v-model="radioButton" @change="emptyLists">
    <label for="delete">Delete</label>


    <div v-if="radioButton">
      Primary Group:
      <select class="opts" v-model="selectedPrimaryGroup" @change="populateSubgroup()">
        <option v-for="row in primaryGroups" :value="row">{{ row.name }}</option>
      </select>
      <br>
      SubGroup:
      <select v-if="!addingNewSubGroup" class="opts" v-model="selectedSubGroup"
              @change="populateItemList(); getAllSellers()">
        <option v-for="row in subGroups" :value="row">{{ row.name }}</option>
      </select>
      <input v-if="addingNewSubGroup" value="newSubGroupNameField"
             v-model="newSubGroupNameField">
      <button v-if="radioButton==1" v-on:click="addNewSubGroup();getAllSellers()">
        {{ subGroupButtonText }}
      </button>
      <br>
      <div v-if="radioButton > 1">
        Item:
        <select class="opts" v-model="selectedItem" @change="populateItemPropertiest()">
          <option v-for="row in items" :value="row">{{ row.itemName }}</option>
        </select>
      </div>
    </div>


  <div  v-if="selectedItem || selectedSubGroup">
    <table style="display: inline-table">
      <tr>
        <th>Item Name</th>
        <th v-if="radioButton==1">Seller</th>
        <th>Item Price</th>
        <th>Item Description</th>
        <th></th>
      </tr>
      <tr>
        <td><input value="itemNameField" v-model="itemNameField"></td>
        <td v-if="radioButton==1">
          <select v-model="selectedSeller">
            <option v-for="row in sellers" :value="row.id">{{ row.name }}</option>
          </select>
        </td>
        <td><input value="itemPriceField" v-model="itemPriceField"></td>
        <td><input value="itemDescriptionField" v-model="itemDescriptionField"></td>
        <td>
          <button v-on:click="submitForm">Confirm</button>
        </td>
      </tr>
    </table>
    <div v-if="radioButton > 0">
      <input type="file" @change="handleImage" accept="image/x-png,image/jpeg"> <br>
    </div>
    <div v-if="itemPictures !== null">
      <h4>Item Image Gallery</h4>
      <div class="itemGallery">
        <div class="itemGallery-panel" v-for="image in itemPictures">
          <img :src="image.data"><br>
          <button v-on:click="deleteItemImage(image)">Delete</button>
        </div>
      </div>
    </div>

    <div v-if="newSubGroupPictures !== null && addingNewSubGroup">
      <h4>Sub Group Image Gallery</h4>
      <div class="itemGallery">
        <div class="itemGallery-panel" v-for="image in newSubGroupPictures">
          <img :src="image.pictureData"><br>
          <button v-on:click="deleteSubGroupImage(image)">Delete</button>
        </div>

      </div>
      <div v-if="radioButton">
        <input type="file" @change="handleSubGroupImage" accept="image/x-png,image/jpeg"> <br>
      </div>
    </div>
  </div>
  </div>

</template>

<script>
export default {
  name: "ItemCrud",
  data() {
    return {
      selectedPrimaryGroup: null,
      selectedSubGroup: null,
      selectedItem: null,
      selectedSeller: null,
      primaryGroups: [],
      subGroups: [],
      newSubGroupNameField: null,
      items: [],
      sellers: [],
      itemPictures: [],
      itemId: null,
      itemNameField: null,
      itemPriceField: null,
      itemDescriptionField: null,
      radioButton: null,
      piltObjectRequest: null,
      addingNewSubGroup: false,
      addSelected: false,
      editSelected: false,
      deleteSelected: false,
      piltObject: {},
      newPicture: {},
      newPictures: [],
      subGroupButtonText: "Add new Sub Group",
      addNewSubGroupText: "Add new Sub Group",
      editNewSubGroupText: "Edit current Sub Group",
      selectOldSubGroupText: "Select an existing Sub Group",
      newSubGroupPicture: {},
      newSubGroupPictures: [],
    }
  },
  methods: {
    emptyLists() {
      this.selectedPrimaryGroup = null;
      this.selectedSubGroup = null;
      this.selectedItem = null;
      this.itemPictures = null;
      this.itemId = null;
      this.itemNameField = null;
      this.itemPriceField = null;
      this.itemDescriptionField = null;
      this.addingNewSubGroup = false;
      this.newSubGroupNameField = null;
    },
    addNewSubGroup() {
      if (!this.addingNewSubGroup && this.radioButton == 1) {
        this.subGroupButtonText = this.selectOldSubGroupText;
      } else if (this.radioButton == 2) {
        this.subGroupButtonText = this.editNewSubGroupText;
        this.newSubGroupNameField = this.selectedSubGroup.name;
      } else {
        this.subGroupButtonText = this.addNewSubGroupText;
      }
      this.addingNewSubGroup = !this.addingNewSubGroup;

      let newSubGroup = {
        // id;
        pictureData: this.newSubGroupPictureData,
        name: this.newSubGroupNameField,
      };
      this.selectedSubGroup = newSubGroup;

    },
    handleImage(event) {
      const selectedImage = event.target.files[0];
      this.createBase64Image(selectedImage);
    },
    createBase64Image(fileObject) {
      const reader = new FileReader();
      reader.onload = () => {
        let tempPicture = new Object();
        tempPicture.data = reader.result;
        if (this.itemPictures === null) {
          this.itemPictures = [tempPicture] //typeError when .push onto empty list????
        } else {
          this.itemPictures.push(tempPicture);
        }
      };
      reader.onerror = function (error) {
        alert(error);
      }
      reader.readAsDataURL(fileObject);
    },

    handleSubGroupImage(event) {
      const selectedImage = event.target.files[0];
      this.createBase64SubGroupImage(selectedImage);
    },
    createBase64SubGroupImage(fileObject) {
      const reader = new FileReader();
      reader.onload = () => {
        let tempPicture = new Object();
        tempPicture.pictureData = reader.result;
        if (this.newSubGroupPictures === null) {
          this.newSubGroupPictures = [tempPicture]
        } else {
          this.newSubGroupPictures.push(tempPicture);
        }
      };
      reader.onerror = function (error) {
        alert(error);
      }
      reader.readAsDataURL(fileObject);
    },

    submitForm: function () {
      switch (this.radioButton) {
        case "1":
          this.addItem();
          break;
        case "2":
          this.updateItem();
          break;
        case "3":
          this.deleteItem();
          break;
      }
    },
    populateItemPropertiest: function () {
      this.itemId = this.selectedItem.itemId
      this.itemNameField = this.selectedItem.itemName
      this.itemPriceField = this.selectedItem.itemPrice
      this.itemDescriptionField = this.selectedItem.itemDescription
      this.getItemPictures(this.selectedItem.itemId)
    },

    populateSubgroup: function () {
      this.getAllSubGroupsByPrimaryGroupId(this.selectedPrimaryGroup.id);
    },
    populateItemList: function () {
      this.getAllItemsBySubGroupName(this.selectedSubGroup.name)
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

    getItemPictures: function () {
      this.$http.get("/get/item/pictures", {
            params: {
              id: this.itemId
            }
          }
      ).then(response => {
        this.itemPictures = response.data
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
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
    getAllItemsBySubGroupName: function (nameInput) {
      this.$http.get("get/items/by/subgroup/name", {
            params: {
              name: nameInput
            }
          }
      ).then(response => {
        console.log("There are our items: " + response.data)
        this.items = response.data;
      }).catch(error => {
        console.log(error)
      })
    },
    getAllSellers: function () {
      this.$http.get("/get/all/sellers")
          .then(response => {
            this.sellers = response.data
            console.log(response.data)
          }).catch(error => {
        console.log(error)
      })
    },
    addItem: function () {
      let itemRequest = {
        itemId: this.itemId,
        name: this.itemNameField,
        sellerId: this.selectedSeller,
        subGroupName: this.selectedSubGroup.name == null ? this.newSubGroupNameField : this.selectedSubGroup.name,
        price: this.itemPriceField,
        description: this.itemDescriptionField,
        pictures: this.itemPictures,
        subGroupPictureData: this.newSubGroupPictures.length === 0 ? null : this.newSubGroupPictures[0].pictureData,
        primaryGroupId: this.selectedPrimaryGroup.id,
      }
      if (itemRequest.pictures.isEmpty) {
        alert("Please add at least 1 image to the item.")
        return;
      }
      this.$http.post("/add/item", itemRequest
      ).then(response => {
        alert((response.data.message === null) ? response.data.error : response.data.message)
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },

    updateItem: function () {
      let itemRequest = {
        itemId: this.itemId,
        name: this.itemNameField,
        sellerId: this.selectedSeller,
        subGroupName: this.selectedSubGroup.name,
        price: this.itemPriceField,
        description: this.itemDescriptionField,
        pictures: this.itemPictures
      }
      this.$http.put("/update/item", itemRequest
      ).then(response => {
        alert((response.data.message === null) ? response.data.error : response.data.message)
      }).catch(error => {
        console.log(error)
      })
    },
    removeNewItemPreviewImage(image) {
      let i = this.itemPictures.map(picture => picture.data).indexOf(image.data);
      this.itemPictures.splice(i, 1);
    },
    removeNewSubGroupPreviewImage(image) {
      let i = this.newSubGroupPictures.map(picture => picture.pictureData).indexOf(image.pictureData);
      this.newSubGroupPictures.splice(i, 1);
    },
    deleteItemImage: function (image) {
      //sellised mitte eksisteerivad muutujad nagu 'image.id' ei ole NULL vaid javascriptis 'undefined'
      if (typeof image.id === 'undefined') {
        this.removeNewItemPreviewImage(image)
      } else {
        let id = image.id;
        this.$http.delete("/delete/picture", {
              params: {
                id: id
              }
            }
        ).then(response => {
          alert((response.data.message === null) ? response.data.error : response.data.message)
          this.getItemPictures()
          console.log(response.data)
        }).catch(error => {
          console.log(error)
        })
      }
    },
    deleteSubGroupImage: function (image) {
      if (typeof image.pictureId === 'undefined') {
        this.removeNewSubGroupPreviewImage(image)
      } else if (this.pictures.length == 1) {
        alert("Primary group must always have exactly 1 image. Add a new image first.")
      } else {
        this.removeNewSubGroupPreviewImage(image)
      }
    },
    deleteItem: function () {
      this.$http.delete("/delete/item", {
            params: {
              itemId: this.itemId
            }
          }
      ).then(response => {
        alert((response.data.message === null) ? response.data.error : response.data.message)
      }).catch(error => {
        console.log(error)
      })
    },
  },
  beforeMount() {
    this.getAllPrimaryGroups();
  }
}

</script>

<style>

.itemGallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  grid-gap: 1rem;
  max-width: 50%;
  margin: 1rem auto;
  padding: 1rem 5rem;
  border: 1px dotted;
  border-color: darkgray;
  border-radius: 0.75rem;


}

.itemGallery-panel img {
  height: 150px;
  width: auto;
  object-fit: cover;
  border: 1px solid;
  border-radius: 0.75rem;
  border-color: darkgray;
}
</style>