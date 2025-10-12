/*class example 5 and attributes*/
class Bird
{
    fly=()=>{
        console.log("They fly to fulfil natural activities")
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