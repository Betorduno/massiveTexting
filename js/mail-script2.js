
new Vue({
    el: '#mc_embed_signup2',
    data: {
        success: false,
        email: null,
        empty: false
    },
    methods: {
        sendDate() {

            if (this.email != null) {
                axios.post('http://ec2-18-225-31-253.us-east-2.compute.amazonaws.com:1338/subscriptions', this.$data)
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