<template>
  <div class="modal-dish" v-if="this.$store.state.activeModalDishId >= 0 && this.$store.state.activeModalDishId != null">
    <div class="modal-dish__image-section animated fadeInUp">
      <img :src="this.$store.state.dishes[dishId].srcLarge" :alt="this.$store.state.dishes[dishId].name">
    </div>
    <div class="modal-dish__info-section animated fadeInUp">
      <div class="modal-dish__info">
        <div class="modal-dish__info__heading animated fadeInUp">
          <span class="title-2 modal-dish__name">{{this.$store.state.dishes[dishId].name}}</span>
          <span class="param-weight modal-dish__weight">{{this.$store.state.dishes[dishId].weight}} г</span>
        </div>
        <div class="modal-dish__description animated fadeInUp">
          <div class="modal-naming">Описание</div>
          {{this.$store.state.dishes[dishId].description}}
        </div>
        <div class="modal-dish__composition animated fadeInUp">
          <div class="modal-naming">Состав</div>
          {{this.$store.state.dishes[dishId].composition}}
        </div>
        <div class="modal-dish__nutr-values animated fadeInUp">
          <div class="modal-naming">Пищевая ценность</div>
          <div class="modal-dish__nutr-values__parameters">
            <div class="modal-dish__nutr-values__param animated fadeInUp">
              <span class="modal-dish__nutr-values__val">
                {{this.$store.state.dishes[dishId].kcal}}
              </span>
              <div class="modal-naming modal-dish__nutr-values__name">ккал</div>
            </div>
            <div class="modal-dish__nutr-values__param animated fadeInUp">
              <span class="modal-dish__nutr-values__val">
                {{this.$store.state.dishes[dishId].protein}}
              </span>
              <div class="modal-naming modal-dish__nutr-values__name">белки</div>
            </div>
            <div class="modal-dish__nutr-values__param animated fadeInUp">
              <span class="modal-dish__nutr-val__val">
                {{this.$store.state.dishes[dishId].fats}}
              </span>
              <div class="modal-naming modal-dish__nutr-values__name">жиры</div>
            </div>
            <div class="modal-dish__nutr-values__param animated fadeInUp">
              <span class="modal-dish__nutr-values__val">
                {{this.$store.state.dishes[dishId].carbohydrates}}
              </span>
              <div class="modal-naming modal-dish__nutr-values__name">углеводы</div>
            </div>
          </div>
        </div>
        <!-- <p class="modal-dish__quantity">Количество товара в корзине - {{this.$store.state.dishes[dishId].inCart}}</p> -->
      </div>
    </div>
    <button class="close-btn animated fadeIn" @click="closeModal()"><span>✕</span></button>
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