//add credit

let creditDiscription = document.getElementById("creditDiscription");
let creditAmount = document.getElementById("creditAmount");
let creditBtn = document.getElementById("creditBtn");
let creditTable = document.getElementById("creditTable");

creditBtn.addEventListener("click", () => {
  let discription = creditDiscription.value;
  let amount = creditAmount.value;

  let template = `
    <tr>
        <td>${discription}</td>
        <td>K${amount}</td>
        <td scope="col">
            <button class="btn btn-sm btn-outline-secondary">Edit</button>
            <button class="btn btn-sm btn-outline-danger">Delete</button>
        </td>
    </tr>
    `;
  creditTable.innerHTML += template;
});

//topup credit

let topupBusBame = document.getElementById("topupBusBame");
let topupDriversName = document.getElementById("topupDriversName");
let topupAmount = document.getElementById("topupAmount");
let topupBtn = document.getElementById("topupBtn");
let topupTable = document.getElementById("topupTable");

topupBtn.addEventListener("click", () => {
  let busName = topupBusBame.value;
  let driverName = topupDriversName.value;
  let amount = topupAmount.value;

  let template = `
    <tr>
        <td>${busName}</td>
        <td>${driverName}</td>
        <td>K${amount}</td>
        <td scope="col">
            <button class="btn btn-sm btn-outline-secondary">Edit</button>
            <button class="btn btn-sm btn-outline-danger">Delete</button>
        </td>
    </tr>
    `;
  topupTable.innerHTML += template;
  console.log(template);
});
