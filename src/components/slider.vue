<template>
  <div class="slider">
    <div class="slider__image-holder" v-for="(slide, index) of artImages" :key="index" v-show="index === currentActiveSlide">
      <img class="slider__image" :src="slide.image" >
    </div>
          <div class="slider__control">
        <button class="slider__button slider__button--is-prev" @click="handleSlideChange(-1)">←</button>
        <button class="slider__button slider__button--is-next" @click="handleSlideChange(1)">→</button>
      </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        currentActiveSlide: 0,
        artImages:[
          {
            image: require('../assets/sitting.png')
          },
          {
            image: require('../assets/pika.png')
          },
          {
            image: require('../assets/headshot.png')
          }

        ]
      }
    },
     methods: {
      // We'll pass the function either 1 or -1 to indicate which direction we'the slides will go
      handleSlideChange(val) {
        let direction;
        const calculatedNextSlide = this.currentActiveSlide + val;
        if (val > 0) {
          direction = "next";
        } else {
          direction = "previous";
        }
        if (direction === "next" && calculatedNextSlide < this.artImages.length) {
          this.currentActiveSlide += val;
        } else if (direction === "next") {
          this.currentActiveSlide = 0;
        } else if (direction === "previous" && calculatedNextSlide < 0) {
          this.currentActiveSlide = this.artImages.length - 1;
        } else {
          this.currentActiveSlide += val;
        }
      }
    },
      computed: {
    nextActiveSlide() {
      return this.currentActiveSlide + 1 >= this.artImages.length ? 0 : this.currentActiveSlide + 1;
    }
  }
  }
</script>

<style>

.slider {
  display: inline-block;
}

.slider__image{
    width: 100%;
    max-width: 300px;
}

</style>