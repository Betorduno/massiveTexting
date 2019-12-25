new Vue({
    el: '#contact-f',
    data: {
        name: null,
        email: null,
        subject: null,
        msg: null,
        success: false,
        empty: false
    },
    methods: {
        sendDate() {
            if (this.email != null && this.name != null && this.subject != null && this.msg != null) {
                axios.post('https://api.massivetexting.com/contacts', this.$data)
                    .then((response) => {
                        this.success = true;
                        this.empty = false;
                        this.email ='';
                        this.name ='';
                        this.msg ='';
                        this.subject ='';
                    })
                    .catch((e) => {
                        console.error(e)
                    })

            } else {
                this.empty = true;
            }
        }
    }
})