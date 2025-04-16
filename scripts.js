/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */

// This is an array of strings (closet items)
let closetItems = [
  {
    type: "Top",
      name: "Burgundy Knit Sweater",
      size: "S",
      brand: "Zara",
      imageURL: "https://static.zara.net/assets/public/b1d0/5253/ebf84b4eb4e6/f507c4752d1f/02893100605-e1/02893100605-e1.jpg?ts=1740581556773",
  },
  {
    type: "Bottom",
      name: "Black Striped Jeans",
      size: "27",
      brand: "Urban Outfitters",
      imageURL: "https://imageseu.urbndata.com/is/image/UrbanOutfittersEU/0122593371467_001_b?$redesign-zoom-5x$",
  },
  {
    type: "Shoes",
      name: "Cherry Red Loafers",
      size: "6",
      brand: "Dr. Martens",
      imageURL: "https://i.ebayimg.com/images/g/9e8AAOSwsIBjVmRF/s-l1200.jpg",
  },
  {
    type: "Top",
      name: "Pink Hoodie",
      size: "S",
      brand: "Gap",
      imageURL: "https://www.marveljacket.com/wp-content/uploads/2024/07/Pink-Gap-Hoodie-4.jpeg",
    },
  {
    type: "Bottom",
      name: "Black Parachute Pants",
      size: "M",
      brand: "Stradivarius",
      imageURL: "https://pistachio-eg.com/wp-content/uploads/2024/08/Screenshot_%D9%A2%D9%A0%D9%A2%D9%A4%D9%A0%D9%A8%D9%A2%D9%A7_%D9%A1%D9%A9%D9%A0%D9%A7%D9%A3%D9%A5_Chrome.jpg"
    },
  {
    type: "Shoes",
      name: "Chuck 70 High Tops",
      size: "6",
      brand: "Converse",
      imageURL: "https://shoegallerymiami.com/cdn/shop/products/CONVERSE-CHUCK-70-HIGH-TOP-BLACK-EGRET-162050C-3_1080x.jpg?v=1674867254",
  },
];

function selectItem(item) {
  if (item.type === "Top") {
    document.getElementById("selected-top").textContent = "Top: " + item.name;
  } else if (item.type === "Bottom") {
    document.getElementById("selected-bottom").textContent = "Bottom: " + item.name;
  } else if (item.type === "Shoes") {
    document.getElementById("selected-shoes").textContent = "Shoes: " + item.name;
  }
}
// This function adds cards the page to display the data in the array
function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < closetItems.length; i++) {
    let item = closetItems[i];

    console.log("item:", item);
    
    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, item.name, item.imageURL, item.size, item.brand); // Edit title and image

    nextCard.addEventListener("click", function() {
      selectItem(item);  //places selected item(s) in "Your Current Outfit"
    });
    
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}

function editCardContent(card, newTitle, newImageURL, size, brand) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");  
  cardHeader.textContent = newTitle;

  const cardImage = card.querySelector("img");
  cardImage.src = newImageURL;
  cardImage.alt = newTitle + " Image";

  const sizeElement = card.querySelector(".size-info");
  const brandElement = card.querySelector(".brand-info");

  sizeElement.textContent = "Size: " + size;
  brandElement.textContent = "Brand: " + brand;


  console.log("new card:", newTitle, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

// Allow users to save their favorite outfit
let favOutfit = {
  top: null,
  bottom: null,
  shoes: null,
};

function saveFavOutfit() {
  favOutfit.top = document.getElementById("selected-top").textContent;
  favOutfit.bottom = document.getElementById("selected-bottom").textContent;
  favOutfit.shoes = document.getElementById("selected-shoes").textContent;

  alert("Your outfit has been saved as a favorite!");
  
}

// Load the user's favorite outfit (the one they saved)
function loadFavOutfit() {
  if (favOutfit.top && favOutfit.bottom && favOutfit.shoes) {
    document.getElementById("selected-top").textContent = favOutfit.top;
    document.getElementById("selected-bottom").textContent = favOutfit.bottom;
    document.getElementById("selected-shoes").textContent = favOutfit.shoes;

    alert("Favorite Outfit loaded!");
  } else {
    alert("No favorite outfit saved yet!");
  }
}

//Let's user reset their whole outfit
function resetOutfit() {
  document.getElementById("selected-top").textContent = "Top: [none]";
  document.getElementById("selected-bottom").textContent = "Bottom: [none]";
  document.getElementById("selected-shoes").textContent = "Shoes: [none]";
}
