let count = 0;
let peopleCount = document.getElementById("people-count");
let saveCount = document.getElementById("total-count");
function increment() {
  count += 1;
  peopleCount.innerText = count;
}

function save() {
  let total = Number(saveCount.innerText) + Number(peopleCount.innerText);
  peopleCount.textContent = 0;
  count = 0;
  saveCount.innerText = total;
}
