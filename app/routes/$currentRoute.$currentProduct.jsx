import CurrentHeader from "../components/currentItem/CurrentHeader";
import Produce from "../components/currentItem/Produce";
import singlePageStyles from "../styles/singlepage/singlepage.css";
import {
  getCurrentProduct,
  SinglePageAddToCart,
} from "../utils/firebase.server";
import { useLoaderData } from "@remix-run/react";
export const loader = async ({ params }) => {
  const currentPageId = params.currentProduct;
  return await getCurrentProduct(currentPageId);
};

export const links = () => {
  return [
    {
      rel: "stylesheet",
      href: singlePageStyles,
    },
  ];
};

export const action = async ({ request }) => {
  const formData = await request.formData();
  const productName = formData.get("productName");
  const productPrice = formData.get("productPrice");
  const productImg = formData.get("productImg");
  const productWebp = formData.get("productWebp");
  const productId = formData.get("productId");
  const productQty = formData.get("productQty");
  const product = {
    id: productId,
    name: productName,
    price: productPrice,
    img: productImg,
    webp: productWebp,
  };
  if (productQty == 0) {
    return null;
  }
  return await SinglePageAddToCart(product, productQty);
};
function CurrentPageName() {
  const data = useLoaderData();
  return (
    <div className="current-item">
      <CurrentHeader />
      <Produce currentData={data} />
    </div>
  );
}

export default CurrentPageName;
