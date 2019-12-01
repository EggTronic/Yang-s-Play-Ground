// use map to store -> O(N) / O(1) to O(n)
function MoreThanHalfNum_Solution(numbers)
{
  let map = {};
  
  if (numbers.length <= 2) {
    return numbers[0];
  }
  
  for (let num of numbers) {
    if(map[num]) {
      map[num] = map[num] + 1;
      if (map[num] > numbers.length/2) {
        return num;
      }
    } else {
      map[num] = 1;
    }
  }
  
  return 0;
}

// use count and cur to store -> O(N) / O(1)
function MoreThanHalfNum_Solution(numbers)
{
  let map = {};
  
  if (!numbers) {
    return 0;
  } else if (numbers.length <= 2) {
    return numbers[0];
  } else {
    let cur = numbers[0];
    let count = 1;

    for (let num of numbers) {
      if (count === 0) {
        cur = num;
        count += 1;
      } else if (cur === num) {
        count++;
      } else {
        count--;
      }
    }
    
    let res = numbers.reduce((total, temp) => {
      total = temp === cur ? total + 1 : total;
      return total;
    }, 0);
    
    if (res > numbers.length/2) {
      return cur;
    }
    
    return 0;
  }