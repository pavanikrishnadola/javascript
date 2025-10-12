/*constructor*/
class MyCalci
{
    constructor(){
        this.a=5
        this.b=3
    }
    disvals=()=>{
        console.log("Value of a=",this.a,"","b=",this.b)
    }
}
MC=new MyCalci()
MC.disvals()