const showGrade = () => {
    let maths = document.querySelector('#maths').value;
    let english = document.querySelector('#english').value;
    let physics = document.querySelector('#physics').value;
    let hindi = document.querySelector('#hindi').value;
    let totalMarks = parseFloat(maths) + parseFloat(english) + parseFloat(physics) + parseFloat(hindi);
    let percentage = (totalMarks / 400) * 100;
    if (percentage <= 100 && percentage >= 80) {
        grade = 'A';
    } else if (percentage <= 79 && percentage >= 60) {
grade = 'B'

    }else if(percentage<=59 && percentage>=40){
        grade = 'C'
    }else{
        grade = 'F'
    }
    if(percentage>=40){
        document.querySelector('#showData').innerHTML= `Out of 400 your total is ${totalMarks} and percentage is ${percentage}%.<br> Your grade is ${grade}.<br>Congratulation You're pass 🤘`
    }
    else{
        document.querySelector('#showData').innerHTML= `Out of 400 your total is ${totalMarks} and percentage is ${percentage}%.<br> Your grade is ${grade}.<br> You're fail 😢`
    }
}