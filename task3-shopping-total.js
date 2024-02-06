console.log("---------------task3------------");

// Your task is to calculate the total budget required to buy electronics:

let tablet = 15000 ;
let mobile = 20000 ;
let laptop = 35000 ;


function getTotal (item1, item2, item3){

    let totalBudget = item1+ item2 + item3;
    return  "total money required = " + totalBudget +' tk';
}

console.log(getTotal(tablet,mobile, laptop));