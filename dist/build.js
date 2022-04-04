/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./public/js/Cart.js":
/*!***************************!*\
  !*** ./public/js/Cart.js ***!
  \***************************/
/***/ (() => {

eval("Vue.component('cart', {\n  data() {\n    return {\n      cartUrl: '/getBasket.json',\n      cartItems: [],\n      show: false,\n      cartQuantity: 0\n    };\n  },\n\n  methods: {\n    addProduct(product) {\n      let change = this.cartItems.find(el => el.id_product === product.id_product);\n\n      if (change) {\n        this.$parent.putJson(`/api/putProduct/${change.id_product}`, {\n          quantity: 1\n        });\n        change.quantity++;\n      } else {\n        let prod = Object.assign({\n          quantity: 1\n        }, product);\n        this.$parent.postJson('/api/postProduct', prod).then(data => {\n          if (data.result === 1) {\n            this.cartItems.push(prod);\n          }\n        });\n      }\n    },\n\n    remove(item) {\n      let change = this.cartItems.find(el => el.id_product === item.id_product);\n      this.$parent.deleteJson(`/api/deleteProduct/${change.id_product}`).then(data => {\n        if (data.result === 1) {\n          this.cartItems = data.cartItems.contents;\n          console.log(this.cartItems);\n        }\n      });\n    },\n\n    calculateCartPrice() {\n      let cartPrice = 0;\n      let cart = this.cartItems[1];\n      cart.forEach(el => cartPrice += el.quantity * el.price);\n      return cartPrice;\n    }\n\n  },\n  computed: {\n    calculateCartQuantity() {\n      this.cartItems.contents.forEach(el => this.cartQuantity += el.quantity);\n      return this.cartQuantity;\n    }\n\n  },\n\n  mounted() {\n    this.$parent.getJson('/api/getCart').then(data => {\n      for (let el of data.contents) {\n        this.cartItems.push(el);\n      }\n    });\n  },\n\n  template: `\n    <div>\n        <button type=\"button\" href=\"cart.html\" class=\"nav__menu__link\" @click=\"show = !show\">\n            <svg width=\"32\" height=\"29\" viewBox=\"0 0 32 29\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path d=\"M26.2009 29C25.5532 28.9738 24.9415 28.6948 24.4972 28.2227C24.0529 27.7506 23.8114 27.1232 23.8245 26.475C23.8376 25.8269 24.1043 25.2097 24.5673 24.7559C25.0303 24.3022 25.6527 24.048 26.301 24.048C26.9493 24.048 27.5717 24.3022 28.0347 24.7559C28.4977 25.2097 28.7644 25.8269 28.7775 26.475C28.7906 27.1232 28.549 27.7506 28.1047 28.2227C27.6604 28.6948 27.0488 28.9738 26.401 29H26.2009ZM6.75293 26.32C6.75293 25.79 6.91011 25.2718 7.20459 24.8311C7.49907 24.3904 7.91764 24.0469 8.40735 23.844C8.89705 23.6412 9.43594 23.5881 9.95581 23.6915C10.4757 23.7949 10.9532 24.0502 11.328 24.425C11.7028 24.7998 11.9581 25.2773 12.0615 25.7972C12.1649 26.317 12.1118 26.8559 11.9089 27.3456C11.7061 27.8353 11.3626 28.2539 10.9219 28.5483C10.4812 28.8428 9.96304 29 9.43298 29C9.08087 29.0003 8.73212 28.9311 8.40674 28.7966C8.08136 28.662 7.78569 28.4646 7.53662 28.2158C7.28755 27.9669 7.09001 27.6713 6.9552 27.3461C6.82039 27.0208 6.75098 26.6721 6.75098 26.32H6.75293ZM10.553 20.686C10.2935 20.6868 10.0409 20.6024 9.83411 20.4457C9.62727 20.2891 9.47758 20.0689 9.40796 19.819L4.57495 2.36401H1.18201C0.868521 2.36401 0.567859 2.23947 0.346191 2.01781C0.124523 1.79614 0 1.49549 0 1.18201C0 0.868519 0.124523 0.567873 0.346191 0.346205C0.567859 0.124537 0.868521 5.81268e-06 1.18201 5.81268e-06H5.46301C5.7225 -0.00080736 5.97504 0.0837201 6.18176 0.240568C6.38848 0.397416 6.53784 0.617884 6.60693 0.868006L11.4399 18.323H24.6179L29.001 8.27501H14.401C14.2428 8.27961 14.0854 8.25242 13.9379 8.19507C13.7904 8.13771 13.6559 8.05134 13.5424 7.94108C13.4288 7.83082 13.3386 7.69891 13.277 7.55315C13.2154 7.40739 13.1836 7.25075 13.1836 7.0925C13.1836 6.93426 13.2154 6.77762 13.277 6.63186C13.3386 6.4861 13.4288 6.35419 13.5424 6.24393C13.6559 6.13367 13.7904 6.0473 13.9379 5.98994C14.0854 5.93259 14.2428 5.90541 14.401 5.91001H30.814C31.0097 5.90996 31.2022 5.95866 31.3744 6.05172C31.5465 6.14478 31.6928 6.27926 31.7999 6.44301C31.9078 6.60729 31.9734 6.79569 31.9908 6.99145C32.0083 7.18721 31.9771 7.38424 31.9 7.565L26.495 19.977C26.4026 20.1876 26.251 20.3668 26.0585 20.4927C25.866 20.6186 25.641 20.6858 25.411 20.686H10.553Z\"/>\n            </svg>\n        </button>\n        <div class=\"nav__menu-item-nr\">\n            <!-- number of items -->\n            <span>{{  }}</span>\n        </div>\n        <div class=\"cart-block\" v-show=\"show\">\n            <p v-if=\"!cartItems.length\" class=\"cart-emty\">Cart is emty!</p>\n            <cart-item class=\"cart-item\" \n            v-for=\"item of cartItems\" \n            :key=\"item.id_product\"\n            :cart-item=\"item\" \n            @remove=\"remove\">\n            </cart-item>\n            <p v-if='!cartItems.length' class=\"cart-block-total\">Total: {{  }}</p>\n        </div>\n    </div>\n    `\n});\nVue.component('cart-item', {\n  props: ['cartItem'],\n  template: `\n    <div class=\"cart-item\">\n        <img :src=\"cartItem.img\" class=\"cart-img\"/>\n        <div class=\"cart-text\">\n            <h3>{{ cartItem.product_name }}</h3>\n            <p>{{ cartItem.price }} $</p>\n            <p>quantity: {{ cartItem.quantity }}</p>\n            <h4>total: {{ cartItem.quantity * cartItem.price }} $</h4>\n        </div>\n        <button class=\"products__browse\" @click=\"$parent.remove(cartItem)\">&times;</button>\n    </div>\n    `\n});\n\n//# sourceURL=webpack://gb_online_store_vue/./public/js/Cart.js?");

/***/ }),

/***/ "./public/js/Error.js":
/*!****************************!*\
  !*** ./public/js/Error.js ***!
  \****************************/
/***/ (() => {

eval("Vue.component('error', {\n  data() {\n    return {\n      text: ''\n    };\n  },\n\n  mathod: {\n    setError(error) {\n      this.text = error;\n    }\n\n  },\n  template: `\n    <div> {{ text }} </div>\n    `\n});\n\n//# sourceURL=webpack://gb_online_store_vue/./public/js/Error.js?");

/***/ }),

/***/ "./public/js/Products.js":
/*!*******************************!*\
  !*** ./public/js/Products.js ***!
  \*******************************/
/***/ (() => {

eval("Vue.component('products', {\n  data() {\n    return {\n      catalogUrl: '',\n      products: [],\n      filtered: []\n    };\n  },\n\n  methods: {\n    filter(value) {\n      let regexp = new RegExp(value, 'i');\n      this.filtered = this.products.filter(el => regexp.test(el.product_name));\n    }\n\n  },\n\n  mounted() {\n    this.$parent.getJson('/api/getProducts').then(data => {\n      for (let el of data) {\n        this.products.push(el);\n        this.filtered.push(el);\n      }\n    });\n  },\n\n  template: `\n        <div class=\"products__box\">\n            <product\n            v-for=\"item of filtered\" \n            :key=\"item.id_product\"  \n            :product=\"item\">\n            </product>\n        </div>\n    `\n});\nVue.component('product', {\n  props: ['product'],\n  template: `\n    <div class=\"products__card\">\n        <img :src=\"product.img\" alt=\"product_1\" class=\"products__card-img\">\n        <div class=\"products__card-img-shadow\">\n            <button href=\"#\" class=\"products__add-to-cart\" @click=\"$root.$refs.cart.addProduct(product)\"><img src=\"image/cart.svg\" alt=\"cart\" class=\"products__add-to-cart-img-margin\"> Add to Cart</button>\n        </div>\n        <h3><a href=\"product.html\" class=\"products__card-heading\">{{product.product_name}}</a></h3>\n        <p class=\"products__card-text\">Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.</p>\n        <h4 class=\"products__card-text-pink\">$ {{product.price}}</h4>\n    </div>\n    `\n});\n\n//# sourceURL=webpack://gb_online_store_vue/./public/js/Products.js?");

/***/ }),

/***/ "./public/js/Search.js":
/*!*****************************!*\
  !*** ./public/js/Search.js ***!
  \*****************************/
/***/ (() => {

eval("Vue.component('search', {\n  data() {\n    return {\n      userSearch: ''\n    };\n  },\n\n  template: `<form action=\"#\" class=\"nav__menu__search-link\" @submit.prevent=\"$parent.$refs.products.filter(userSearch)\">\n                <label class=\"search-label visually-hidden\" for=\"search\">search</label>  \n                <input type=\"search\" placeholder=\"Search...\" class=\"nav__menu__search-link-placeholder\" v-model=\"userSearch\">\n                </form>\n`\n});\n\n//# sourceURL=webpack://gb_online_store_vue/./public/js/Search.js?");

/***/ }),

/***/ "./public/js/main.js":
/*!***************************!*\
  !*** ./public/js/main.js ***!
  \***************************/
/***/ (() => {

eval("const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';\nconst app = new Vue({\n  el: '#app',\n  data: {\n    userSearch: '',\n    showSearch: false\n  },\n  methods: {\n    getJson(url) {\n      return fetch(url).then(result => result.json()).catch(error => {\n        this.$refs.error.setError(error);\n      });\n    },\n\n    postJson(url, data) {\n      return fetch(url, {\n        method: 'POST',\n        headers: {\n          \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify(data)\n      }).then(result => result.json()).catch(error => {\n        this.$refs.error.setError(error);\n      });\n    },\n\n    putJson(url, data) {\n      return fetch(url, {\n        method: 'PUT',\n        headers: {\n          \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify(data)\n      }).then(result => result.json()).catch(error => {\n        this.$refs.error.setError(error);\n      });\n    },\n\n    deleteJson(url, data) {\n      return fetch(url, {\n        method: 'DELETE',\n        headers: {\n          \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify(data)\n      }).then(result => result.json()).catch(error => {\n        this.$refs.error.setError(error);\n      });\n    }\n\n  },\n\n  mounted() {}\n\n});\n\n//# sourceURL=webpack://gb_online_store_vue/./public/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./public/js/main.js"]();
/******/ 	__webpack_modules__["./public/js/Cart.js"]();
/******/ 	__webpack_modules__["./public/js/Error.js"]();
/******/ 	__webpack_modules__["./public/js/Search.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./public/js/Products.js"]();
/******/ 	
/******/ })()
;