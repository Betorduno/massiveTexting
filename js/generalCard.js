window.onload = function () {
    new Vue({
        el: '#pricings',
        data: {
            plans: []
        },
        methods: {
            
            getDate() {
                var req = new XMLHttpRequest();
                req.open('GET', 'http://ec2-3-83-101-27.compute-1.amazonaws.com:1337/plans', false); 
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