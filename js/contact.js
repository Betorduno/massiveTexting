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
                axios.post('http://ec2-18-225-31-253.us-east-2.compute.amazonaws.com:1338/contacts', this.$data)
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