function distanceFromHqInBlocks(location) {
    if (location < 42) {
    return 42 - location
    };
    return location - 42
}

function distanceFromHqInFeet(location) {
    return distanceFromHqInBlocks(location) * 264
}

function distanceTravelledInFeet(block, block2) {
    if (block < block2) {
        return (block2 - block) * 264
    };
    return (block - block2) * 264
}

function calculatesFarePrice(block, block2) {
    let stepsTravelled = Math.abs(block - block2) * 264
    if (stepsTravelled <= 400) { return stepsTravelled * 0}
    else if(stepsTravelled > 400 && stepsTravelled < 2000) { return (stepsTravelled - 400) * .02}
    else if(stepsTravelled >= 2000 && stepsTravelled < 2500) {return 25}
    else if(stepsTravelled > 2500) {return 'cannot travel that far'}
}
