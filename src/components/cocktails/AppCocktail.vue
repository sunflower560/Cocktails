<template>
  <div class="cocktail">
    <img :src="cocktailImg" alt="">
    <p>
      {{ cocktailText }}
    </p>
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  cocktailImg: {
    type: String,
    required: true
  },
  cocktailText: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.cocktail {
  padding-top: 50px;

  img {
    max-width: 150px;
  }
}
</style>