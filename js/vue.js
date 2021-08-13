var app1;
$(document).ready(function(){
    app1 = new Vue({
        el: "#app1",
        data: {
//             natives:["1", "2", "3", "4", "5"]
            natives:[],
            nati: "",
            cb: {},
            city: ""
        },
        created(){
            console.log("From Vue")
        },
        methods: {
            pushNative(country, city){
                var that = this;
                var temp = [country];
                temp.push(this.natives[0]);
                temp.push(this.natives[1]);
                // temp.push(this.natives[2]);
                // temp.push(this.natives[3]);
                this.natives = temp;
                this.nati = country;
                this.city = city;
                $("#effect").animate({fontSize: "36px"}, 10, function(){

                    $("#effect").animate({fontSize: "18px"}, 30);
                })
            }
        }
    });
})
var app2;
$(document).ready(function(){
    app2 = new Vue({
        el: "#app2",
        data: {
            total: []
        },
        created(){
            console.log("From Vue")
        },
        methods: {
            getTotal(){
                t = 0;
                this.total.forEach(function(e){
                    t += e.total;
                });
                return t;
            }
        }
    });
})