function gradeGenerator(marks){
    let grade;//this is to leave it so that the user can input any grade they want
if(marks>79){
    grade = 'A'//This means that if any grade is 80 and above the output given will be grade A
}else if(marks>=60 &&marks<=79){
    grade ='B'//if the marks is greater than or equal to 60 but less than or equal to 79 the output will be grade B
}else if(marks>=49 && marks <=59){
    grade = 'C'//if the marks is greater or is 49 then the output will be a grade C but also lss than or equal to 59
}else if(marks>=40 &&marks<= 49){
    grade = 'D'//if the marks is greater than 40 or is 40 then the output message will be grade D but should also be less than or equal to 49
}else{
    grade ='E'//if the grade is 39 and below the grade given will be an E
}
return grade;//this is to show that after inputing the marks then the grade will be automatically given
}
const marks = prompt("Enter students marks(0-100)")//means that in the html there will be a prompt pop up and the user will be required to input a number from 0 to 100 ...the number should not go below 0 or go above 100
const grade=gradeGenerator(marks)//calls the gradeGenerator function with the marks variable to get the appropriate grade 
console.log(`Grade : ${grade}`)//it shows the grade the student has received in the console