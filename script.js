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
      img: "./images/Link-4.jpg",
    },
    {
      label: "caramel strawberry milkshake",
      img: "./images/Link-5.jpg",
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
      img: "./images/menu87.jpg.jpg",
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
      img: "./images/Link-16.jpg",
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
      img: "./images/Link-13.jpg",
    },
  ]

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
    displayCollections();
    displayRecipees();
  });