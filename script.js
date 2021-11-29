const search = document.querySelector("input");
const liItems = document.querySelectorAll("li");

const filterList = () => {
  liItems.forEach((item) => {
    const match = new RegExp(search.value, "i").test(item.textContent);

    if (!match) {
      item.style.display = "none";
    } else {
      item.style.display = "block";
    }
  });
  console.log(search.value);
};

search.addEventListener("keyup", filterList);
