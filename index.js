const categories = [
  {
    label: "Pastor",
    img: "./images/menu8.png.png",
  },
  {
    label: "Pizza",
    img: "./images/menu9.png.png",
  },
  {
    label: "vegan",
    img: "./images/menu10.png.png",
  },
  {
    label: "desserts",
    img: "./images/menu11.png.png",
  },
  {
    label: "smoothies",
    img: "./images/menu12.png.png",
  },
  {
    label: "breakfast",
    img: "./images/menu13.png.png",
  },
];

function displayCategories() {
  // get the category container
  // loop throught each category
  // create a category and append it to the category container
  const container = document.querySelector("#category__container");

  for (let i = 0; i < categories.length; i++) {
    const element = categories[i];

    const category = document.createElement("div");
    category.classList.add("category");

    // img
    const categoryImg = document.createElement("img");
    categoryImg.src = element.img;

    // p
    const categoryDesc = document.createElement("p");
    categoryDesc.textContent = element.label;

    category.appendChild(categoryImg);
    category.appendChild(categoryDesc);

    container.appendChild(category);
  }
}

window.addEventListener("load", () => {
  displayCategories();
});
