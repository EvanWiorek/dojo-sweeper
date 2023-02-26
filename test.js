var theDojo =  [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];

// adds in 10 ninjas in random spots
function tenRandomNinjas(theDojo)  {
    theDojo[Math.floor(Math.random() * theDojo.length)][Math.floor(Math.random() * theDojo.length)] = 9;
    theDojo[Math.floor(Math.random() * theDojo.length)][Math.floor(Math.random() * theDojo.length)] = 9;
    theDojo[Math.floor(Math.random() * theDojo.length)][Math.floor(Math.random() * theDojo.length)] = 9;
    theDojo[Math.floor(Math.random() * theDojo.length)][Math.floor(Math.random() * theDojo.length)] = 9;
    theDojo[Math.floor(Math.random() * theDojo.length)][Math.floor(Math.random() * theDojo.length)] = 9;
    theDojo[Math.floor(Math.random() * theDojo.length)][Math.floor(Math.random() * theDojo.length)] = 9;
    theDojo[Math.floor(Math.random() * theDojo.length)][Math.floor(Math.random() * theDojo.length)] = 9;
    theDojo[Math.floor(Math.random() * theDojo.length)][Math.floor(Math.random() * theDojo.length)] = 9;
    theDojo[Math.floor(Math.random() * theDojo.length)][Math.floor(Math.random() * theDojo.length)] = 9;
    theDojo[Math.floor(Math.random() * theDojo.length)][Math.floor(Math.random() * theDojo.length)] = 9;
    theDojo[Math.floor(Math.random() * theDojo.length)][Math.floor(Math.random() * theDojo.length)] = 9;
}

console.log(tenRandomNinjas(theDojo));

// const colors = ["#FFFFFF", "#F06B4F", "#F2AE52", "#B0CD6D", "#A33120"];

// function randomColor(colors) {
//     return colors[Math.floor(Math.random() * colors.length)];
//   }

//   console.log(randomColor(colors))