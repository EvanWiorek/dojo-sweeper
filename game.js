var theDojo =  [[1, 0, 1, 1, 1, 0, 4, 0, 8, 0],
                [3, 1, 0, 7, 0, 0, 6, 0, 8, 8],
                [5, 0, 7, 0, 3, 6, 6, 6, 0, 0],
                [2, 3, 0, 9, 0, 0, 6, 0, 8, 0],
                [6, 0, 3, 3, 0, 2, 0, 3, 0, 4],
                [0, 0, 3, 3, 0, 0, 2, 2, 3, 0],
                [0, 0, 0, 0, 5, 0, 1, 2, 0, 6],
                [2, 2, 2, 2, 0, 7, 1, 1, 1, 0],
                [5, 2, 0, 2, 0, 0, 0, 1, 1, 2],
                [8, 2, 2, 2, 0, 7, 0, 1, 1, 0]];
var dojoDiv = document.querySelector("#the-dojo");
var ninjaFound = document.querySelector("#ninja-found");
var restartDiv = document.querySelector("#restart");


function tenRandomNinjas(dim)  {
    var max =11;
    var min = 1;
    var theDojoRandom = [];
    for(var i=0; i<dim; i++)    {
        theDojoRandom.push([]);
        for( var j=0; j<dim; j++)   {
            var randomInsert = Math.floor(Math.random()*(max-min) + min);
            theDojoRandom[i].push(randomInsert);
        }
    }
    for(var n=0; n<10; n++) {
        var x = Math.floor(Math.random()*10);
        var y = Math.floor(Math.random()*10);
        if(theDojoRandom[x][y] != 0) {
            theDojoRandom[x][y] = 0;
        }
        else {
            n--;
        }
    }
    return theDojoRandom;
}

var theDojoRandom = tenRandomNinjas(10);



// Creates the rows of buttons for this game
function render(theDojo) {
    var result = "";
    for (var i = 0; i < theDojo.length; i++) {
        for (var j = 0; j < theDojo[i].length; j++) {
            result += `<button class="tatami" onclick="howMany(${i}, ${j}, this)"></button>`;
        }
    }
    return result;
}



//this would have used if statements
// function howManyWithIf(i, j, element) {
//     var sum = 0;
//     sum = sum + theDojo[i][j- 1] + theDojo[i][j + 1] + theDojo[i - 1][j] + theDojo[i - 1][j + 1] + theDojo[i - 1][j - 1] + theDojo[i + 1][j] + theDojo[i + 1][j + 1] + theDojo[i + 1][j + 1];
//     console.log(sum);
// }

//this function uses two for loops, makes new variables.
//k defines where i will be; i-1 means this loop will iterate through the arr above where clicked. Will stop iterating once i is 2 below the clicked. 
// x is the x axis
//y being the y axis, this will start to the left of clicked, and stop before two spaces to the right of clicked. 
function d9() {
    var roll = Math.ceil(Math.random()*9);
    if(roll <= 9) {
    return roll;
    }
}

//need to set 10 random variables to 
function howMany(i, j, element) {
    var sum = 0;
    for (var x = i - 1; x < i + 2; x++) {
        for (var y = j - 1; y < j + 2; y++) {
            if (theDojo[x] !== undefined && theDojo[y] !== undefined) {
                sum += theDojo[x][y];
            }
        }
    }
    if(theDojo[i][j] == 0) {
        element.style = "background-color: red;"
        element.innerHTML = "x";
        ninjaFound.innerHTML = "You found the ninja! You died..."; 
        restartDiv.innerHTML = `<button class="restart" onclick="location.reload()">try again</button>`;
    }
    else 
    element.innerHTML = sum - theDojo[i][j];

}


// function howMany(i, j, element) {
//     var sum = 0;
//     for (var x = i - 1; x < i + 2; x++) {
//         for (var y = j - 1; y < j + 2; y++) {
//             if (theDojo[x] !== undefined && theDojo[y] !== undefined) {
//                 sum += theDojo[x][y];
//             }
//         }
//     }
//     if(theDojo[i][j] == d9()) {
//         console.log(d9());
//         element.style = "background-color: red;"
//         element.innerHTML = "x";
//         ninjaFound.innerHTML = "You found the ninja! You died..."; 
//         restartDiv.innerHTML = `<button class="restart" onclick="location.reload()">try again</button>`;
//     }
//     else 
//     element.innerHTML = sum - theDojo[i][j];

// }



// BONUS CHALLENGES
// 1. draw the number onto the button instead of alerting it
// 2. at the start randomly place 10 ninjas into theDojo with at most 1 on each spot
// 3. if you click on a ninja you must restart the game 
//    dojoDiv.innerHTML = `<button onclick="location.reload()">restart</button>`;

// start the game
// message to greet a user of the game
var style = "color:cyan;font-size:1.5rem;font-weight:bold;";
console.log("%c" + "IF YOU ARE A DOJO STUDENT...", style);
console.log("%c" + "GOOD LUCK THIS IS A CHALLENGE!", style);
// shows the dojo for debugging purposes
console.table(theDojoRandom);
// adds the rows of buttons into <div id="the-dojo"></div> 
dojoDiv.innerHTML = render(theDojoRandom);

