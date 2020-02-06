console.log("its working!");

// switch 
var season= prompt ("What is your favorite season?");
switch(season) {
    case "winter":
    alert ("I love wearing warm sweaters and drinking hot chocolate during winter!");
    break;

    case "summer":
    alert ("Yea summer is a great season!");
    break;

    case "fall":
    alert ("I enjoy watching the leaves change color in the fall.");
    break;

    case "spring":
    alert ("That's when I do spring cleaning.");
    break;

    default: 
    alert ("Im sorry, is that a season?");
}

// Create Function
function compareNumbers(a, b) {
    var biggerNumber= a >b;
    alert (biggerNumber);
}

// Call Function and Pass Information Into a Function
    compareNumbers (16, 12);

// Return
function multiplyNumbers (x, y) {
    var multiplyTotal= x *y;
    return (multiplyTotal);
}

var multiplyNumbers2= multiplyNumbers(10,6);
alert (multiplyNumbers2);