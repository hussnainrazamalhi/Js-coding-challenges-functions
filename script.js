"strict mode"

//Functions

//Task 1

function sum(num1, num2) {

    return num1 + num2;

}

sum(1, 2);


//Task 2


function isEven(number) {
    if (number % 2 == 0) {
        console.log("TRUE")
    } else { console.log("False") }
    return 0;
}

isEven(21);


//Task 3

function reverseString(str) {
    let updatedString = " ";
    for (let i = str.length - 1; i >= 0; i--) {
        updatedString = updatedString + str[i]
    }
    console.log(updatedString)
    return 0;
}

reverseString("hussnain raza malhi")

//Task4

function calculateFactorial(inputNumber) {
    let result = 1;
    for (let i = inputNumber; i >= 1; i--) {
        result = result * i;


    }
    console.log(result)
    return 0;
}

calculateFactorial(4);

//Task5

function convertTemperature(temp) {
    let convertedTemperature = (temp * 9 / 5) + 32;

    console.log(convertedTemperature);
    return 0;

}

convertTemperature(12);

//Task 6

function countVowels(input) {
    let vowel = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] == 'a' || input[i] == 'e' || input[i] == 'i' || input[i] == 'o' || input[i] == 'u') {
            vowel = vowel + 1;
        }
    }

    if (vowel > 0) {
        console.log("Number of vowels: " + vowel);
    } else {
        console.log("There are no vowels");
    }
    return vowel;
}

countVowels("hussnain raza malhi");