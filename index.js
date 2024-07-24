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

const recipies = [
  {
    img: "./images/menu84.jpg.jpg",
    title: "Delicious Fancy Glazed Blueberry Donuts",
    rating: 5,
    user: {
      img: "./images/avatar1.png.png",
      name: "Tricia Albert",
    },
    meta: {
      comments: 456,
      createdAt: new Date(),
    },
  },
  {
    img: "./images/menu85.jpg.jpg",
    title: "Pan Fried Cod in Creamy Kale Sauce",
    rating: 4,
    user: {
      img: "./images/avatar1.png.png",
      name: "Tricia Albert",
    },
    meta: {
      comments: 678,
      createdAt: new Date(),
    },
  },
  {
    img: "./images/menu86.jpg.jpg",
    title: "Berry Maddness Biscuts",
    rating: 2,
    user: {
      img: "./images/avatar1.png.png",
      name: "Tricia Albert",
    },
    meta: {
      comments: 42,
      createdAt: new Date(),
    },
  },
  {
    img: "./images/menu87.jpg.jpg",
    title: "Four Ingredient Oatmeal Pancakes",
    rating: 1,
    user: {
      img: "./images/avatar1.png.png",
      name: "Tricia Albert",
    },
    meta: {
      comments: 35,
      createdAt: new Date(),
    },
  },
  {
    img: "./images/menu88.jpg.jpg",
    title: "Pumpkin Marshmallow Pie",
    rating: 5,
    user: {
      img: "./images/avatar1.png.png",
      name: "Tricia Albert",
    },
    meta: {
      comments: 10,
      createdAt: new Date(),
    },
  },
  {
    img: "./images/menu89.jpg.jpg",
    title: "Mighty Cheesy Breakfast Burger",
    rating: 5,
    user: {
      img: "./images/avatar1.png.png",
      name: "Tricia Albert",
    },
    meta: {
      comments: 456,
      createdAt: new Date(),
    },
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

function star() {
  const star = document.createElement("svg");
  star.setAttribute("width", 24);
  star.setAttribute("height", 24);
  star.setAttribute("viewBox", "0 0 24 24");
  // star.setAttribute("fill", "none");
  star.setAttribute("stroke", "none");
  star.setAttribute("stroke-width", "2");
  star.setAttribute("stroke-linecap", "round");
  star.setAttribute("stroke-linejoin", "round");
  star.setAttribute("stroke-width", "2");
  star.style.display = "bold";

  const polygon = document.createElement("polygon");
  polygon.points =
    "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2";
  polygon.style.width = "100%";
  polygon.style.height = "100%";
  star.appendChild(polygon);
  return star;
}

function displayRecipies() {
  const container = document.querySelector("#delicious__container");

  recipies.forEach((recipe) => {
    //  card
    const card = document.createElement("div");
    card.classList.add("delicious__card");

    // image
    const imgContainer = document.createElement("div");
    imgContainer.classList.add("delicious__card__img");

    const cardImg = document.createElement("img");
    cardImg.src = recipe.img;

    imgContainer.appendChild(cardImg);

    card.appendChild(imgContainer);

    // content
    const cardContent = document.createElement("div");
    cardContent.classList.add("delicious__card__content");

    // star
    const rating = document.createElement("div");
    rating.classList.add("delicious__rating");

    rating.appendChild(star());
    cardContent.appendChild(rating);

    // desc
    const title = document.createElement("p");
    title.classList.add("delicious__title");
    title.textContent = recipe.title;

    cardContent.appendChild(title);

    // creator
    const creator = document.createElement("div");
    creator.classList.add("delicious__creator");

    // creator - avatar
    const avatar = document.createElement("img");
    avatar.setAttribute("src", recipe.user.img);
    creator.appendChild(avatar);

    // creator - name
    const name = document.createElement("p");
    name.textContent = recipe.user.name;
    creator.appendChild(name);

    cardContent.appendChild(creator);

    // meta
    const meta = document.createElement("div");
    meta.classList.add("delicious__meta");

    // meta - msg
    const date = document.createElement("div");
    date.classList.add("delicious__meta__entry");

    // meta - date - icon
    const dateIcon = document.createElement("img");
    dateIcon.setAttribute("src", "./icons/calendar.svg");
    date.appendChild(dateIcon);

    // meta - date - value
    const dateValue = document.createElement("p");
    dateValue.textContent = `${recipe.meta.createdAt.getDay()}/${
      recipe.meta.createdAt.getMonth() + 1
    }/${recipe.meta.createdAt.getFullYear()}`;
    date.appendChild(dateValue);

    meta.appendChild(date);
    cardContent.appendChild(meta);

    // meta - msg
    const comment = document.createElement("div");
    comment.classList.add("delicious__meta__entry");

    // meta - msg - icon
    const commentIcon = document.createElement("img");
    commentIcon.setAttribute("src", "./icons/message-square.svg");
    comment.appendChild(commentIcon);

    // meta - msg - value
    const commentValue = document.createElement("p");
    commentValue.textContent = recipe.meta.comments;
    comment.appendChild(commentValue);

    meta.appendChild(comment);
    cardContent.appendChild(meta);

    card.appendChild(cardContent);
    container.appendChild(card);
  });
}

window.addEventListener("load", () => {
  displayCategories();
  displayRecipies();
});
