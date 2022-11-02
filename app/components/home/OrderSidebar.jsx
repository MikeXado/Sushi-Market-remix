import Cart from "../orderSidebar/Cart";
import Deliver from "../orderSidebar/Deliver";
import { useSelector, useDispatch } from "react-redux";
import { orderOpen } from "~/redux/slices/shopSlice";
function OrderSidebar({ cartData }) {
  const orderState = useSelector((state) => state.orderOpen);
  const dispatch = useDispatch();

  const handleOrderOpen = () => {
    dispatch(orderOpen());
  };
  return (
    <div className={"order__sidebar" + (orderState ? " active-order" : "")}>
      <div className="order-content">
        <div className="close-order" onClick={handleOrderOpen}>
          <span></span>
        </div>
        <Cart cartData={cartData} />
        <Deliver />
      </div>
    </div>
  );
}

export default OrderSidebar;
