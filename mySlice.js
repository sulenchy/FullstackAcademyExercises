/* Write Code Here */

function mySlice(arg1,arg2,arg3){
  let arr = [];
  
  if (arg3){
    if(arg3 < 0){
      let limit = arg3 * -1;
      for (let i = arg2; i < arg1.length - limit; i++){
      	arr.push(arg1[i]);
      }   
      return arr;   
    }else if (arg3 > 0){ 
        for (let i = arg2; i < arg3; i++){
          arr.push(arg1[i]);
        }
      return arr;
    }else{
        console.log(arr);
      return arr;
    }
  }else if (arg2){
    if(arg2 < 0){      
      let start =arg2 * -1;
      let limit = arg1.length - start;
      console.log(limit);
      for (let i = limit; i < arg1.length; i++){
      	arr.push(arg1[i]);
      }
      return arr;
    }else{
    for (let i = arg2; i < arg1.length ; i++){
      	arr.push(arg1[i]);
      }
      return arr;
    }
  }else{
      if (arg3 == 0){
        return arr;
      }else{
        for (let i = 0; i < arg1.length ; i++){
            arr.push(arg1[i]);
        }
        return arr;
      }
    
  }
}








//EXAMPLE TESTS

console.log(mySlice([1,2,1]));
//OUTPUT: [1, 2, 1]

console.log(mySlice([1,2,1], 1));
//OUTPUT: [2, 1]

console.log(mySlice([1,2,3,4], 2, 3));
//OUTPUT: [3]

console.log(mySlice([1,2,3,4], 0, -1));
//OUTPUT: [1, 2, 3]

mySlice([1, 2, 3, 4], 0, 0)