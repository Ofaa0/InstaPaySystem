const moneyInp = document.querySelector("input");
const moneyAsNumber = document.querySelector("p span");
const tBody = document.querySelector("table tbody");
let balnce = 0;
let moneyFromUser = 0;
let transHistory = [];

let doWithdraw = () => {
  moneyFromUser = +moneyInp.value;
  if (moneyFromUser <= balnce && moneyFromUser > 0) {
    balnce -= moneyFromUser;
    moneyAsNumber.innerText = balnce;
    let wdObj = {
      date: currentDate(),
      action: "Withdraw",
      value: moneyFromUser,
      total: balnce,
    };
    transHistory.push(wdObj);
    addTable();
  } else {
    alert("عذرا الاموال لا تكفي");
  }
};
let doDeposite = () => {
  moneyFromUser = +moneyInp.value;
  if (moneyFromUser > 0) {
    balnce += moneyFromUser;
    moneyAsNumber.innerText = balnce;
    moneyAsNumber.innerText = balnce;
    let dpObj = {
      date: currentDate(),
      action: "Deposite",
      value: moneyFromUser,
      total: balnce,
    };
    transHistory.push(dpObj);
    addTable();
  } else {
    alert("من فضلك ادخل مبلغا صحيحا");
  }
};
let currentDate = () => {
  let now = new Date();
  let y = now.getFullYear();
  let m = String(now.getMonth() + 1).padStart(2, "0");
  let d = String(now.getDate()).padStart(2, "0");
  let h = String(now.getHours()).padStart(2, "0");
  let min = String(now.getMinutes()).padStart(2, "0");
  return `${y}/${m}/${d}  ${h}:${min}`;
};
let addTable = () => {
  tBody.innerHTML = "";
  transHistory.forEach((el) => {
    tBody.innerHTML += `<tr>
        <td>${el.date}</td>
        <td>${el.action}</td>
        <td>${el.value}</td>
        <td>${el.total}</td>
    </tr>`;
  });
};
