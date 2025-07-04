let dayOfTheWeek = "tuesday";

switch (dayOfTheWeek) {
    case "monday":
        console.log("First day of the week")
        break;
    case "tuesday":
    case "wednesday":
    case "thursday":
        console.log("Middle of the week");
        break;
    case "friday":
        console.log("Last day of work")
        break;
    case "sunday": 
        console.log("Rest day")
        break;
    default:
        console.log("It's not a day of week")
}

let userAge = 13;
let status = (userAge >= 18) ? "Adult" : "Minor";
console.log(status);