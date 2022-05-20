function solve(x1, y1, x2, y2) {
 
    let distanceCheck;
 
    function checkValidDistance(point1x, point1y, point2x, point2y) {
        let distance;
        distance = Math.sqrt((point2x - point1x)**2 + (point2y - point1y)**2);
        return distance;
    }
    
    distanceCheck = checkValidDistance(x1, y1, 0, 0);
    if (Number.isInteger(distanceCheck)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`)
    }
 
    distanceCheck = checkValidDistance(x2, y2, 0, 0);
    if (Number.isInteger(distanceCheck)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }
 
    distanceCheck = checkValidDistance(x1, y1, x2, y2);
    if (Number.isInteger(distanceCheck)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }

}
solve(3, 0, 0, 4)
solve(2, 1, 1, 1)




/*Write a program that receives a total of 4 parameters in the format x1, y1, x2, y2. Check if the distance between each point (x, y) and the beginning of the Cartesian coordinate system (0, 0) is valid. A distance between two points is considered valid if it is an integer value. 
Note: You can use the following formula to help you calculate the distance between the points (x1, y1) and (x2, y2).
The order of comparisons should always be first {x1, y1} to {0, 0}, then {x2, y2} to {0, 0} and finally {x1, y1} to {x2, y2}. 
In case a distance is valid, print: `{x1, y1} to {x2, y2} is valid`
If the distance is invalid, print: `{x1, y1} to {x2, y2} is invalid`
The input consists of two points given as 4 numbers.
For each comparison print either `{x1, y1} to {x2, y2} is valid` if the distance is valid, or `{x1, y1} to {x2, y2} is invalid` if it is invalid.*/