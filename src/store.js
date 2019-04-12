import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    areGoodsInTheCart: false, // меняем на true, если есть хотя бы один товар в корзине (от этого зависит отображение корзины)
    priceInCart: 0, // счетчик общей суммы в корзине
    activeModalDishId: null, // id активного товара в модальном окне
    dishes: [
      {
        id: 0,
        name: 'Плов Чайханский',
        description: 'Камчатский краб, авокадо, свежие овощи и цитрусовый, Камчатский краб, авокадо, свежие овощи и цитрусовый',
        src: require('./assets/img/catalog/plov-chaihanskiy.png'),
        weight: 250, // вес в граммах
        price: 246, // цена в рублях
        category: ['Горячее'],
        inCart: 0
      },
      {
        id: 1,
        name: 'Стейк',
        description: 'Камчатский краб, авокадо, свежие овощи и цитрусовый, Камчатский краб, авокадо, свежие овощи и цитрусовый',
        src: require('./assets/img/catalog/steik.png'),
        weight: 336, // вес в граммах
        price: 246, // цена в рублях
        category: ['Гриль'],
        inCart: 0
      },
      {
        id: 2,
        name: 'Шашлык',
        description: 'Камчатский краб, авокадо, свежие овощи и цитрусовый, Камчатский краб, авокадо, свежие овощи и цитрусовый',
        src: require('./assets/img/catalog/shashlik.png'),
        weight: 250, // вес в граммах
        price: 656, // цена в рублях
        category: ['Гриль', 'Популярные'],
        inCart: 0
      },
      {
        id: 3,
        name: 'Судак',
        description: 'Камчатский краб, авокадо, свежие овощи и цитрусовый, Камчатский краб, авокадо, свежие овощи и цитрусовый',
        src: require('./assets/img/catalog/sudak.png'),
        weight: 250, // вес в граммах
        price: 226, // цена в рублях
        category: ['', 'Популярные'],
        inCart: 0
      },
      {
        id: 4,
        name: 'Манты',
        description: 'Камчатский краб, авокадо, свежие овощи и цитрусовый, Камчатский краб, авокадо, свежие овощи и цитрусовый',
        src: require('./assets/img/catalog/manti.png'),
        weight: 300, // вес в граммах
        price: 299, // цена в рублях
        category: ['Выпечка'],
        inCart: 0
      },
      {
        id: 5,
        name: 'Шаверма',
        description: 'Камчатский краб, авокадо, свежие овощи и цитрусовый, Камчатский краб, авокадо, свежие овощи и цитрусовый',
        src: require('./assets/img/catalog/shaverma.png'),
        weight: 300, // вес в граммах
        price: 180, // цена в рублях
        category: [''],
        inCart: 0
      },
      {
        id: 6,
        name: 'Бешбармак',
        description: 'Камчатский краб, авокадо, свежие овощи и цитрусовый, Камчатский краб, авокадо, свежие овощи и цитрусовый',
        src: require('./assets/img/catalog/beshbarmak.png'),
        weight: 220, // вес в граммах
        price: 446, // цена в рублях
        category: ['', 'Популярные'],
        inCart: 0
      },
      {
        id: 7,
        name: 'Ковурма',
        description: 'Камчатский краб, авокадо, свежие овощи и цитрусовый, Камчатский краб, авокадо, свежие овощи и цитрусовый',
        src: require('./assets/img/catalog/kovurma.png'),
        weight: 250, // вес в граммах
        price: 246, // цена в рублях
        category: ['Гарниры'],
        inCart: 0
      }
    ],
    categories: [
      'Популярные',
      'Горячее',
      'Гарниры',
      'Выпечка',
      'Гриль',
      'Детское',
      'Супы',
      'Закуски',
      'Фастфуд',
      'Веганское',
      'Десерты',
      'Напитки'
    ]
  },
  // mutations: {
  //   plusToCart (val) {
  //     this.$store.dispatch('plusToCart', val);
  //   }
  // },
  actions: {
    // работа с добавлением / убавлением из корзины
    addToCart (context, playload) {
      if (context.state.dishes[playload].inCart === 0) { // добавляем количества товару, по клику на картинку
        context.state.dishes[playload].inCart++
        this.state.priceInCart += context.state.dishes[playload].price // добавляем стоимость товара к общей стоимости в корзине
        if (this.state.areGoodsInTheCart === false) this.state.areGoodsInTheCart = true
      }
    },
    plusToCart (context, playload) {
      context.state.dishes[playload].inCart++ // добавляем количества товару, по которму кликнули "добавить"
      if (this.state.areGoodsInTheCart === false) this.state.areGoodsInTheCart = true
      this.state.priceInCart += context.state.dishes[playload].price // добавляем стоимость товара к общей стоимости в корзине
    },
    minusFromCart (context, playload) {
      if (context.state.dishes[playload].inCart > 0) { // убираем количества товару, по которму кликнули "убрать", только если количество не меньше нуля
        context.state.dishes[playload].inCart--
      }
      if (this.state.areGoodsInTheCart === true && context.state.dishes[playload].inCart === 0) this.state.areGoodsInTheCart = false
      this.state.priceInCart -= context.state.dishes[playload].price // убавляем стоимость товара к общей стоимости в корзине
    },
    removeFromCart () {
      for (let dish of this.state.dishes) {
        dish.inCart = 0
      }
      this.state.areGoodsInTheCart = false
      this.state.priceInCart = 0
    }
    // / работа с добавлением / убавлением из корзины
  }
})
