<template>
  <div id="app" class="container">
    <nav class="navbar navbar-expand-sm justify-content-center navbar-dark">
      <ul class="navbar-nav">
        <li>
          <button class="btn btn-success m-2">
            <router-link :to="{ name: 'Create' }" class="nav-link">Add Item</router-link>
          </button>
        </li>
        <li class="nav-item">
          <button class="btn btn-primary m-2">
            <router-link :to="{ name: 'Index' }" class="nav-link">All Items</router-link>
          </button>
        </li>
      </ul>
    </nav>
    <transition name="fade">
      <div class="m-2">
        <router-view></router-view>
      </div>
    </transition>
  </div>
</template>

<script>
export default {};
</script>
