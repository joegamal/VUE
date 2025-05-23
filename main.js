const {createApp} = Vue;

createApp({
    setup(){
        return {
            message: "hello from vue",    
        }
    }
}).mount("#app");