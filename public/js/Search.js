Vue.component('search',{
    data(){
        return {
            userSearch: ''
        }
    },
    template: `<form action="#" class="nav__menu__search-link" @submit.prevent="$parent.$refs.products.filter(userSearch)">
                <label class="search-label visually-hidden" for="search">search</label>  
                <input type="search" placeholder="Search..." class="nav__menu__search-link-placeholder" v-model="userSearch">
                </form>
`
})
