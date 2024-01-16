// Code your solutions in this file

function writeCards(array, string){
    const newArray = []
    for(let i = 0 ; i < array.length; i++){
    newArray.push(`Thank you, ${array[i]}, for the wonderful ${string} gift!`);
    }
    return newArray;
}



function countDown(){
    let i;
    for (i=10; i>=0; i--){
      console.log(i);
    } 
    if (i == 0){
      console.log("Stopped")
    }
  }
  
  countDown();


