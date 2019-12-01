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