function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(checkEvenOrOdd(4));
console.log(checkEvenOrOdd(7));

function calculateAverageScore(score1, score2, score3) {
var averageScore = (score1 + score2 + score3) / 3;

if (averageScore >= 70) {
    return true;
} else {
    return false;
}
}
console.log(calculateAverageScore(80, 90, 75));
console.log(calculateAverageScore(60, 50, 70));

function calculateStudentGrade(score) {
if (score >= 90 && score <= 100) {
    return "Отлично.";
} else if (score >= 75 && score <= 89) {
    return "Хорошо.";
} else if (score >= 60 && score <= 74) {
    return "Удовлетворительно.";
} else {
    return "Неудовлетворительно.";
}
}
console.log(calculateStudentGrade(95));
console.log(calculateStudentGrade(80)); 
console.log(calculateStudentGrade(65));
console.log(calculateStudentGrade(50));