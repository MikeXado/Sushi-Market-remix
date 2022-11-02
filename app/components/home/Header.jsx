import { useDispatch } from "react-redux";
import { orderOpen } from "~/redux/slices/shopSlice";
import { Link } from "react-router-dom";
import { Form } from "@remix-run/react";

function Header({ qty, currentUser }) {
  const dispatch = useDispatch();
  const handleOpenSidebar = () => {
    dispatch(orderOpen());
  };

  return (
    <div className="header">
      <div className="header-content">
        <div className="header-content__left-side left-side">
          <div className="left-side__contacts">
            <div className="left-side__phone-atribute">Наш телефон</div>
            <div className="left-side__numbers">
              +996 705 188 955
              <br />
              +996 555 188 955
            </div>
            <div className="left-side__work-hours">
              работаем с 10:00 до 00:00
            </div>
          </div>
          <div className="left-side__vertical-line"></div>
          <div className="left-side__city">
            <div className="city">Город:</div>
            <div className="city-name">Бишкек</div>
          </div>
        </div>
        <div className="header-content__right-side right-side">
          <div className="right-side__links">
            <Link to="/reviews" className="link">
              Отзывы
            </Link>
            <button onClick={handleOpenSidebar} className="link">
              <picture>
                <source
                  type="image/webp"
                  srcSet="https://firebasestorage.googleapis.com/v0/b/romsem-b19b7.appspot.com/o/header%2Fshopping-cart.webp?alt=media&token=cecba313-2253-432f-a580-fc54aaa90993"
                />
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/romsem-b19b7.appspot.com/o/header%2Fshopping-cart.png?alt=media&token=42e787d4-ff98-437b-a1c4-35768d0afe7e"
                  alt="shopping-cart"
                />
              </picture>

              <div className="badge">{qty}</div>
            </button>
          </div>
          {currentUser ? (
            <Form method="post">
              <button
                type="submit"
                name="_action"
                value="logOut"
                className="avatar"
              >
                LogOut
              </button>
            </Form>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Header;
