function tab1show() {
  let tab1_content = document.getElementById("tab1-content");
  let tab2_content = document.getElementById("tab2-content");

  tab1_content.style.display = "flex";
  tab2_content.style.display = "none";
}

function tab2show() {
  let tab2_content = document.getElementById("tab2-content");
  let tab1_content = document.getElementById("tab1-content");

  tab2_content.style.display = "flex";
  tab1_content.style.display = "none";
}

let tab1 = document.getElementById("tab1");
let tab2 = document.getElementById("tab2");

tab1.addEventListener(onclick, tab1show);
tab2.addEventListener(onclick, tab2show);
