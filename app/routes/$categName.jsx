import { useLoaderData, useTransition } from "@remix-run/react";
import CardItem from "~/components/menu/CardItem";
import HeaderMenu from "~/components/menu/HeaderMenu";
import { redirect } from "@remix-run/node";
import {
  getMenu,
  getCurrentClickedCateg,
  addToCart,
} from "~/utils/firebase.server";
import Skeleton from "../components/Skeleton";
import menuStyle from "../styles/menu/menu.css";
export const links = () => {
  return [
    {
      rel: "stylesheet",
      href: menuStyle,
    },
  ];
};

export const loader = async ({ params, request }) => {
  const menuCateg = params.categName;
  const url = new URL(request.url);
  const slected = url.searchParams.get("sortBy");

  const menu = await getMenu(menuCateg, slected);
  const category = await getCurrentClickedCateg();
  return { menu, category };
};

export const action = async ({ params, request }) => {
  const routeId = params.categName;
  const formData = await request.formData();
  let { _action, ...values } = Object.fromEntries(formData);
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
  const currentCardName = formData.get("cardName");
  if (_action === "getCurrentProduct") {
    return redirect(`/${routeId}/${currentCardName}`);
  }
  if (_action === "addToCart") {
    return await addToCart(product);
  }
};

function Menu() {
  const data = useLoaderData();
  const transition = useTransition();
  return (
    <div className="menu">
      <HeaderMenu category={data?.category} menu={data.menu} />
      <div className="cards">
        {data.menu.map((card) => {
          return transition.state === "submitting" ? (
            <Skeleton key={card.id} className="cards-item skeleton" />
          ) : (
            <CardItem key={card.id} card={card} />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
