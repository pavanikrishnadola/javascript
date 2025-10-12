/*print array element and count,sum,avg of array*/
a=[10,20,30,40,50]
var count=0
var sum=0
for(i=0;i<a.length;i++)
{
    console.log(a[i])
    count=count+1
    sum=sum+a[i]
}
console.log("total count=",+count)
console.log("tottal sum=",+sum)
console.log("average=",+(sum/count))