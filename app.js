
new Vue({
	el: '#app',
	data: {
		show: true,
        msg: "hello world",
        count:0,
        listOfFruit: ["grapes", "apple", "mango", "blueberry"] 
	},
    beforeCreate () {
        console.log("beforeCreate")
    },
    created(){
        console.log("created")
    },
    mounted (){
        console.log("mounted")
    },
    updated (){
        console.log("updated")
    },
    
    methods: { 
       increaseCounter(){
          this.count +=1
        }
     }
     
})