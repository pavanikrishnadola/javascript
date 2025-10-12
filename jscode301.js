/*parameterized constructor*/
class MyCalci
{
    constructor(a,b){
        this.a=a
        this.b=b
    }
    disvals=()=>{
        console.log("Value of a=",this.a)
        console.log("Value of b=",this.b)
    }
}
MC=new MyCalci(20,10)
MC.disvals()