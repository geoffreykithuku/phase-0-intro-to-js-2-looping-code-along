// Code your solutions in this file

const names = ["Guadalupe", "Ollie", "Aki"];

function writeCards(names, gift){

     return [`Thank you, ${names[0]}, for the wonderful ${gift} gift!`,
     `Thank you, ${names[1]}, for the wonderful ${gift} gift!`,
     `Thank you, ${names[2]}, for the wonderful ${gift} gift!`];

};


function countDown(number){
    while(number >= 0){
        console.log(number);
        number -= 1;
    }
  }