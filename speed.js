function speedDetector(speed){
    const speedLimit = 70;//this is to set the speedlimit
    let demeritPoints = 0;//initialize the demerit points
    if(speed<speedLimit){
        console.log("OK")//if the speed is below 70 so 69 and below then the output in the console should be OK
    }else{
        demeritPoints = ((speed -speedLimit) / 5) | 0;//this is to calculate the demerit point by subtracting the speed of the driver minus the speedLimit 
        console.log(`Points: ${demeritPoints}`)//this will output the number of demerits and will output it as Points;and here te number of points gotten after the subtraction
        if(demeritPoints>12){
            console.log("License suspended")//the limit of demerit points is 12 so if the driver has supessad the 12 points then the output will be license suspended
        }
    }
}
const speed = parseInt(prompt("Enter the speed of the car"))//this will be a pop-up message that will require the user to input the speed and parseInt converts a string into an integer
speedDetector(speed)//calls the function with the entered speed
