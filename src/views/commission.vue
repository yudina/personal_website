<template>
  <div>
    <h1>Commission fees</h1>
    <div class="title">
        <h1>SKETCH</h1>
    </div>
    <div class="wrapper">
     
      <div class="imgs">
        <slider />
      </div>
      <div class="content">
        <h1 class="prices">
         BUST:..............15$ <br>
         HALFBODY:......20$ <br>
         FULLBODY:......25$ <br>
        </h1>
        <h3 class="explanation">
        Sketch + grayscale coloring. <br> <br>
        + 144 DPI <br>
        + 11 x 14 in <br>
        + Simplistic background included. <br>
      </h3>
      </div>

    </div>

    
    <div class="title">
      <h1>CELL SHADING</h1>
    </div>
    <div class="wrapper">
     
      <div class="imgs">
        <slider />
      </div>
      <div class="content">
        <h1 class="prices">
         BUST:..............30$ <br>
         HALFBODY:......35$ <br>
         FULLBODY:......40$ <br>
        </h1>
        <h3 class="explanation">
        Lineart + colors. <br> <br>
        + 144 DPI <br>
        + 11 x 14 in <br>
        + 25% off extra characters <br>
        + Simplistic background included. <br>
      </h3>
      </div>
    </div>

    <div class="title">
      <h1>CHIBI</h1>
    </div>
    <div class="wrapper">
     
      <div class="imgs">
        <slider />
      </div>
      <div class="content">
        <h1 class="prices">
         FULLBODY:......15$ <br>
        </h1>
        <h3 class="explanation">
         Lineart + colors. <br> <br>
        + 144 DPI <br>
        + 11 x 14 in <br>
        + Simplistic background included. <br>
      </h3>
      </div>
    </div>

    <div class="title">
      <h1>DIGITAL PAINTING</h1>
    </div>
    <div class="wrapper">
     
      <div class="imgs">
        <slider />
      </div>
      <div class="content">
        <h1 class="prices">
         BUST:......50$ <br>
        </h1>
        <h3 class="explanation">
         Most detailed style of mine. Fully colored and shaded. <br> <br>
        + 280 DPI <br>
        + 11 x 14 in <br>
        + Realism or Semi-realism ok!<br>
        + Specific background included. <br>
      </h3>
      </div>
    </div>

  <h1> MORE INFO </h1>
  <p class= "rules">
        + Prices for personal use only. x 4 on the original price for commercial use.<br>
        + Payment through PayPal or Wealthsimple Cash. <br>
        + 2-3 weeks turnaround time. <br>
        + 25% off extra characters. <br>

        I will draw: PG 13, couples, animals, fanart, OCs, portraits. <br>
        I will not draw: mecha or furry<br><br>

        Reach me on any of the mentionned socials :3</p>

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

.title {
  background: #ffaa80;
  width: 550px;
  height: 70px;
  color: white;
  justify-content: center;
  display: inline-block;
  margin-top: 10px;
}

.wrapper {
  margin: 0 auto;
  display: flex;
  max-width: 1000px;
  justify-content: center;
}

.content {
  position: relative;
}

.prices{
  margin: 0;
  position: absolute;
  top: 50%;
   text-align: center;
   width: 250px;
   height: 110px;
   background: #ffaa80;
   color: white;
}

.explanation {
   vertical-align: top;
   text-align: left;
   width: 250px;
   height: 110px;
   align-self: flex-end;
   flex-wrap: wrap;
}

.rules {
    text-align: left;
    margin-left: 40%
}

</style>

