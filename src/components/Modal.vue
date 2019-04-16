<template>
  <div class="modal-dish" v-if="this.$store.state.activeModalDishId >= 0 && this.$store.state.activeModalDishId != null">
    <div class="modal-dish__image">
      <img :src="this.$store.state.dishes[dishId].srcLarge" :alt="this.$store.state.dishes[dishId].name">
    </div>
    <div class="modal-dish__info">
      <p class="modal-dish__name">{{this.$store.state.dishes[dishId].name}}</p>
      <p class="modal-dish__weight">{{this.$store.state.dishes[dishId].weight}}</p>
      <p class="modal-dish__price">{{this.$store.state.dishes[dishId].price}}</p>
      <!-- <p class="modal-dish__quantity">Количество товара в корзине - {{this.$store.state.dishes[dishId].inCart}}</p> -->
    </div>
    <button class="close-btn" @click="closeModal()">✖</button>
  </div>
</template>

<script>
export default {
  props: {
    dishId: Number,
    default: ''
  },
  methods: {
    closeModal() {
      this.$store.state.activeModalDishId = null
      this.$store.dispatch('closeModalsAndMenu')
    }
  }
}
</script>

<style scoped lang="scss">
  
</style>