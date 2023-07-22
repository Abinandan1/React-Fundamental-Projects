import { useGlobalContext } from "./Context";

export const getTotals = (cart) => {
  let totalAmount = 0;
  let totalCost = 0;
  for (let [id, { amount, price }] of cart) {
    totalAmount += Number(amount);
    totalCost += Number(price) * Number(amount);
  }
  return { totalAmount, totalCost };
};
