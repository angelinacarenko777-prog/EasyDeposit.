const deposits = [
  { bank: "ПриватБанк", percent: 12, term: 12, currency: "UAH" },
  { bank: "Ощадбанк", percent: 10, term: 6, currency: "USD" },
  { bank: "Альфа-Банк", percent: 11, term: 24, currency: "EUR" },
  { bank: "Мегабанк", percent: 9, term: 12, currency: "UAH" },
  { bank: "Промінвест", percent: 13, term: 24, currency: "USD" }
];

const container = document.getElementById("deposit-list");
const currencyFilter = document.getElementById("currency-filter");
const termFilter = document.getElementById("term-filter");
const percentFilter = document.getElementById("percent-filter");
const applyButton = document.getElementById("apply-filters");

function showDeposits(list) {
  container.innerHTML = "";
  list.forEach(deposit => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${deposit.bank}</h3>
      <p>Відсоток: ${deposit.percent}%</p>
      <p>Термін: ${deposit.term} місяців</p>
      <p>Валюта: ${deposit.currency}</p>
    `;

    container.appendChild(card);
  });
}

function applyFilters() {
  let filtered = deposits;

  if (currencyFilter.value !== "all") {
    filtered = filtered.filter(d => d.currency === currencyFilter.value);
  }

  if (termFilter.value !== "all") {
    filtered = filtered.filter(d => d.term === parseInt(termFilter.value));
  }

  if (percentFilter.value) {
    filtered = filtered.filter(d => d.percent >= parseFloat(percentFilter.value));
  }

  showDeposits(filtered);
}

showDeposits(deposits);

applyButton.addEventListener("click", applyFilters);
