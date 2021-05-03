<template>
  <div>
    <h1>Commission fees</h1>

    <div class="wrapper">
      <div class="imgs">
        <slider />
      </div>
      <div class="content">
        <p class="rules">
        -For personal use only. <br>
        -Payment through PayPal. <br>
        -2-3 weeks turnaround time. <br>
        -25% off extra characters. <br>

        I will draw: PG 13, couples, animals, fanart, OCs, portraits. <br>
        I reserve the right to refuse requests!

        Reach me on any of the mentionned socials :3</p>
      </div>
    </div>



  </div>
</template>

<script>

import slider from '../components/slider'
export default {
  name: 'commission',
  components:{
    slider,
  }
}
</script>

<style>
.imgs{
  display: flex;
}
.commissions{
  width: 200px;
  height: 200px;
  margin-right: 50px;
}
.rules{
   display: inline-block;
   vertical-align: top;
   text-align: left;
   width: 300px;
   height: 300px;
   padding: 5px;
   margin-top: 25px;
}

.wrapper {
  margin: 0 auto;
  display: flex;
  max-width: 1440px;
  justify-content: center;
}

</style>

