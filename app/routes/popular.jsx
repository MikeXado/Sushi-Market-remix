import { useLoaderData } from "@remix-run/react";
import Slider from "~/components/home/Slider/Slider";
import { getSlides, addToCart } from "~/utils/firebase.server";
import HomeLinks from "~/components/home/HomeLinks";
import { redirect } from "@remix-run/node";
export const loader = async () => {
  return getSlides("popular");
};

export const action = async ({ request }) => {
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
    return redirect(`/popular/${currentCardName}`);
  }
  return await addToCart(product);
};

function Popular() {
  const data = useLoaderData();
  return (
    <div className="home">
      <HomeLinks />
      <div className="popular">
        <Slider data={data} />
      </div>
    </div>
  );
}

export default Popular;
