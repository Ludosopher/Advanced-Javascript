const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        products:  [],
        filtered: [],
        failed: null,
    },
    methods: {
        getJson(url){
            return fetch(url)
                .then(result => result.json())
                .catch(e => {
                    this.failed = `${API}${url}`;
                }) 
        },
    },
    mounted() {

    }
});

