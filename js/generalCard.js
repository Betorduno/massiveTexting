window.onload = function () {
    new Vue({
        el: '#pricings',
        data: {
            plans: []
        },
        methods: {
            
            getDate() {
                var req = new XMLHttpRequest();
                req.open('GET', 'http://192.168.24.83:1337/plans', false); 
                req.send(null);
    
                this.plans = JSON.parse(req.responseText);

                this.plans = this.plans.map(plan => {
                    plan['class']="card pricing-plan-"+ plan.name +" pricing-card shadow mb-5 bg-white rounded"
                    
                    return plan;
                });
            }
            
        },
        mounted() {
            this.getDate();
        }
    });    
}