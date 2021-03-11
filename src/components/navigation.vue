<template>
  <div class="navigation">
    <ul>
        <li>
          <router-link v-for="item in items" :to="item.url" :key="item.name">
            {{ item.name }}
            </router-link>  
        </li>
    </ul>

  </div>
</template>

<script>

export default {
  name: 'navigation',
  data() {
    return {
      items: [
        {
          name: "Home",
          url: "/"
        },
        {
          name: "Gallery",
          url: "/gallery"
        },
        {
          name: "Store",
          url: "/store"
        },
        {
          name: "Commissions",
          url: "/commissions"
        },
      ]
    }
  }
};
</script>

<style>
.navigation ul {
    list-style-type: none;
    padding: 0;
    margin: 15px 0 0 0;
}

.navigation ul li {
    display: inline-block;
    font-size: 24px;
}

.navigation ul li a {
    color: black;
    text-decoration: none;
    margin: 0 30px;
}

.router-link-exact-active.router-link-active {
    color: orange;
}

</style>
