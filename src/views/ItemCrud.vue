<template>
  <div>
    <div>
      <h2>Edit existing item:</h2>
      Primary Group:
      <select class="opts" v-model="selectedPrimaryGroup" @change="populateSubgroup()">
        <option disabled value="DEFAULT">Vali Põhikategooria</option>
        <option v-for="row in primaryGroups" :value="row">{{ row.name }}</option>
      </select>
      <br>
      SubGroup:
      <select class="opts" v-model="selectedSubGroup" @change="populateItemList()">
        <option disabled value="DEFAULT">Vali Alamkatekooria</option>
        <option v-for="row in subGroups" :value="row">{{ row.name }}</option>
      </select>
      <br>
      Items:
      <select class="opts" v-model="selectedItem" @change="populateItemPropertiest()">
        <option disabled value="DEFAULT">Vali Item</option>
        <option v-for="row in items" :value="row">{{ row.itemName }}</option>
      </select>
    </div>
    <!--    <div>-->
    <!--      <input value="itemNameField" v-model="itemNameField">-->
    <!--      <input value="itemPriceField" v-model="itemPriceField">-->
    <!--      <input value="itemDescriptionField"v-model="itemDescriptionField">-->
    <!--    </div>-->

    <table style="display: inline-table">
      <tr>
        <th>Item Name</th>
        <th>Item Price</th>
        <th>Item Description</th>
        <th></th>
      </tr>
      <tr>
        <td><input value="itemNameField" v-model="itemNameField"></td>
        <td><input value="itemPriceField" v-model="itemPriceField"></td>
        <td><input value="itemDescriptionField" v-model="itemDescriptionField"></td>
        <td>
          <button v-on:click="">Confirm Changes 📞</button>
        </td>
      </tr>
    </table>
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
      primaryGroups: [],
      subGroups: [],
      items: [],
      itemId: null,
      itemNameField: null,
      itemPriceField: null,
      itemDescriptionField: null,
    }
  },
  methods: {
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
  },
  beforeMount() {
    this.getAllPrimaryGroups();
  }
}

</script>

<style scoped>

</style>