<template>
  <div class="hello">
    <img alt="Vue logo" src="../assets/benmon_color.png">
    <h1>it's bemon time</h1>
    <div class="socials">
        <ul>
          <li>
            <a href="https://www.instagram.com/yujibell/"><i class="fab fa-instagram fa-2x"></i></a>
          </li>
          <li>
            <a href="https://ca.linkedin.com/in/yujia-ding-17702114a?trk=people-guest_people_search-card"><i class="fab fa-linkedin fa-2x"></i></a>
          </li>
          <li>
            <a href="https://www.facebook.com/yujizzle"><i class="fab fa-facebook-square fa-2x"></i></a>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>

export default {
  name: 'BemonHeader'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

img {
  width: 300px;
}

.socials {
  padding:1em;
  text-align: center;
}

.socials ul{
  list-style-type: none;
  display: inline-block;
  padding:0;
}
.socials ul li{
}

</style>
