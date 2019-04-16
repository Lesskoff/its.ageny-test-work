<template>
  <div class="cart">
    <h2 class="title-2">
      <span :class="{'cart-text-left': this.$store.state.areGoodsInTheCart}">Мой заказ</span>
    </h2>
    <div class="cart-empty" :class="{'cart-empty-invisible': this.$store.state.areGoodsInTheCart}">
      <div class="cart-empty__img"></div>
      <p>Пока пусто ;)</p>
    </div>
    <div class="cart-with-dishes" :class="{'cart-with-dishes-visible': this.$store.state.areGoodsInTheCart}">
      <button class="remove-btn cart__remove-all" @click="removeFromCart()"></button>
      <div class="dish-in-cart-list">
        <div class="dish-in-cart" v-for="dish of filteredInCart" :key="dish.id">
          <!-- <div class="dish-in-cart__info dish__info"> -->
            <div class="dish-in-cart__name-weight">
              <span class="dish-in-cart__name">{{dish.name}}</span>
              <span class="dish-in-cart__weight">{{dish.weight}} г</span>
            </div>
            <div class="dish-in-cart__controllers-price">
              <div class="dish-in-cart__controllers">
                <button class="cart-btn dish-in-cart__add" @click="plusToCart(dish.id)">&gt;</button>
                <span class="dish-in-cart__quantity"><span>✖</span>{{dish.inCart}}</span>
                <button class="cart-btn dish-in-cart__remove" @click="minusFromCart(dish.id)" v-if="dish.inCart > 0">&lt;</button>
              </div>
              <span class="dish-in-cart__price">{{dish.price}} ₽</span>
            </div>
          <!-- </div> -->
        </div>
      </div>
      <div class="cart__total">
        <div class="row">
          <div class="cart__address">
            <span class="addr-icon"></span>
            <span>Московское шоссе, 13ВР</span>
          </div>
        </div>
        <div class="row">
          <div class="cart__quantity">
            <p>{{filteredInCart.length}}</p>
            <span>Блюда</span>
          </div>
          <div class="cart__sum-price">
            <p>{{$store.state.priceInCart}} ₽</p>
            <span>Итого</span>
          </div>
        </div>
        <div class="row checkout-btn-row">
          <button class="btn checkout-btn">Оформить заказ</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    dishes() {
      return this.$store.state.dishes; // все блюда, без фильрации по категориям
    },
    filteredInCart() { // фльтруем и показываем только элементы, которые добавлены в корзину
      return this.$store.state.dishes.filter(item => {
        return item.inCart > 0
      })
    }
  },
  methods: {
    // желательно объединить эти функции в миксины или вроде того, потому как они повторяются в компонентах Cart и Dish
    plusToCart (val) {
      this.$store.dispatch('plusToCart', val);
    },
    minusFromCart(val) {
      this.$store.dispatch('minusFromCart', val);
    },
    // / желательно объединить эти функции в миксины или вроде того, потому как они повторяются в компонентах Cart и Dish
    removeFromCart() {
      this.$store.dispatch('removeFromCart')
    }
  }
}
</script>