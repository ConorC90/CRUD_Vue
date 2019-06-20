
<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Edit Item</h3>
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="toggle()">
          <div class="form-group">
            <label>IATA:</label>
            <input type="text" class="form-control" v-model="item.iata">
          </div>
          <div class="form-group">
            <label>Name:</label>
            <input type="text" class="form-control" v-model="item.name">
          </div>
          <div class="form-group">
            <label>Pirmary Color:</label>
            <input type="text" class="form-control" v-model="item.primary_color">
          </div>
          <div class="form-group">
            <label>Secondary Color:</label>
            <input type="text" class="form-control" v-model="item.secondary_color">
          </div>
          <div class="input-group mb-3">
            <label>Bags:</label>
            <input
              type="checkbox"
              :checked="this.item.bags"
              v-model="item.bags"
              class="form-control"
            >

            <label>Checkin:</label>
            <input
              type="checkbox"
              :checked="this.item.checkin"
              v-model="item.checkin"
              class="form-control"
            >

            <label>Seats:</label>
            <input
              type="checkbox"
              :checked="this.item.seats"
              v-model="item.seats"
              class="form-control"
            >
          </div>
          <div v-show="popup" class="alert alert-primary" role="alert">
            Would you like to keep the changes that you have made
            <button
              class="btn btn-sm btn-success m-2"
              @click="updateItem()"
            >Yes</button>
            <button @click.prevent="toggle()" class="btn btn-sm btn-danger m-2">No</button>
          </div>
          <div v-show="!popup" class="text-center">
            <button type="submit" class="btn btn-lg btn-primary m-2" value="Update Item">Update Item</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: {},
      popup: null
    };
  },

  created: function() {
    this.getItem();
  },

  methods: {
    getItem() {
      let uri = "http://localhost:4000/items/edit/" + this.$route.params.id;
      this.axios.get(uri).then(response => {
        this.item = response.data;
        // I redirect back to the index page if there is no value for item.id
        // because if the user tries to updat a item without a corrosponding ID the app will crash
        if (this.item == false) {
          this.$router.push({ name: "Index" });
        }
      });
    },

    updateItem() {
      let uri = "http://localhost:4000/items/update/" + this.$route.params.id;
      this.axios
        .post(uri, this.item)
        .then(this.$router.push({ name: "Index" }));
    },
    toggle() {
      this.popup = !this.popup;
    }
  }
};
</script>