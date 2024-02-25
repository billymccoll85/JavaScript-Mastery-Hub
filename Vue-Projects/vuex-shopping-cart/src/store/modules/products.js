// Importing the 'shop' module from '@/api/shop'
import shop from '@/api/shop';

// Exporting an object as the default export
export default {
    // Setting the 'namespaced' property to 'true'
    namespaced: true,

    // Defining the 'state' object with an empty 'products' array
    state: {
        products: []
    },
    
    // Defining the 'mutations' object with a single 'setProducts' method
    mutations: {
        // The 'setProducts' method updates the 'products' state with the provided 'products' array
        setProducts(state, products) { 
            state.products = products;
        }
    },
    
    // Defining the 'actions' object with a single 'fetchProducts' method
    actions: {
        // The 'fetchProducts' method is an asynchronous action that fetches products from the 'shop' module
        async fetchProducts({ commit }) {
            const products = await shop.getProducts();
            // The 'commit' method is used to call the 'setProducts' mutation with the fetched 'products'
            commit('setProducts', products);
        }
    },
    
    // Defining the 'getters' object with a single 'availableProducts' getter
    getters: {
        // The 'availableProducts' getter returns an array of products with inventory greater than 0
        availableProducts(state) {
            return state.products.filter(product => product.inventory > 0); 
        }
    }
};
