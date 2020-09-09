function tab1show() {
  let tab1_content = document.getElementById("tab1-content");
  let tab2_content = document.getElementById("tab2-content");

  tab1_content.style.display = "block";
  tab2_content.style.display = "none";
}

function tab2show() {
  let tab2_content = document.getElementById("tab2-content");
  let tab1_content = document.getElementById("tab1-content");

  tab2_content.style.display = "block";
  tab1_content.style.display = "none";
}
