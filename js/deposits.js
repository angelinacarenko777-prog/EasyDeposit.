const deposits = [
  { bank: "ПриватБанк", percent: 12, term: 12, currency: "UAH" },
  { bank: "Ощадбанк", percent: 10, term: 6, currency: "USD" },
  { bank: "Альфа-Банк", percent: 11, term: 24, currency: "EUR" }
];

const container = document.getElementById("deposit-list");

deposits.forEach(deposit => {
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
