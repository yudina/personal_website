<template>
  <div class="navigation">
    <ul>
        <li v-for="item in items" :key="item.name">
          <router-link :to="{ url }" :key="item.name">
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
    margin: 0 30px;
    font-size: 24px;
}

</style>
