<template>
    <div>
        <ul>
            <li v-for="product in availableProducts" :key="product.id">
                {{ product.title }} - {{ product.price }}
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    computed: {
        ...mapGetters({
            availableProducts: 'products/availableProducts' // Maps the 'availableProducts' getter from the Vuex store to the local computed property 'availableProducts'
        }),
    },
    methods : {
        ...mapActions({
            fetchProducts: 'products/fetchProducts' // Maps the 'fetchProducts' action from the Vuex store to the local method 'fetchProducts'
        })
    },
    created() {
        this.fetchProducts // Calls the 'fetchProducts' method when the component is created, triggering the 'products/fetchProducts' action in the Vuex store
    }
}
</script>