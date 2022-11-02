import { redirect } from "@remix-run/node";
import { db } from "./db.server";
async function getSlides(status) {
  const collectionRef = await db
    .collection("menu")
    .where("popularity", "==", status)
    .get();
  const slides = [];
  collectionRef.forEach((doc) => {
    slides.push({ ...doc.data(), id: doc.id });
  });
  return slides;
}

async function getMenu(categ, selected) {
  const collectionReF = await db.collection("menu").where("categ", "==", categ);
  const menu = [];
  if (selected === "priceMax") {
    (await collectionReF.orderBy("price", "desc").get()).forEach((doc) => {
      menu.push({ ...doc.data() });
    });
  } else if (selected === "priceMin") {
    (await collectionReF.orderBy("price", "asc").get()).forEach((doc) => {
      menu.push({ ...doc.data() });
    });
  } else if (selected === "partAmount") {
    (await collectionReF.orderBy("partition", "desc").get()).forEach((doc) => {
      menu.push({ ...doc.data() });
    });
  } else if (selected === "weight") {
    (await collectionReF.orderBy("weight", "desc").get()).forEach((doc) => {
      menu.push({ ...doc.data() });
    });
  } else if (selected === "id") {
    (await collectionReF.orderBy("id", "asc").get()).forEach((doc) => {
      menu.push({ ...doc.data() });
    });
  } else if (!selected) {
    (await collectionReF.get()).forEach((doc) => {
      menu.push({ ...doc.data() });
    });
  }

  return menu;
}

async function addCurrentClickedCateg(categ) {
  const collectionReF = await db.doc("categ/currentCategory");
  return collectionReF.set(categ, { merge: true });
}

async function getCurrentClickedCateg() {
  const documentRef = db.doc("categ/currentCategory");

  return await documentRef.get().then((doc) => {
    if (doc.exists) {
      return doc.data();
    }
  });
}

async function addToCart(product) {
  const timeStamp = new Date();
  const collectionRef = db.collection("cart");
  const getCollection = collectionRef.doc(product.id);
  const data = (await getCollection.get()).data();
  if (data?.id === product.id) {
    return getCollection.update({ qty: +data?.qty + 1 });
  }
  return getCollection.set({ ...product, qty: 1, timeStamp: timeStamp });
}

async function SinglePageAddToCart(product, qty) {
  const timeStamp = new Date();
  const collectionRef = db.collection("cart");
  const getCollection = collectionRef.doc(product.id);
  const data = (await getCollection.get()).data();
  if (data?.id === product.id) {
    return getCollection.update({ qty: +data?.qty + +qty });
  }
  return getCollection.set({ ...product, qty: +qty, timeStamp: timeStamp });
}

async function getCartItems() {
  const collectionRef = db.collection("cart").orderBy("timeStamp").get();
  let cart = [];
  (await collectionRef).forEach((el) => {
    cart.push({ ...el.data(), id: el.id });
  });
  return cart;
}

async function deleteCartItems() {
  const colRef = db.collection("cart").get();
  (await colRef).forEach((el) => {
    el.ref.delete();
  });
  return null;
}

async function getCurrentProduct(id) {
  const collectionRef = await db.doc(`menu/${id}`).get();
  return { ...collectionRef.data() };
}

async function incrementQty(id) {
  const docRef = db.doc(`cart/${id}`);
  const getDoc = (await docRef.get()).data();
  return await docRef.update({ qty: getDoc.qty + 1 });
}

async function decrementQty(id) {
  const docRef = db.doc(`cart/${id}`);
  const getDoc = (await docRef.get()).data();
  if (getDoc.qty > 1) {
    return await docRef.update({ qty: getDoc.qty - 1 });
  }
  return null;
}

async function addReview(title, date, review) {
  const colRef = await db.collection("reviews");
  await colRef.add({
    title: title,
    date: date,
    desc: review,
    timeStamp: new Date(),
  });
  return redirect("/reviews");
}

async function getReviews() {
  const colRef = await db.collection("reviews").orderBy("timeStamp").get();
  const reviews = [];
  colRef.forEach((el) => {
    reviews.push({ ...el.data(), id: el.id });
  });
  return reviews;
}

export {
  getSlides,
  getMenu,
  addCurrentClickedCateg,
  getCurrentClickedCateg,
  addToCart,
  getCartItems,
  deleteCartItems,
  getCurrentProduct,
  incrementQty,
  decrementQty,
  addReview,
  getReviews,
  SinglePageAddToCart,
};
