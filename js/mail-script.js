
new Vue({
    el: '#mc_embed_signup',
    data: {
        success: false,
        email: null,
        empty: false
    },
    methods: {
        sendDate() {

            if (this.email != null) {
                axios.post('https://app.massivetexting.com/subscriptions', this.$data)
                    .then((response) => {
                        this.success = true;
                        this.email = '';
                        this.empty= false;
                    })
                    .catch((e) => {
                        console.error(e)
                    })

            } else {
              this.empty= true;
            }

        }
    }
})