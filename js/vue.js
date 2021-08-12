var app1;
$(document).ready(function(){
    app1 = new Vue({
        el: "#app1",
        data: {

            natives:["1", "2", "3", "4", "5"]
        },
        created(){
            console.log("From Vue")
        },
        methods: {
            pushNative(country){
                var temp = [country];
                temp.push(this.natives[0]);
                temp.push(this.natives[1]);
                temp.push(this.natives[2]);
                temp.push(this.natives[3]);
                this.natives = temp;
            }
        }
    });
})
var app2;
$(document).ready(function(){
    app2 = new Vue({
        el: "#app2",
        data: {
            total: 0,
            now: 0
        },
        created(){
            console.log("From Vue")
        },
        methods: {
    
        }
    });
})