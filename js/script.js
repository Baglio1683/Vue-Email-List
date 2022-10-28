const {createApp} = Vue; 

createApp({

data(){

    return{
        emailName : "", 
        arrayNum : [], 
    }
}, 

created(){

    for(let i =0 ; i < 10 ; i++){

            axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((resp)=>{
            console.log(resp)
            this.emailName = resp.data.response
            this.arrayNum.push(this.emailName)
            this.emailName = ""
            });
          }
        } 


    

}).mount("#app");