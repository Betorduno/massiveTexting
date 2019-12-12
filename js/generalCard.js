var i = 0;
var txt = 'Text Messaging For Business Marketing.';
var speed = 300;
window.onload = function () {
    typeWriter();
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
                console.log(this.plans)

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


function typeWriter() {
    setLetters()
}

function setLetters () {
    if (i <= txt.length) {
        if (i === txt.length) {
            setTimeout(function () {
                document.getElementById("writer").innerHTML = ''
                i = 0;

                setLetters();
            }, 2000);
        }
        document.getElementById("writer").innerHTML += txt.charAt(i);
        i++;
        setTimeout(setLetters, speed);
    }
}