function Permutation2(str, length, dp, finalResult) {
  let arr = str.split('').sort();
  let result = [];

  if (str.length === 0) {
    return;
  }
  
  if (str.length === length && !dp[str]) {
    dp[str] = 1;
    finalResult.push(str);
  }

  if (arr.length <= 1) {
    return arr;
  }
  
  arr.forEach((char, index) => {
    let temp = [];
    let arrAfter = temp.concat(arr.slice(0, index), arr.slice(index + 1, arr.length)).join('');
    if (arrAfter.length > 0) {
        let permutationAfter = Permutation2(arrAfter, length, dp, finalResult);
        permutationAfter.forEach((str) => {
          let bind = char + str;
          if (bind.length === length && !dp[bind]) {
            dp[bind] = 1;
            finalResult.push(bind);
          };
          result.push(bind);
        });
    }
  });
  
  return result;
}

function Permutation(str) {
    let finalResult = [];
    Permutation2(str, str.length, {}, finalResult);
    return finalResult;
}

console.log(Permutation('aa'));