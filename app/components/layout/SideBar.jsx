import Categories from "../categories/Categories";
import Logo from "../categories/Logo";
import { useSelector, useDispatch } from "react-redux";
import { changeOpened } from "~/redux/slices/shopSlice";
import { categ } from "~/constants";

function SideBar() {
  const menuState = useSelector((state) => state.openNavbar);
  const dispatch = useDispatch();
  const handleMenuOpen = () => {
    dispatch(changeOpened());
  };

  return (
    <div className={"sidebar" + (menuState ? " active-sidebar" : "")}>
      <div className="close-sidebar" onClick={handleMenuOpen}>
        <span></span>
      </div>
      <div className="sidebar-content">
        <Logo />
        <div className="sidebar-content__horizontal-line"></div>
        <div className="sidebar-content__categories categ">
          {categ.map((category) => {
            return <Categories key={category.id} category={category} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default SideBar;
