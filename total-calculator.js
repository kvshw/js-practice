const gas = [20, 40, 60, 30];

const food = [30, 23, 45];

const calculateTotal = (arr) => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
};

const gasPrice = calculateTotal(gas);
const foodPrice = calculateTotal(food);

console.log({
  Food: foodPrice,
  Gas: gasPrice,
});
