
//First question
for(let i=1;i<=100;i+=10){
    console.log(i);
}


//Second question
for(let i=10;i>=1;i--){
    console.log(i);
}

//Third question
for(let i=2;i<=10;i+=2){
    console.log(i);
}

//Fourth question
for(let i=100;i>=1;i-=10){
    console.log(i);
}

//Fifth question
var arr;
function voters(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]>=18) {
      console.log("eligible to vote");
    } else if (arr[i]===0) {
      console.log("Invalid");
    }else if(arr[i]<18){
      console.log("not eligibe");
    }
}
}voters([34,27,0,10,19,8,56,95,0,2,18])