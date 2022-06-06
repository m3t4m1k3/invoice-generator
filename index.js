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

const btnContainer = document.getElementById("btn-container");
const invoiceItemList = document.getElementById("invoice-item-list");
const totalPrice = document.getElementById("total-price");
const sendInvoiceBtn = document.getElementById("btn-submit");

sendInvoiceBtn.addEventListener("click", function () {
  reset();
});

function renderButtons() {
  services.forEach((service, i) => {
    const btn = document.createElement("button");
    btn.textContent = `${service.description}: $${service.price}`;
    btn.addEventListener("click", function () {
      addInvoiceItem(i);
    });
    btnContainer.appendChild(btn);
  });
}

function renderInvoiceItems() {
  invoiceItemList.innerHTML = "";

  invoiceItems.forEach((item, i) => {
    const li = document.createElement("li");
    const description = document.createElement("span");
    const removeBtn = document.createElement("span");
    const price = document.createElement("span");
    description.textContent = services[i].description;
    removeBtn.textContent = "Remove";
    removeBtn.classList = "btn-remove";
    removeBtn.addEventListener("click", function () {
      removeInvoiceItem(i);
    });
    price.textContent = `$${services[i].price}`;
    li.appendChild(description);
    li.appendChild(removeBtn);
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

  totalPrice.textContent = total;
}

function addInvoiceItem(i) {
  if (!invoiceItems[i]) {
    invoiceItems[i] = services[i];
    renderInvoiceItems();
  }
}

function removeInvoiceItem(i) {
  invoiceItems[i] = undefined;
  renderInvoiceItems();
}

function reset() {
  invoiceItems = [];
  renderInvoiceItems();
}

renderButtons();
