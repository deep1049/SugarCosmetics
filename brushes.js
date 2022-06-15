let brushesItems = [
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-14_1.jpg?v=1627659982",
    name: "blend trend eyeshadow brush -043 - round xl",
    price: 399,
    rating: "4.8(6)",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-3-min.jpg?v=1627573657",
    name: "blend trend eyeshadow brush -042 - round",
    price: 399,
    rating: "4.4(5)",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-13.jpg?v=1627659977",
    name: "Blend Trend Dual Eyeshadow Brush - 413 Flat + Round Xl",
    price: 599,
    rating: "5(2)",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-2-min.jpg?v=1627573652",
    name: "Blend Trend Eyeshadow Brush - 041 Flat",
    price: 399,
    rating: "5(3)",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-5-min.jpg?v=1627573639",
    name: "Blend Trend Dual Eyeshadow Brush - 412 Flat + Round",
    price: 599,
    rating: "5(2)",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/BlendTrendFaceBrush-003Contour.jpg?v=1627659996",

    name: "Blend Trend Face Brush - 003 Contour",

    price: 399,
    rating: "4.5(13)",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/BlendTrendFaceBrush-006Highlighter.jpg?v=1627660002",

    name: "Blend Trend Face Brush - 006 highlighter",

    price: 399,
    rating: " 4.7(23)",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/BlendTrendFoundationBrush-052Kabuki.jpg?v=1627573664",

    name: "Blend Trend Foundation Brush - 052 kabuki",

    price: 399,
    rating: " 4.8(26)",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/BlendTrendFaceBrush-001Blush.jpg?v=1627659984",

    name: "Blend Trend Foundation Brush - 001 blush",

    price: 399,
    rating: "4.9(15)",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/BlendTrendFaceBrush-007Powder.jpg?v=1627660008",

    name: "Blend Trend Foundation Brush - 007 powder",

    price: 399,
    rating: "4.9(24)",
  },
];
localStorage.setItem("Brushes", JSON.stringify(brushesItems));
let brushDataLS = JSON.parse(localStorage.getItem("Brushes"));

displayItemCards(brushDataLS);

function displayItemCards(brushDataLS) {
  document.querySelector("#left > p+p > span").innerText =
    brushesItems.length + " " + "items";
  brushDataLS.forEach(function (ele) {
    let card = document.createElement("div");
    let cardDiv = document.createElement("div");
    let itemImg = document.createElement("img");
    itemImg.src = ele.image;

    let itemName = document.createElement("h3");
    itemName.innerText = ele.name;

    let itemPrice = document.createElement("p");
    itemPrice.innerText = "Rs" + ele.price;

    let ratDiv = document.createElement("div");

    let itemRating = document.createElement("p");
    itemRating.innerText = ele.rating;
    let ratingIcon = document.createElement("img");
    ratingIcon.src = "	https://in.sugarcosmetics.com/star_filled.png";

    let btnDiv = document.createElement("div");
    let addCart = document.createElement("p");
    addCart.innerText = "Add to Cart";
    let addwish = document.createElement("img");
    addwish.src = "https://img.icons8.com/material-outlined/344/like--v1.png";

    btnDiv.append(addwish, addCart);
    ratDiv.append(ratingIcon, itemRating);
    cardDiv.append(itemImg, itemName, itemPrice, ratDiv);
    card.append(cardDiv, btnDiv);
    document.querySelector("#cards_container").append(card);
  });
}
