import { useDispatch } from "react-redux";
import { changeOpened, orderOpen } from "~/redux/slices/shopSlice";
import { Link } from "react-router-dom";
function NavMobile({ qty }) {
  const dispatch = useDispatch();

  const handleMenuOpen = () => {
    dispatch(changeOpened());
  };
  const handleOrderOpen = () => {
    dispatch(orderOpen());
  };
  return (
    <div className="nav-mobile">
      <div className="menu-button btn" onClick={handleMenuOpen}>
        <picture>
          <source
            type="image/webp"
            srcSet="https://firebasestorage.googleapis.com/v0/b/romsem-b19b7.appspot.com/o/nav-mobile%2Fmenu.webp?alt=media&token=8fbcee0c-591a-42f9-85f8-c5fc3d8e4d5e"
            width="50"
            height="31"
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/romsem-b19b7.appspot.com/o/nav-mobile%2Fmenu.png?alt=media&token=46110d85-878d-4f7e-bba5-3dfe81c30576"
            alt="menu"
            width="50"
            height="31"
          />
        </picture>
        <div className="text">Menu</div>
      </div>
      <div className="cart-button btn" onClick={handleOrderOpen}>
        <picture>
          <source
            type="image/webp"
            srcSet="https://firebasestorage.googleapis.com/v0/b/romsem-b19b7.appspot.com/o/nav-mobile%2FcartPng.webp?alt=media&token=22d25489-930c-4a2d-91a6-119f65e93ae0"
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/romsem-b19b7.appspot.com/o/nav-mobile%2FcartPng.png?alt=media&token=70ed5c5a-a27c-4455-a2b0-611d72ca365a"
            alt="menu"
          />
        </picture>
        <div className="badge">{qty}</div>
        <div className="text">Cart</div>
      </div>
      <Link to="reviews" className="revi btn">
        <picture>
          <source
            type="image/webp"
            srcSet="https://firebasestorage.googleapis.com/v0/b/romsem-b19b7.appspot.com/o/nav-mobile%2FreviewsPng.webp?alt=media&token=f87f9fcf-7b9e-44ef-986c-b353e76a65d5"
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/romsem-b19b7.appspot.com/o/nav-mobile%2FreviewsPng.png?alt=media&token=b255945c-d5a4-4d38-88e0-675ac5f5b051"
            alt="menu"
          />
        </picture>
        <div className="text">Reviews</div>
      </Link>
    </div>
  );
}

export default NavMobile;
