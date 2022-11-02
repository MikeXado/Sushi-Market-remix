import Slider from "~/components/home/Slider/Slider";
import {
  getSlides,
  addToCart,
  addCurrentClickedCateg,
  deleteCartItems,
  incrementQty,
  decrementQty,
} from "~/utils/firebase.server";
import { useLoaderData } from "@remix-run/react";

import HomeLinks from "~/components/home/HomeLinks";
import { redirect } from "@remix-run/node";

export const loader = () => {
  return getSlides("new");
};

export const action = async ({ params, request }) => {
  const routeId = params.currentRoute;
  const formData = await request.formData();
  const productName = formData.get("productName");
  const productPrice = formData.get("productPrice");
  const productImg = formData.get("productImg");
  const productWebp = formData.get("productWebp");
  const productId = formData.get("productId");
  const product = {
    id: productId,
    name: productName,
    price: productPrice,
    img: productImg,
    webp: productWebp,
  };
  let { _action, ...values } = Object.fromEntries(formData);
  const currentCardName = formData.get("currentId");
  if (_action === "getCurrentClickedProduct") {
    return redirect(`/new/${currentCardName}`);
  }

  await addToCart(product);
  return redirect("/");
};

function Index() {
  const data = useLoaderData();

  return (
    <div className="home">
      <HomeLinks />
      <div className="new">
        <Slider data={data} />
      </div>
    </div>
  );
}

export default Index;
