let line = ('5 2').split(' ');
let n = parseInt(line[0]);
let m = parseInt(line[1]);

let binary = ('00000').split('');


let i = 0;
let opts = [];

opts.push(('3 1').split(' '));
opts.push(('3 5').split(' '));
opts.push(('3 5').split(' '));

// while(i < m){
//   line = readline().split(' ');
//   opts.push(line);
//   i++;
// }

opts.forEach((opt) => {
    let x = (opt[0] - 1) < (opt[1] - 1)? opt[0] - 1 : opt[1] - 1;
    let y = (opt[0] - 1) < (opt[1] - 1)? opt[1] - 1 : opt[0] - 1;
    if (x === y) {
      binary[x] = binary[x] === 1 ? 0 : 1;
    } else {
      for (let j = x; j <= y; j++) {
        binary[j] = binary[j] === 1 ? 0 : 1;
      }
    }
});

let result = '';

binary.forEach((char) => {
    result += char;
})

console.log(result);