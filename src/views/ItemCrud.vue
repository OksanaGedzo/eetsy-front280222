<template>
  <div>
    <div>
      <div>
        <span> Select item operation: </span>
        <input type="radio" id="add" value="1" v-model="radioButton">
        <label for="add">Add</label>
        <input type="radio" id="edit" value="2" v-model="radioButton">
        <label for="edit">Edit</label>
        <input type="radio" id="delete" value="3" v-model="radioButton">
        <label for="delete">Delete</label>
      </div>

      <div v-if="radioButton">
        Primary Group:
        <select class="opts" v-model="selectedPrimaryGroup" @change="populateSubgroup()">
          <option v-for="row in primaryGroups" :value="row">{{ row.name }}</option>
        </select>
        <br>
        SubGroup:
        <select class="opts" v-model="selectedSubGroup" @change="populateItemList(); getAllSellers()">
          <option v-for="row in subGroups" :value="row">{{ row.name }}</option>
        </select>
        <br>
        <div v-if="radioButton > 1">
          Item:
          <select class="opts" v-model="selectedItem" @change="populateItemPropertiest()">
            <option v-for="row in items" :value="row">{{ row.itemName }}</option>
          </select>
        </div>
      </div>
    </div>

    <div v-if="selectedItem || selectedSubGroup">
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
        <tr>
          <div v-if="radioButton > 0">
            <input type="file" @change="handleImage" accept="image/x-png,image/jpeg">
            <!--            <button v-on:click="sendImageDataToDatabase">Add Image</button>-->
<!--            todo add ability to add several pictures when making a new item-->
          </div>
        </tr>
      </table>
      <div class="itemGallery">
        <div class="itemGallery-panel" v-for="image in itemPictures">
<!--        <div class="itemGallery-panel" v-for="image in ((itemPictures === null)?newPictures:itemPictures)">-->
          <img :src="image.data"><br>
          <button v-on:click="deleteItemImage(image.id)">Delete</button>
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
      items: [],
      sellers: [],
      itemPictures: [],
      itemId: null,
      itemNameField: null,
      itemPriceField: null,
      itemDescriptionField: null,
      radioButton: null,
      piltObjectRequest: null,
      addSelected: false,
      editSelected: false,
      deleteSelected: false,
      piltObject: {},
      newPicture: {},
      newPictures: [],
    }
  },
  methods: {
    handleImage(event) {
      const selectedImage = event.target.files[0];
      this.createBase64Image(selectedImage);
    },
    createBase64Image(fileObject) {
      const reader = new FileReader();
      reader.onload = () => {
        this.newPicture.data = reader.result;
        this.newPictures.push(this.newPicture);
        console.log(this.piltObject)
      };
      reader.onerror = function (error) {
        alert(error);
      }
      reader.readAsDataURL(fileObject);
    },
    // sendImageDataToDatabase: function () {
    //   this.piltObject.itemId = this.selectedItem.itemId;
    //   this.$http.post("/upload/image", this.piltObject
    //   ).then(response => {
    //     console.log(this.piltObject)
    //     console.log(response.data)
    //   }).catch(error => {
    //     console.log(error)
    //   })
    // },
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
        subGroupName: this.selectedSubGroup.name,
        price: this.itemPriceField,
        description: this.itemDescriptionField,
        pictures: this.newPictures
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
        pictures: this.newPictures
      }
      this.$http.put("/update/item", itemRequest
      ).then(response => {
        alert((response.data.message === null) ? response.data.error : response.data.message)
      }).catch(error => {
        console.log(error)
      })
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
    deleteItemImage: function (id) {
      this.$http.delete("/delete/item/picture", {
            params: {
              id: id
            }
          }
      ).then(response => {
        alert((response.data.message === null) ? response.data.error : response.data.message)
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

<style>

.itemGallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-gap: 1rem;
  max-width: 50%;
  margin: 5rem auto;
  padding: 0 5rem;
}

.itemGallery-panel img {
  height: 100px;
  object-fit: cover;
  border-radius: 0.75rem;
}
</style>