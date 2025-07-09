// =====================
//   BENEFITS POPUPS
// =====================

function setupPopup(openBtn, closeBtn, popup, overlay) {
  openBtn.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.add("popup-active");
    overlay.style.display = "block";
  });

  closeBtn.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.remove("popup-active");
    overlay.style.display = "none";
  });
}

const popup1 = document.getElementById("benefits-1");
const overlay1 = document.querySelector(".overlay");
setupPopup(
  document.getElementById("open-popup-1"),
  document.getElementById("close-popup-1"),
  popup1,
  overlay1
);

const popup2 = document.getElementById("benefits-2");
const overlay2 = document.querySelector(".overlay");
setupPopup(
  document.getElementById("open-popup-2"),
  document.getElementById("close-popup-2"),
  popup2,
  overlay2
);

const popup3 = document.getElementById("benefits-3");
const overlay3 = document.querySelector(".overlay");
setupPopup(
  document.getElementById("open-popup-3"),
  document.getElementById("close-popup-3"),
  popup3,
  overlay3
);

const popup4 = document.getElementById("benefits-4");
const overlay4 = document.querySelector(".overlay");
setupPopup(
  document.getElementById("open-popup-4"),
  document.getElementById("close-popup-4"),
  popup4,
  overlay4
);

const popup5 = document.getElementById("benefits-5");
const overlay5 = document.querySelector(".overlay");
setupPopup(
  document.getElementById("open-popup-5"),
  document.getElementById("close-popup-5"),
  popup5,
  overlay5
);


// === CLAIMBLOCKS POPUPS ===
const claimPopup1 = document.getElementById("benefits-claim-1");
setupPopup(
  document.getElementById("open-claim-popup-1"),
  document.getElementById("close-claim-popup-1"),
  claimPopup1,
  overlay
);

const claimPopup2 = document.getElementById("benefits-claim-2");
setupPopup(
  document.getElementById("open-claim-popup-2"),
  document.getElementById("close-claim-popup-2"),
  claimPopup2,
  overlay
);

const claimPopup3 = document.getElementById("benefits-claim-3");
setupPopup(
  document.getElementById("open-claim-popup-3"),
  document.getElementById("close-claim-popup-3"),
  claimPopup3,
  overlay
);

const claimPopup4 = document.getElementById("benefits-claim-4");
setupPopup(
  document.getElementById("open-claim-popup-4"),
  document.getElementById("close-claim-popup-4"),
  claimPopup4,
  overlay
);

const claimPopup5 = document.getElementById("benefits-claim-5");
setupPopup(
  document.getElementById("open-claim-popup-5"),
  document.getElementById("close-claim-popup-5"),
  claimPopup5,
  overlay
);

const claimPopup6 = document.getElementById("benefits-claim-6");
setupPopup(
  document.getElementById("open-claim-popup-6"),
  document.getElementById("close-claim-popup-6"),
  claimPopup6,
  overlay
);


// === COINS POPUPS ===

const coinPopup1 = document.getElementById("benefits-coin-1");
setupPopup(
  document.getElementById("open-coin-popup-1"),
  document.getElementById("close-coin-popup-1"),
  coinPopup1,
  overlay
);

const coinPopup2 = document.getElementById("benefits-coin-2");
setupPopup(
  document.getElementById("open-coin-popup-2"),
  document.getElementById("close-coin-popup-2"),
  coinPopup2,
  overlay
);

const coinPopup3 = document.getElementById("benefits-coin-3");
setupPopup(
  document.getElementById("open-coin-popup-3"),
  document.getElementById("close-coin-popup-3"),
  coinPopup3,
  overlay
);

const coinPopup4 = document.getElementById("benefits-coin-4");
setupPopup(
  document.getElementById("open-coin-popup-4"),
  document.getElementById("close-coin-popup-4"),
  coinPopup4,
  overlay
);

const coinPopup5 = document.getElementById("benefits-coin-5");
setupPopup(
  document.getElementById("open-coin-popup-5"),
  document.getElementById("close-coin-popup-5"),
  coinPopup5,
  overlay
);

const coinPopup6 = document.getElementById("benefits-coin-6");
setupPopup(
  document.getElementById("open-coin-popup-6"),
  document.getElementById("close-coin-popup-6"),
  coinPopup6,
  overlay
);
// =====================
//   PURCHASE SYSTEM
// =====================

function addToCart(item) {
  const cart = localStorage.getItem("cart");
  if (cart) {
    const cartObj = JSON.parse(cart);
    if (!cartObj.includes(item)) {
      cartObj.push(item);
      localStorage.setItem("cart", JSON.stringify(cartObj));
    }
  } else {
    localStorage.setItem("cart", JSON.stringify([item]));
  }
}

function buyItem(button, item) {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    addToCart(item);
    const successPopup = document.getElementById("success-add");
    successPopup.classList.add("active");
    setTimeout(() => {
      successPopup.classList.remove("active");
    }, 4000);
  });
}

// BUY FOR ITEM SHOP 1
buyItem(document.getElementById("buy-item-1"), "cart-item-1");

// BUY FOR ITEM SHOP 2
buyItem(document.getElementById("buy-item-2"), "cart-item-2");

// BUY FOR ITEM SHOP 3
buyItem(document.getElementById("buy-item-3"), "cart-item-3");

// BUY FOR ITEM SHOP 4
buyItem(document.getElementById("buy-item-4"), "cart-item-4");


buyItem(document.getElementById("buy-item-5"), "cart-item-5");

// Price logic for each key type
const keyConfigs = {
  legendary: {
    select: "legendary-select",
    price: "legendary-price",
    prices: { 1: "₹99", 3: "₹249", 5: "₹399" },
  },
  mvp: {
    select: "mvp-select",
    price: "mvp-price",
    prices: { 1: "₹149", 3: "₹379", 5: "₹599" },
  },
  eternal: {
    select: "eternal-select",
    price: "eternal-price",
    prices: { 1: "₹199", 3: "₹499", 5: "₹799" },
  },
};

Object.values(keyConfigs).forEach(({ select, price, prices }) => {
  document.getElementById(select).addEventListener("change", function () {
    document.getElementById(price).textContent = prices[this.value];
  });
});


