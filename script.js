const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Привіт, Vue!',
      result: '',
      numbers: [1,2,3,4,5,6,7,8,9,0],
      operations:["+","-","*","/"]
    }
  }, 
  methods:{
    input(el){
        this.result = this.result.toString();
        this.result += el
    },
    calck(){
        this.result = eval(this.result);
    },
    reset(){
        this.result = '';
    },
    del(){
        this.result = this.result.toString();
        this.result = this.result.substring(0, this.result.length - 1);
    }
  }
}).mount('#app')