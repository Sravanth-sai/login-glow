const inputItems = document.querySelectorAll(".input-item");

const inputLabels = document.querySelector("input-label");

var item;

// inputLabels.sib;

const onFocus = (e) => {
  e.previousElementSibling.style =
    "top: 0; font-size: 13px; color: rgb(6, 216, 216); cursor: default;";

  e.style = "border-bottom: 1px solid rgb(6, 216, 216);";
};

const onBlur = function (e) {
  //   console.log("FUNC");
  if (!e.value) {
    e.previousElementSibling.style = `top: -27;
                                        `;
    e.style = "border-bottom: 1px solid white;";
  }
};

const loading = (e) => {
  const loader = document.querySelector(".submit-loader");
  const btnText = document.querySelector(".submit-text");
  // loader.parentElement.textContent = "";
  loader.style = "visibility: visible;";
  btnText.style = "visibility: hidden";

  const loadItems = document.querySelectorAll(".loading");

  setTimeout(() => {
    loadItems.forEach((item) => {
      item.classList.add("animate");
    });
  }, 0);

  setTimeout(() => {
    loader.style = "display: none";
    btnText.style = "visibility: visible";
  }, 5500);
};

// inputItems.forEach((item) => {
//     item.ne
//   console.log(item);
//   item.addEventListener("focus", function () {
//     console.log("FOCUS!");
//   });
//   item.addEventListener("blur", function () {
//     console.log("BLUR");
//     // Check if input is empty
//     if (!this.value) {
//       console.log("HERE");
//       const a = this;
//       _onBlur(item);
//     }
//   });
// });
