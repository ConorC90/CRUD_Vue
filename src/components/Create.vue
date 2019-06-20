<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Add Item</h3>
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="toggle()">
          <div class="form-group">
            <label>IATA:</label>
            <input type="text" class="form-control" v-model="item.iata" autofocus>
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
            <input type="checkbox" v-model="item.bags" class="form-control">

            <label>Checkin:</label>
            <input type="checkbox" v-model="item.checkin" class="form-control">

            <label>Seats:</label>
            <input type="checkbox" v-model="item.seats" class="form-control">
          </div>

          <div v-show="popup" class="alert alert-primary" role="alert">
            Are you sure you would like to add this item
            <button
              class="btn btn-sm btn-success m-2"
              @click="addItem()"
            >Yes</button>
            <button @click.prevent="toggle()" class="btn btn-sm btn-danger m-2">No</button>
          </div>

          <div v-show="!popup" class="text-center">
            <button type="submit" class="btn btn-lg btn-primary m-2">Add Item</button>
          </div>
          <div v-show="itemAdded" class="alert alert-success">Item added Successfully</div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      popup: false,
      itemAdded: false,
      item: {
        bags: false,
        checkin: false,
        seats: false
      }
    };
  },
  methods: {
    addItem() {
      let uri = "http://localhost:4000/items/add";
      this.axios.post(uri, this.item);
      this.item = {};
      this.itemAdded = true;
      setTimeout(() => (this.itemAdded = false), 1000);
    },
    toggle: function() {
      this.popup = !this.popup;
    }
  }
};
</script>