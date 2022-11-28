checkSpeed (80); // Enter speed



function checkSpeed(speed) {

const speedLimit = 70; //speed limit 

const kmPerPoint = 5;

if (speed < speedLimit + kmPerPoint){ //Checking whether current speed is less than the required speed limit.
    console.log ("Ok");
}
else {
    const points = Math.floor((speed - speedLimit) / kmPerPoint); //Are the points 12 or more?

if (points >=12){
    console.log ("License suspended");
}
else{

console.log("Points", points); // Shows how many points 
}

}

}

