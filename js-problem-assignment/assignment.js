//first assignment start
function feetToMile(feet){
    feet = feet / 5280;
    console.log(feet)
}
feetToMile(10560);
// first assignment feet to mile done

//second assignment start
function woodCalculator(chair, table, bed) {
     chair = chair * 10;
     table = table * 14;
     bed   = bed * 5;
     total = chair + table + bed;
     return total;
}

var result = woodCalculator(1, 3, 5);
console.log(result);

//second assignment woodcalculator end\

//third assignment start
function brickCalculator(talaNumber) {
    let totalBricks = 0;
    
    if (talaNumber >= 1 && talaNumber <= 10) {
        totalBricks = talaNumber * 15 * 1000;
    } else if (talaNumber >= 11 && talaNumber <= 20) {
        totalBricks = (10 * 15 + (talaNumber - 10) * 12) * 1000;
    } else if (talaNumber >= 21 && talaNumber <= 40) {
        totalBricks = (10 * 15 + 10 * 12 + (talaNumber - 20) * 10) * 1000;
    } else {
        console.log("");
        return;
    }

    return totalBricks;
}
var talaNumber = 22;
var totalBricksNeeded = brickCalculator(talaNumber);
console.log(totalBricksNeeded);
//third assignment end

//4th assignment start
function tinyMember(names){
    if(names.length === 0){
        return familyMembersName;
    }
    var smallName = names[0];
    for(var i = 1; i < names.length; i++){
        if(names[i].length < smallName.length){
            smallName = names[i]
        }
    }
    return smallName;
}
var familyMembersName = ['sium','shakil','sagor','sormi'];
var smallName = findShortestName(familyMembersName);
console.log(smallName);
//4th assignment small name end