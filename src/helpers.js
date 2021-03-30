/**
 * 
 */

export default function calcTotalCost(cart, products) {
  let total = 0;
  for (let id in cart) {
    const { price } = products[id];
    const qty = cart[id];
    total = total + qty * price;
  }
  return total.toFixed(2);
}