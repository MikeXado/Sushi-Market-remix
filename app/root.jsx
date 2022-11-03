import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import stylesPath from "~/styles/global.css";
import resetStyleUrl from "the-new-css-reset/css/reset.css";
import SideBar from "./components/layout/SideBar";
import NavMobile from "./components/layout/NavMobile";
import { Provider } from "react-redux";
import store from "~/redux/store";
import Header from "./components/home/Header";
import OrderMoreInfo from "./components/home/OrderMoreInfo";
import Footer from "./components/home/Footer";
import OrderSidebar from "./components/home/OrderSidebar";
import swiperBundleStyles from "swiper/swiper-bundle.min.css";
import swiperCoreStyles from "swiper/swiper.min.css";
import { redirect } from "@remix-run/node";
import {
  addCurrentClickedCateg,
  getCartItems,
  deleteCartItems,
  incrementQty,
  decrementQty,
} from "./utils/firebase.server";
import { useEffect, useState } from "react";
import { auth } from "./utils/db.server";
import { getCurrentSession, logOut } from "./utils/session.server";
import homeStyle from "./styles/home/home.css";
export const links = () => {
  return [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "true",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap",
    },
    {
      rel: "stylesheet",
      href: resetStyleUrl,
    },
    {
      rel: "stylesheet",
      href: homeStyle,
    },
    {
      rel: "stylesheet",
      href: stylesPath,
    },
    { rel: "stylesheet", href: swiperCoreStyles },

    { rel: "stylesheet", href: swiperBundleStyles },
  ];
};

export const meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export const action = async ({ request }) => {
  const formData = await request.formData();
  let { _action, ...values } = Object.fromEntries(formData);
  const categ = formData.get("categId");
  const categoryImg = formData.get("categImg");
  const categoryWebp = formData.get("categWebp");
  const categoryText = formData.get("categText");
  const cartProductId = formData.get("cartProductId");
  const categoryObject = {
    img: categoryImg,
    webp: categoryWebp,
    text: categoryText,
  };

  if (_action === "displayMenu") {
    await addCurrentClickedCateg(categoryObject);
    return redirect(`/${categ}`);
  }
  if (_action === "removeAllProducts") {
    return await deleteCartItems();
  }
  if (_action === "incrementCartQty") {
    return await incrementQty(cartProductId);
  }
  if (_action === "decrementCartQty") {
    return await decrementQty(cartProductId);
  }
  if (_action === "logOut") {
    return await logOut(request);
  }
};

export const loader = async ({ request }) => {
  const cartItems = await getCartItems();
  const currentUser = await getCurrentSession(request);

  return { cartItems, currentUser };
};

export default function App() {
  const [qty, setQty] = useState(0);
  const cartData = useLoaderData();
  useEffect(() => {
    let count = 0;
    cartData.cartItems.forEach((e) => {
      count += e.qty;
    });
    setQty(count);
  }, [cartData]);

  return (
    <Document>
      <Provider store={store}>
        <SideBar />
        <div className="center-component">
          <Header qty={qty} currentUser={cartData.currentUser} />
          <Outlet />
          <OrderMoreInfo />
          <Footer />
          <OrderSidebar cartData={cartData.cartItems} />
        </div>
        <NavMobile qty={qty} />
      </Provider>
    </Document>
  );
}

function Document({ children, title }) {
  return (
    <html lang="ru">
      <head>
        <Meta />
        <Links />
        <title>{title ? title : "Romsem"}</title>
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" ? <LiveReload /> : null}
      </body>
    </html>
  );
}
