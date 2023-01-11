// Code your solution in this file!
function distanceFromHqInBlocks(blockNumber) {
    if (blockNumber > 42){
        return (blockNumber - 42)
}
    else {
        return (42 - blockNumber)
    }
}
console.log(distanceFromHqInBlocks(44));

function distanceFromHqInFeet(blockNumber) {
    console.log(distanceFromHqInBlocks(blockNumber));
    return distanceFromHqInBlocks(blockNumber) *264
}
console.log(distanceFromHqInFeet(44));


function distanceTravelledInFeet(a, b) {
    if (a > b) {
        return (a - b) *264
} else {
        return (b - a) *264
}
    //step one we want to subtract the blocks
    //Multiply by 264(feet)
    //account for b meaning greater than a
    //returns the number of feet traveled
  }

  function calculatesFarePrice(a, b) {
    const distance = distanceTravelledInFeet(a, b)
    if (distance <= 400) {
        return (0)
    } else if (distance > 400 && distance < 2000) {
        return (.02)* (distance -400)
    } else if (distance > 2000 && distance < 2500) {
        return (25)
    } else (distance > 2500) {
        return ('cannot travel that far')
    }
    
    //returns the fare for the customer
    //first 400 feet are free
    //distance between 400 and 2000 feet, the price is 2 cents per foot
    //flat fare for a distance over 2000 feet and under 2500 feet
    //not allow any rides over 2500 feet
  }