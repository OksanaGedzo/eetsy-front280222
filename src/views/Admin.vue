<template>
  <div>
    <div>

      <!--
        type="file"                       - teeb faili valimise meile lihtsaks
        @change="handleImage"             - paneb käima 'handleImage' meetodi kui valitakse fail.
        accept="image/x-png,image/jpeg"   - mis tüüpi faile me üldse näitame File Upload aknakeses
                                            hetkel lubame ainult .png ja .jpeg (ja nende alam vorme)
                                            kasutades "image/*" lubaksime kõiki tuntud pildi tüüpe
      -->
      <input type="file" @change="handleImage" accept="image/x-png,image/jpeg">
      <br>

      <!--
        Nii nagu ma aru saan koolon sünkroniseerib muutuja 'pilt' ja tema elemendi,
        kui muutub 'pilt' väärtus uueneb ka tema <img> element
       -->
      <img :src="piltObject.data"> <br>
      <button v-on:click="sendImageDataToBackend">Upload To Database</button>
      <br>

      <img :src="piltBackendist">
      <br>
      <button v-on:click="requestLastImgFromBackend">Receive Last Image From Database</button>

      <br>

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
      <select class="opts" v-model="selectedItem">
        <option disabled value="DEFAULT">Vali Item</option>
        <option v-for="row in items" :value="row">{{ row.itemName }}</option>
      </select>



    </div>

  </div>
</template>

<script>
export default {
  name: "Admin",
  data() {
    return {
      pilt: null,
      piltBackendist: null,
      piltObject: {
        "data": null
      },
      selectedPrimaryGroup: null,
      selectedSubGroup: null,
      selectedItem: null,
      primaryGroups: [],
      subGroups: [],
      items: []
    }
  },
  methods: {
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

    createBase64Image(fileObject) {
      //reader tundub töötavat tagurpidi? Enne läheb käima kõige viimane rida reader.readAsDataURL(fileObject) ... vist
      const reader = new FileReader();
      reader.onload = () => {
        //pärast *edukat* laadimist antakse meie 'pilt' failile tema lõplik väärtus ning konsooli prinditakse testiks toores info
        this.piltObject.data = reader.result;
        console.log(this.piltObject)
      };
      reader.onerror = function (error) {
        alert(error);
      }
      reader.readAsDataURL(fileObject);
    },

    sendImageDataToBackend: function () {
      this.$http.post("/upload/image", this.piltObject
      ).then(response => {
        console.log(this.piltObject)
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },

    requestLastImgFromBackend: function () {
      this.$http.get("/receive/image", {}
      ).then(response => {
        this.piltBackendist = response.data.data //lgtm
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