console.log("--------------------Task 2 -------------------------");
// Find the friend with the smallest name.


const names = ['rahim', 'rahd', 'robtttt', 'iti', 'ras' , "iitrr"];




function findName(nameBox) {
    let sName = names[0]
    const smallerName = [];

    for (let name of names) {

        if (sName.length >= name.length) {
            sName=name;

        }
      
    
    }
    for (let name2 of names){

        if(sName.length==name2.length){
            smallerName.push(sName);
        }
      }
 
    return   "smallest name is= " +  smallerName;

}

console.log(findName(names));
