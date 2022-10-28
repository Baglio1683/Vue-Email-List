const {createApp} = Vue; 

createApp({

data(){

    return{
        
        arrayNum : [], 
    }
}, 

created(){

    for(let i =0 ; i < 10 ; i++){

            axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((resp)=>{
          
            this.arrayNum.push(resp.data.response)

            });
          }
        } 


    

}).mount("#app");