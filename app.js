const items = [
  { item: "Coffee", cost: 15, count: 0 },
  { item: "Cookie", cost: 20, count: 0 },
  { item: "Coke", cost: 25, count: 0 },
];
let total_coins = 0;
let inserted_coin = 0;
let val = 0;
let accept = false;
let stat = document.getElementById("status-state");
let message = document.getElementById("status-message");
let balance = document.getElementById("bal");
let coins = document.querySelectorAll(".coin");
let products = document.querySelectorAll(".product");
let dispense_products = document.querySelectorAll(".dispense-product");

products.forEach((product) => {
  product.style.display = "none";
  product.onclick = () => {
    val = parseInt(product.value);
    buy();
    dispense();
    hide_product();
  };
});

dispense_products.forEach((product) => {
  product.style.display = "none";
  product.onclick = () => {
    product.style.display = "none";
  };
});

coins.forEach((coin) => {
  coin.onclick = () => {
    inserted_coin = parseInt(coin.value);
    validate_coin();
    show_product();
  };
});

const validate_coin = () => {
  switch (total_coins) {
    case 0:
      total_coins += inserted_coin;
      accept = true;
      break;
    case 5:
      if (inserted_coin == 10) {
        total_coins += inserted_coin;
      } else {
        accept = false;
      }
      break;
    case 10:
      total_coins += inserted_coin;
      accept = true;
      break;
    case 15:
      if (inserted_coin == 10) {
        total_coins += inserted_coin;
      } else {
        accept = false;
      }
      break;
    case 20:
      if (inserted_coin == 5) {
        total_coins += inserted_coin;
      } else {
        accept = false;
      }
      break;
    case 25:
      accept = false;
      break;
  }

  if (accept == true) {
    stat.textContent = "Accepted";
    message.textContent = "Inserted ₱" + inserted_coin;
  } else {
    stat.textContent = "Rejected";
    if (total_coins != 25) {
      message.textContent = "Cannot Accept ₱" + inserted_coin;
    } else {
      message.textContent = "Cannot Accept Coins";
    }
  }

  console.log(total_coins);
  balance.textContent = total_coins;
};

const show_product = () => {
  if (total_coins == 15) {
    products[0].style.display = "block";
  } else if (total_coins == 20) {
    products[0].style.display = "block";
    products[1].style.display = "block";
  } else if (total_coins == 25) {
    products[0].style.display = "block";
    products[1].style.display = "block";
    products[2].style.display = "block";
  }
};

const buy = () => {
  total_coins -= items[val].cost;
  balance.textContent = total_coins;
  stat.textContent = "Success!";
  message.textContent = "Get Your " + items[val].item;
};

const dispense = () => {
  dispense_products[val].style.display = "block";
};

const hide_product = () => {
  products[0].style.display = "none";
  products[1].style.display = "none";
  products[2].style.display = "none";
};
