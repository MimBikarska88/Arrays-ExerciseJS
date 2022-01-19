/*console.log("What is your name? ");
let myName = 'maria'
console.log("hello, " + myName);

function showMultiplicationResult(x, y) {
    return x * y;
}
console.log(showMultiplicationResult(39, 19));

function printWord(count) {
    console.log("_".repeat(count));
}
printWord(20);
let countDown = (num) => {
    for (i = 0; i <= num; ++i) {
        console.warn("object");
    }
}
countDown(159);


function solve(arg1, arg2, arg3) {
    var sum = arg1.length + arg2.length + arg3.length;
    var avg = Math.floor(sum / 3);
    console.log(sum);
    console.log(avg);
}
solve('chocolate', 'ice cream', 'cake');
solve('pasta', '5', '22.4');


function largestNumber(a, b, c) {
    let largestNumber = undefined;
    if (a > b && a > c) {
        largestNumber = a;
    } else if (b > a && b > c) {
        largestNumber = b;
    } else {
        largestNumber = c;
    }
    console.log('The larges number is ' + largestNumber);
}
largestNumber(5, -3, 16);

function circleArea(arg) {
    let inputType = typeof(arg);
    if (inputType === 'number') {
        let result = Math.PI * Math.pow(arg, 2);
        console.log(result.toFixed(2));
    } else {
        console.log('We can not calculate the circle area, because we receive a ' + inputType + '.');
    }
}
circleArea(5);
circleArea('something else');

function MathOperations(x, y, op) {
    let result = undefined;
    switch (op) {
        case '+':
            result = x + y;
            break;
        case '-':
            result = x - y;
            break;
        case '/':
            result = x / y;
            break;
        case '%':
            result = x % y;
            break;
        case '**':
            result = x ** y;
            break;
        case '*':
            result = x * y;
            break;
    }
    console.log(result);
}
MathOperations(3, 5.5, '*');

function sumNumbers(n, m) {
    let sum = 0;
    let num1 = Number(n);
    let num2 = Number(m);
    for (let i = num1; i <= num2; i++) {
        sum += i;
    }
    console.log(sum);
}
sumNumbers('-8', '20');

function dayOFTheWeek(day) {
    switch (day) {
        case 'Monday':
            return 1;
        case 'Tuesday':
            return 2;
        case 'Wednesday':
            return 3;
        case 'Thursday':
            return 4;
        case 'Friday':
            return 5;
        case 'Saturday':
            return 6;
        case 'Sunday':
            return 7;
        default:
            return 'error';
    }
}
console.log(dayOFTheWeek('invalid'));

function daysInAMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

function squareOfStars(num) {
    for (let i = 0; i < num; ++i) {
        let arr = new Array(num);
        arr.fill('*');
        console.log(arr.join(' '));
    }
}
squareOfStars(5);

function aggregateArrayValues(arr) {
    const myArr = arr.toString().split(", ");
    let sum = 0;
    let sumDivided = 0;
    let concat = '';

    for (let i = 0; i < arr.length; ++i) {
        sum += Number(arr[i]);
        sumDivided += 1 / Number(arr[i]);
        concat += arr[i];
    }
    console.log(sum);
    console.log(sumDivided);
    console.log(concat);
}
aggregateArrayValues([1, 2, 3]);

*/
function calculateFruitPrice(fruit, weight, price) {
    let fruitType = fruit;
    let fruitWeight = weight;
    let fruitPrice = Number(price);
    fruitWeight = fruitWeight / 1000;
    fruitPrice = fruitPrice * fruitWeight;
    console.log(`I need $${fruitPrice.toFixed(2)} to buy ${fruitWeight.toFixed(2)} kilograms ${fruit}.`)
}

function greatestCommonDivisor(x, y) {
    let num1 = Number(x);
    let num2 = Number(y);

    let gcd = 1;
    if (num1 > num2) {
        for (let i = 1; i <= num2; ++i) {
            if (num2 % i == 0 && num1 % i == 0) {
                gcd = i;
            }
        }
    } else {
        for (let i = 1; i <= num1; ++i) {
            if (num2 % i == 0 && num1 % i == 0) {
                gcd = i;
            }
        }
    }
    console.log(gcd);
}

function sameNumbers(number) {
    let num = number.toString();
    let isSame = true;
    let sum = Number(num[0]);
    for (let i = 0; i < num.length - 1; ++i) {
        if (num[i] != num[i + 1]) {
            isSame = false;
        }
        sum += Number(num[i + 1]);
    }

    console.log(isSame);
    console.log(sum);
}

function previousDay(year, month, day) {
    let date = new Date(year, month, day);
    date.setMonth(month, day - 1);
    console.log(`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`);
}

function timeToWalk(steps, footLength, speed) {
    let distance = steps * footLength;
    let speedNew = speed * 1000 / 3600;
    let breaks = Math.floor((distance / 500)) * 60;
    let time = (distance / speedNew) + breaks;
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor(time % 3600 / 60);
    let seconds = Math.round(time % 60);

    let formattedHours = hours > 9 ? hours.toString() : '0' + hours;
    let formattedMin = minutes > 9 ? minutes.toString() : '0' + minutes;
    let formattedSecs = seconds > 9 ? seconds.toString() : '0' + seconds;
    console.log(`${formattedHours}:${formattedMin}:${formattedSecs}`);


}

function roadRadar(speed, area) {
    let limit;
    switch (area) {
        case 'motorway':
            limit = 130;
            break;
        case 'interstate':
            limit = 90;
            break;
        case 'city':
            limit = 50;
            break;
        case 'residential':
            limit = 20;
            break;
    }
    if (speed <= limit) {
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
    } else if (speed <= limit + 20) {
        console.log(`The speed is ${speed - limit} km/h faster than the allowed speed of ${limit} - speeding`);
    } else if (speed <= limit + 40) {
        console.log(`The speed is ${speed - limit} km/h faster than the allowed speed of ${limit} - excessive speeding`);
    } else {
        console.log(`The speed is ${speed - limit} km/h faster than the allowed speed of ${limit} - reckless driving`);
    }
}

function cookingByNumbers(num, command1, command2, command3, command4, command5) {
    let number = Number(num);
    let commands = [command1, command2, command3, command4, command5];
    for (let index = 0; index < commands.length; ++index) {
        switch (commands[index]) {
            case 'chop':
                number /= 2;
                console.log(number);
                break;
            case 'dice':
                number = Math.sqrt(number);
                console.log(number);
                break;
            case 'spice':
                number++;
                console.log(number);
                break;
            case 'bake':
                number *= 3;
                console.log(number);
                break;
            case 'fillet':
                number = number * 0.8;
                console.log(number);
                break;
        }
    }
}

function evenPosElement(arr) {
    let evenCopy = new Array();
    for (let i = 0; i < arr.length; ++i) {
        if (i % 2 == 0) {
            evenCopy.push(arr[i]);
        }
    }
    console.log(evenCopy.join(' '));
}

function lastKNumberSequence(n, k) {
    let arr = new Array();
    let sum = 1;
    arr.push(sum);
    arr.push(sum);
    for (let i = 2; i < n; ++i) {
        if (i < k) {
            sum += arr[i - 1];
            arr.push(sum);
        } else {
            sum = 0;
            let m = i;
            for (let j = 1; j <= k; ++j) {
                sum += arr[m - j];
            }
            arr.push(sum);
        }
    }
    console.log(arr);

}

function sumFirstLast(arr) {
    let sum = 0;
    if (arr.length == 1) {
        return Number(arr[0]);
    } else {
        sum = Number(arr[0]) + Number(arr[arr.length - 1]);
        return sum;
    }
}

function positiveNegativeSequence(arr) {
    let newArr = new Array();
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] < 0) {
            newArr.unshift(arr[i]);
        } else {
            newArr.push(arr[i]);
        }
    }
    console.log(newArr.join('\n'));
}

function smallestTwoNumbers(arr) {
    let sorted = arr.sort(function(a, b) {
        return a - b;
    });
    console.log(sorted[0] + ' ' + sorted[1]);
}
smallestTwoNumbers([30, 15, 50, 5]);

function returnRecord(population, city, treasure) {
    let cityInfo = { population: population, city: city, treasure: treasure };
    return cityInfo;
}

function biggerHalf(arr) {
    let n = arr.length / 2;
    let sortedArr = arr.sort(function(a, b) {
        return a - b;
    }).slice(n);
    return sortedArr;
}

function pieceOfPie(pies, flavour1, flavour2) {
    let newArr = pies.slice(pies.indexOf(flavour1), pies.indexOf(flavour2) + 1);
    console.log(newArr);
}

function processOldPositions(arr) {
    let newArr = [];
    arr.map(function(x, index) {
        if (index % 2 == 1) {
            newArr.push(x * 2);
        }
    });
    return newArr.reverse();
}

function findBiggestElement(matrix) {
    let max = matrix[0][0];
    for (let i = 0; i < matrix.length; ++i) {
        for (let j = 0; j < matrix[1].length; ++j) {
            if (max < matrix[i][j]) {
                max = matrix[i][j];
            }
        }
    }
    return max;
}

function diagonalSums(matrix) {
    let rightSum = 0;
    let leftSum = 0;
    for (let i = 0; i < matrix.length; ++i) {
        for (let j = 0; j < matrix[1].length; ++j) {
            if (i == j) {
                rightSum += matrix[i][j];
            }
            if (j + i == matrix[1].length - 1) {
                leftSum += matrix[i][j];
            }
        }
    }
    console.log(rightSum + " " + leftSum);
}
diagonalSums([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]
]);