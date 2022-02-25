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
    <!--    <div>-->
    <!--      <input value="itemNameField" v-model="itemNameField">-->
    <!--      <input value="itemPriceField" v-model="itemPriceField">-->
    <!--      <input value="itemDescriptionField"v-model="itemDescriptionField">-->
    <!--    </div>-->

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
          <!--        <div class="gallery">-->
          <!--          <div class="gallery-panel" v-for="image in itemPictures">-->
          <!--            <img :src="image.data">-->
          <!--            <button>Delete</button>-->
          <!--          </div>-->
          <!--        </div>-->
        </tr>
      </table>
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
      addSelected: false,
      editSelected: false,
      deleteSelected: false,
    }
  },
  methods: {
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
    },

    populateSubgroup: function () {
      this.getAllSubGroupsByPrimaryGroupId(this.selectedPrimaryGroup.id);
    },
    populateItemList: function () {
      this.getAllItemsBySubGroupName(this.selectedSubGroup.name)
    },

    handleImage(event) {
      const selectedImage = event.target.files[0];
      this.createBase64Image(selectedImage);
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
        sellerId:  this.selectedSeller,
        subGroupName: this.selectedSubGroup.name,
        price: this.itemPriceField,
        description: this.itemDescriptionField,
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
      let itemDto = {
        itemId: this.itemId,
        name: this.itemNameField,
        price: this.itemPriceField,
        description: this.itemDescriptionField,
      }
      this.$http.put("/update/item", itemDto
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
    }

  },
  beforeMount() {
    this.getAllPrimaryGroups();
  }
}

</script>

<style>

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-gap: 1rem;
  max-width: 80rem;
  margin: 5rem auto;
  padding: 0 5rem;
}

.gallery-panel img {
  width: 100%;
  height: 22vw;
  object-fit: cover;
  border-radius: 0.75rem;
}
</style>