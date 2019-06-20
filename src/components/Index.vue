
<template>
  <div>
    <h1>All Flights</h1>

    <input
      type="textbox"
      v-model="keyword"
      class="input-group mb-3"
      placeholder="Filter Items by ID, Name, IATA, or Color"
    >
    <table class="table table-hover table-bordered">
      <thead class="thead-dark">
        <tr>
          <th v-for="colume in columes" :key="colume.id">{{colume}}</th>
        </tr>
      </thead>

      <tbody v-for="item in filteredItems" :key="item._id">
        <tr>
          <td>{{ item._id }}</td>
          <td>{{ item.iata}}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.primary_color }}</td>
          <td>{{ item.secondary_color }}</td>
          <td>{{ item.bags }}</td>
          <td>{{ item.checkin }}</td>
          <td>{{ item.seats }}</td>
          <td>
            <router-link :to="{name: 'Edit', params: { id: item._id }}" class="btn btn-primary">Edit</router-link>
          </td>

          <td>
            <button class="btn btn-danger" v-on:click="deleteItem(item._id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyword: "",
      popup: false,
      items: [],
      columes: [
        "ID",
        "IATA",
        "Name",
        "Pirmary Color",
        "Secondary Color",
        "Bags",
        "Checkin",
        "Seats",
        "Edit Item",
        "Delete Item"
      ]
    };
  },

  created: function() {
    this.fetchItems();
  },

  methods: {
    fetchItems() {
      let uri = "http://localhost:4000/items";
      this.axios.get(uri).then(response => {
        this.items = response.data;
      });
    },
    deleteItem(id) {
      let uri = "http://localhost:4000/items/delete/" + id;
      this.items.splice(id, 1);
      this.axios.get(uri);
      this.fetchItems();
    }
  },

  computed: {
    filteredItems: function() {
      let keyword = this.keyword.toLowerCase();
      return this.items.filter(item => {
        return (
          item._id.toLowerCase().match(keyword) ||
          item.name.toLowerCase().match(keyword) ||
          item.primary_color.toLowerCase().match(keyword) ||
          item.secondary_color.toLowerCase().match(keyword)
        );
      });
    }
  }
};
</script>