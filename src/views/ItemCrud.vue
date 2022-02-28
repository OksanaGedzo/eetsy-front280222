<template>
  <div>

    <main class="profile-page">
      <section class="relative block h-500-px">
        <div
            class="absolute top-0 w-full h-full bg-center bg-cover"
            style="
           background-image: url('https://viraito.ee/wp-content/uploads/2019/11/banner01-2048x798.jpg');
         "
        >
        </div>
        <div
            class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style="transform: translateZ(0);"
        >
          <svg
              class="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
          >
            <polygon
                class="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </section>
      <section class="relative py-16 bg-blueGray-200">
        <div class="container mx-auto px-4">
          <div
              class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64"
          >
            <div class="px-6">
              <div class="flex flex-wrap justify-center">
                <div
                    class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center"
                >
                  <div class="relative">
                    <img
                        alt="..."
                        src="https://lh3.googleusercontent.com/pw/AM-JKLVKiw21hutwSjjd4KXSW8VItkhV_z6h4VwhaAOdW1RXK57S4ccLcTc4T7WrbS7lV3qRt4ZVMFmzdrDnvu_Rpg_kv7_At7wWtxcOmUAYBdYEFPjpzu1gh4jaZmWm9rTASsVuHuXosxJc88-cQcUI00p5=s903-no?authuser=0"
                        class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                    />
                  </div>
                </div>
                <div
                    class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center"
                >
                  <div class="py-6 px-3 mt-32 sm:mt-0">
                    <button
                        class="bg-emerald-500 active:bg-emerald-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button"
                    >
                      My googs
                    </button>
                  </div>
                </div>
                <div class="w-full lg:w-4/12 px-4 lg:order-1">
                  <div class="flex justify-center py-4 lg:pt-4 pt-8">
                    <div class="mr-4 p-3 text-center">
                                     <span
                                         class="text-xl font-bold block uppercase tracking-wide text-blueGray-600"
                                     >
                                       58
                                     </span>
                      <span class="text-sm text-blueGray-400">Happy customers</span>
                    </div>
                    <div class="mr-4 p-3 text-center">
                                     <span
                                         class="text-xl font-bold block uppercase tracking-wide text-blueGray-600"
                                     >
                                       118
                                     </span>
                      <span class="text-sm text-blueGray-400">Goods</span>
                    </div>
                    <div class="lg:mr-4 p-3 text-center">
                                     <span
                                         class="text-xl font-bold block uppercase tracking-wide text-blueGray-600"
                                     >
                                       1788
                                     </span>
                      <span class="text-sm text-blueGray-400">Likes</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-center mt-12">
                <h3
                    class="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2"
                >

                </h3>
                <div
                    class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase"
                >
                  <i
                      class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"
                  ></i>


                </div>
                <div class="mb-2 text-blueGray-600 mt-10">
                  <i
                      class="fas fa-briefcase mr-2 text-lg text-blueGray-400"
                  ></i>


                </div>
                <div class="mb-2 text-blueGray-600">
                  <i
                      class="fas fa-university mr-2 text-lg text-blueGray-400"
                  ></i>
                  <!--                  Tere tulemast!-->
                </div>
              </div>
              <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
                <div class="flex flex-wrap justify-center">
                  <div class="w-full lg:w-9/12 px-4">

                    <div class="flex flex-wrap justify-center lg:-mt-64 -mt-48">
                      <div class="w-full lg:w-6/12 px-4">
                        <div
                            class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200"
                        >
                          <div class="flex-auto p-5 lg:p-10">
                            <h4 class="text-2xl font-semibold">My database</h4>
                            <p class="leading-relaxed mt-1 mb-4 text-blueGray-500">Describe your product</p>
                            <br>

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
                            </div>

                            <div class="flex flex-wrap justify-center" v-if="selectedItem || selectedSubGroup">
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


                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>
    </main>
    <footer class="block py-4">
      <div class="container mx-auto px-4">
        <hr class="mb-4 border-b-1 border-blueGray-200"/>
        <div
            class="flex flex-wrap items-center md:justify-between justify-center"
        >
          <div class="w-full md:w-4/12 px-4">
            <div
                class="text-sm text-blueGray-500 font-semibold py-1 text-center md:text-left"
            >
              Copyright ©
              <a
                  href="https://github.com/Rairot/eetsy-front"
                  class="text-blueGray-500 hover:text-blueGray-700 text-sm font-semibold py-1"
              >
                MRO Creative Team
              </a>
            </div>
          </div>
          <div class="w-full md:w-8/12 px-4">
            <ul class="flex flex-wrap list-none md:justify-end justify-center">
              <li>
                <a
                    href="https://github.com/Rairot/eetsy-front"
                    class="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
                >
                  Creative Team
                </a>
              </li>
              <li>
                <a
                    href="https://github.com/Rairot/eetsy-front"
                    class="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                    href="https://github.com/Rairot/eetsy-front"
                    class="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
                >
                  Blog

                </a>
              </li>
              <li>
                <a
                    href="https://github.com/Rairot/eetsy-front"
                    class="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
                >
                  MRO License

                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
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
        pictures: this.newPictures
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