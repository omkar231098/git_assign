function prime (num){
let count=0
for(let i=0; i<=num; i++){
if(i%num==0){
counter++
}
}
if(counter==2){
 return true;

}else{
 return false;
}

}

let x=prime()

if(x===true;){
console.log("is prime");
}else{
console.log("not prime");
}

}