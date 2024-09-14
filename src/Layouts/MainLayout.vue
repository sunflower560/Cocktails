<template>
  <div class="root">
    <div class="img" :style="{ backgroundImage: `url(${imgUrl})` }"></div>

    <div class="main">
      <el-button class="btn">Get random cocktail</el-button>

      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  imgUrl: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/main';


.root {
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  background-color: $background;

  .img {
    width: 40%;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover;

    @media (max-width: 1025px) {
      width: 100%;
    }

    @media (max-width: 450px) {
      width: 100%;
      height: 70vh;
    }
  }

  .main {
    position: relative;
    width: 100%;
    display: flex;
    padding: 32px 40px;


    .btn {
      position: absolute;
      top: 32px;
      right: 40px;
      font-size: 16px;
      background-color: $accent;
      border-color: $accent;
      color: $text;

      &:hover, &:active {
        background-color: darken($accent, 10%);
        border-color: darken($accent, 10%);
        transition: all .2s linear;
      }
    }

    @media (max-width: 450px) {
      align-items: center;
      justify-content: center;

      width: 100%;
      text-align: center;
      padding: 20px;
    }
  }

  @media (max-width: 450px) {
    flex-direction: column;
  }
}

</style>