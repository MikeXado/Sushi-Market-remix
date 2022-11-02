import { useNavigate } from "react-router-dom";
function CurrentHeader() {
  const navigate = useNavigate();
  return (
    <button className="current-header" onClick={() => navigate(-1)}>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/romsem-b19b7.appspot.com/o/single-page%2Fleft-arrow.png?alt=media&token=19165e4b-bf34-41e3-90c1-f8464ba2aefd"
        alt="left-arrow"
      />
      <div className="current-header__text">Назад</div>
    </button>
  );
}

export default CurrentHeader;
