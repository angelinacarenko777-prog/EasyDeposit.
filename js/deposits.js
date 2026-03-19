console.log("Deposits script loaded");
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
