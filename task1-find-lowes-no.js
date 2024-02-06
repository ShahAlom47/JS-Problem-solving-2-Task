console.log("--------------------Task 1 -------------------------");    

// Find the lowest number in the array below.


const heights2 = [167, 90, 120, 165, 197];

function findNum (number){

    let lowesNum = heights2[0];

    for(let item of heights2)
    {
        if( lowesNum> item){

            lowesNum=item;
        }


    }
return lowesNum;


}

console.log(findNum(heights2));
