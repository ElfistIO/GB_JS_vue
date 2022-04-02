Vue.component('products',{
    data () {
        return {
            catalogUrl: '',
            products: [],
            filtered: [],
        }
    },
    methods: {
        filter(value){
            let regexp = new RegExp(value, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        }
    },
    mounted(){
        this.$parent.getJson('/api/getProducts')
            .then(data => {
                for(let el of data){
                    this.products.push(el);
                    this.filtered.push(el);
                }
            });
    },
    template: `
        <div class="products__box">
            <product
            v-for="item of filtered" 
            :key="item.id_product"  
            :product="item">
            </product>
        </div>
    `
})

Vue.component('product',{
    props: ['product'],
    template: `
    <div class="products__card">
        <img :src="product.img" alt="product_1" class="products__card-img">
        <div class="products__card-img-shadow">
            <button href="#" class="products__add-to-cart" @click="$root.$refs.cart.addProduct(product)"><img src="image/cart.svg" alt="cart" class="products__add-to-cart-img-margin"> Add to Cart</button>
        </div>
        <h3><a href="product.html" class="products__card-heading">{{product.product_name}}</a></h3>
        <p class="products__card-text">Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.</p>
        <h4 class="products__card-text-pink">$ {{product.price}}</h4>
    </div>
    `
})
