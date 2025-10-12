/*function with and without return type*/
class IceCream{
    melt=()=>
    {
        console.log("It melts at room temprature")
    }
    billamt=(price,quantity)=>
        {
        price=price
        quantity=quantity
        return price*quantity
    }
}
Vanilla=new IceCream()
Vanilla.melt()
console.log("Bill Amount=",Vanilla.billamt(20,10))