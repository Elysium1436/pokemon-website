window.onload = function () {
  let tab1 = document.getElementById("tab1");
  let tab2 = document.getElementById("tab2");

  function tab1show() {
    console.log("hey I'm being clicked1 why am I being run on start");
    let tab1_content = document.getElementById("tab1-content");
    let tab2_content = document.getElementById("tab2-content");

    tab1_content.style.display = "flex";
    tab2_content.style.display = "none";
  }

  function tab2show() {
    console.log("hey I'm being clicked2");
    let tab2_content = document.getElementById("tab2-content");
    let tab1_content = document.getElementById("tab1-content");

    tab2_content.style.display = "flex";
    tab1_content.style.display = "none";
  }

  tab1.addEventListener("click", tab1show);
  tab2.addEventListener("click", tab2show);
};
