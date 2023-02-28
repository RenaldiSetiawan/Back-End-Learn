// const message = (name) => {
//     console.log(`Hello ${name}`);
//  }

//  message('JavaScript');

var arr = [
   
    [191919191],
   
], arrText = '';

for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
        arrText += arr[i][j] + ' ';
    }
    console.log(arrText);
    arrText = '';
}


/* const input = 9;

let arr = [];
for (let i = 0; i < input; i++) {
    arr[i] = [];
}

for (let i = 0; i < input; i++) {
    for (let j = 0; j < input; j++) {
        arr[i][j] = (i % 2) ? j + '-' : input - j;
       
    }
}

let output = '';
for (let i = 0; i < input; i++) {
    for (let j = 0; j < input; j++) {
        output += arr[i][j];
    }
    console.log(output);
    output = '';
}
 */