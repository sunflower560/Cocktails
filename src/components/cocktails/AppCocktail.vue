<template>
  <div class="cocktail">
    <router-link :to="{ name: 'cocktail', params: { id: id } }">
      <img :src="cocktail.strDrinkThumb" alt="">
    </router-link>
    <p>{{ cocktail.strDrink }}</p>
  </div>
</template>

<script setup lang="ts">
import type {ICocktails} from '@/types/type';

const props = defineProps<{ cocktail: ICocktails }>()
const id: string = props.cocktail.idDrink
</script>

<style lang="scss" scoped>
@import '@/assets/styles/main';

.cocktail {
  flex-basis: calc(33.333% - 20px);
  padding-bottom: 20px;

  &:nth-child(3n + 3) {
    padding-right: 0;
  }

  img {
    width: 120px;
    height: 120px;
    margin: 0 auto;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 100%;
  }

  p {
    padding-top: 15px;
    letter-spacing: .1em;
  }
}
</style>