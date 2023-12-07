import { currencyFormatter } from "../util/formatting";

export default function CartItem({
  name,
  quantity,
  price,
  onIncrease,
  onDecrese,
}) {
  return (
    <li classname="cart-item">
      <p>
        {name} - {quantity} x {currencyFormatter.format(price)}
      </p>
      <p className="cart-item-actions">
        <button onClick={onDecrese}>-</button>
        <span>{quantity}</span>
        <button onClick={onIncrease}>+</button>
      </p>
    </li>
  );
}
