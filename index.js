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

const collections = [
  {
    img: "./images/curatedcoll1.jpg",
    title: "Sushi combos for your next party",
    recipes: "156 recipes",
  },
  {
    img: "./images/menu15.jpg.jpg",
    title: "Everything Bagel",
    recipes: "156 recipes",
  },
  {
    img: "./images/curatedcoll3.jpg",
    title: "Cook Like a Chef",
    recipes: "156 recipes",
  },
  {
    img: "./images/curatedcoll4.jpg",
    title: "Exquisite Dinner Recipe Ideas",
    recipes: "156 recipes",
  },
  {
    img: "./images/curatedcoll5.jpg",
    title: "The Ultimate Cookie Frenzy",
    recipes: "156 recipes",
  },
  {
    img: "./images/curatedcoll6.jpg",
    title: "Fot the Love of Donuts",
    recipes: "156 recipes",
  },
];

const recipees = [
  {
    label: "caramel strawberry milkshake",
    img: "./images/Link.jpg",
  },
  {
    label: "Cashew Vegan Rice",
    img: "./images/Link-1.jpg",
  },
  {
    label: "caramel strawberry milkshake",
    img: "./images/Link-2.jpg",
  },
  {
    label: "caramel strawberry milkshake",
    img: "./images/Link-3.jpg",
  },
  {
    label: "caramel strawberry milkshake",
    img: "./images/Link-4.jpg",
  },
  {
    label: "caramel strawberry milkshake",
    img: "./images/Link-5.jpg",
  },
  {
    label: "caramel strawberry milkshake",
    img: "./images/Link-6.jpg",
  },
  {
    label: "caramel strawberry milkshake",
    img: "./images/Link-7.jpg",
  },
  {
    label: "caramel strawberry milkshake",
    img: "./images/Link-8.jpg",
  },
  {
    label: "caramel strawberry milkshake",
    img: "./images/Link-9.jpg",
  },
  {
    label: "caramel strawberry milkshake",
    img: "./images/Link-10.jpg",
  },
  {
    label: "caramel strawberry milkshake",
    img: "./images/Link-11.jpg",
  },
  {
    label: "caramel strawberry milkshake",
    img: "./images/Link-12.jpg",
  },
  {
    label: "caramel strawberry milkshake",
    img: "./images/Link-13.jpg",
  },
  {
    label: "caramel strawberry milkshake",
    img: "./images/Link-14.jpg",
  },
  {
    label: "caramel strawberry milkshake",
    img: "./images/Link-15.jpg",
  },
  {
    label: "caramel strawberry milkshake",
    img: "./images/Link-16.jpg",
  },
 {
    label: "caramel strawberry milkshake",
    img: "./images/Link-17.jpg",
  },
  {
    label: "caramel strawberry milkshake",
    img: "./images/Link-18.jpg",
  },
 {
    label: "caramel strawberry milkshake",
    img: "./images/Link-19.jpg",
  },  
  {
    label: "caramel strawberry milkshake",
    img: "./images/Link-20.jpg",
  },
  {
    label: "caramel strawberry milkshake",
    img: "./images/Link-21.jpg",
  },
  {
    label: "caramel strawberry milkshake",
    img: "./images/Link-22.jpg",
  },
  {
    label: "caramel strawberry milkshake",
    img: "./images/Link-23.jpg",
  },
]

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

function displayCollections() {
  const container = document.querySelector("#collections__container");

  collections.forEach((collection) => {
    //card
    const card = document.createElement("div");
    card.classList.add("collections__card");

    //img
    const imgContainer = document.createElement("div");
    imgContainer.classList.add("collections__card__img");

    const cardImg = document.createElement("img");
    cardImg.src = collection.img;

    imgContainer.appendChild(cardImg);
    card.appendChild(imgContainer);

    //title
    const content = document.createElement("div");
    content.classList.add("collections__card__content");

    const title = document.createElement("p");
    title.classList.add("collections__title");
    title.textContent = collection.title;

    content.appendChild(title);

    //meta
    const metaContainer = document.createElement("div");
    metaContainer.classList.add("collections__meta");

    const meta = document.createElement("p");
    meta.textContent = collection.recipes;

    metaContainer.appendChild(meta);
    content.appendChild(metaContainer);

    card.appendChild(content);
    container.appendChild(card);
  });
}

function displayRecipees() {
  const container = document.querySelector("#recipes__container");

  recipees.forEach((latest => {
    const card = document.createElement("div");
    card.classList.add("recipes__card");

    // img
    const imgContainer = document.createElement("div");
    imgContainer.classList.add("recipes__card__img");

    const cardImg = document.createElement("img");
    cardImg.src = latest.img;

    imgContainer.appendChild(cardImg);
    card.appendChild(imgContainer);

    // title
    const title = document.createElement("p");
    title.classList.add("recipes__card__title");
    title.textContent = latest.label;

    card.appendChild(title);

    container.appendChild(card);

  }))
}

window.addEventListener("load", () => {
  displayCategories();
  displayRecipies();
  displayCollections();
  displayRecipees();
});
