/*class example 6 and attributes*/
class Bird
{
    fly=()=>{
        console.log("They fly to fulfil natural activities")
    }
    buildnest=()=>{
        console.log("They build their nest to live")
    }
}
Parrot=new Bird()
Parrot.age=5
Parrot.wings=2
Parrot.weight=3.4
Parrot.color="GREEN"
console.log("Age of parrot=",Parrot.age)
console.log("Wings of parrot=",Parrot.wings)
console.log("Weight of parrot=",Parrot.weight)
console.log("Color of parrot=",Parrot.color)
Parrot.fly()
Parrot.buildnest()
console.log("----------------------------")
Pigeon=new Bird()
Pigeon.age=7
Pigeon.wings=2
Pigeon.weight=3.7
Pigeon.color="GREY"
console.log("Age of pigeon=",Pigeon.age)
console.log("Wings of pigeon=",Pigeon.wings)
console.log("Weight of pigeon=",Pigeon.weight)
console.log("Color of pigeon=",Pigeon.color)
Pigeon.fly()
Pigeon.buildnest()