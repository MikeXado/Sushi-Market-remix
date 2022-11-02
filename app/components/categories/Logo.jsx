import { Link } from "react-router-dom";
function Logo() {
  return (
    <div className="sidebar-content__logo">
      <Link to="/">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/romsem-b19b7.appspot.com/o/categories%2FLogo.png?alt=media&token=24267ee3-8684-4794-bceb-be1ef9d3b525"
          alt="Romsem"
        />
      </Link>
    </div>
  );
}

export default Logo;
