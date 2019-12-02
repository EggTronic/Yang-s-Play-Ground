function GetLeastNumbers_Solution(input, k)
{
  if (input.length === k) {
    return input.sort();
  }
  
  if (input.length < k) {
    return [];
  }
  
  let stack = input.slice(0, k).sort();
  
  input.slice(k).forEach(num => {
    if (num < stack[stack.length - 1]) {
      stack[stack.length - 1] = num;
      stack.sort();
    }
  });
  
  return stack;
}

// 利用快排
function GetLeastNumbers_Partition(input, k)
{

}