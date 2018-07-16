let a = { one: 1, two: 2, three: 3, four: 4, five: 5 };
for (let i = 0, len = a.length; i < len; i++ ){
  console.log(i, a[i]);
}




for ( i in a) {
    console.log(i +':'+ a[i]);
  }

  for (let i=1; i<=100; ++i){
 
    if(i % 3 === 0 &&  i % 5 === 0 ){
     console.log("fizzBuzz")
     continue;
   } 
   if( i % 3 === 0 ){
           console.log("fizz")
   }
   else if( i % 5 === 0 ){
           console.log("buzz")
   }
    else{ console.log(i) } }