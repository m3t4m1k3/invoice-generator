"use strict";

const services = [
  {
    id: "wash-car",
    description: "Wash Car",
    price: 10.0,
  },
  {
    id: "mow-lawn",
    description: "Mow Lawn",
    price: 20.0,
  },
  {
    id: "pull-weeds",
    description: "Pull Weeds",
    price: 30.0,
  },
];

let invoiceItems = [];

const btnContainer = document.getElementById("section-btn-container");
const invoiceItemList = document.getElementById("invoice-item-list");
const totalPrice = document.getElementById("total-price");
const sendInvoiceBtn = document.getElementById("btn-submit");

sendInvoiceBtn.addEventListener("click", function (e) {
  reset();
});

function renderButtons() {
  services.forEach((service, i) => {
    const btn = document.createElement("button");
    btn.textContent = `${service.description}: $${service.price}`;
    btn.addEventListener("click", function (e) {
      addInvoiceItem(i);
    });
    btnContainer.appendChild(btn);
  });
}

function renderInvoiceItems() {
  invoiceItemList.innerHTML = "";

  invoiceItems.forEach((item, i) => {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const remove = document.createElement("button");
    const description = document.createElement("span");
    const price = document.createElement("span");
    description.textContent = services[i].description;
    description.classList = "item-description";
    remove.textContent = "x";
    remove.classList = "item-remove";
    remove.addEventListener("click", function (e) {
      removeInvoiceItem(i);
    });
    price.textContent = `$${services[i].price}`;
    price.classList = "item-price";
    span.appendChild(remove);
    span.appendChild(description);
    li.appendChild(span);
    li.appendChild(price);
    invoiceItemList.appendChild(li);
  });

  renderTotal();
}

function renderTotal() {
  let total = 0;
  invoiceItems.forEach((item) => {
    total += item.price;
  });

  totalPrice.textContent = "$" + total;
}

function addInvoiceItem(i) {
  if (invoiceItems[i] === undefined) {
    invoiceItems[i] = services[i];
    renderInvoiceItems();
  }
}

function removeInvoiceItem(i) {
  delete invoiceItems[i];
  renderInvoiceItems();
}

function reset() {
  invoiceItems = [];
  renderInvoiceItems();
}

renderButtons();
