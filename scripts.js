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
      imageURL: "https://static.zara.net/assets/public/b1d0/5253/ebf84b4eb4e6/f507c4752d1f/02893100605-e1/02893100605-e1.jpg?ts=1740581556773",
  },
  {
    type: "Bottom",
      name: "Black Striped Jeans",
      imageURL: "https://imageseu.urbndata.com/is/image/UrbanOutfittersEU/0122593371467_001_b?$redesign-zoom-5x$",
  },
  {
    type: "Shoes",
      name: "Cherry Red Loafers",
      imageURL: "https://m.media-amazon.com/images/I/71vrknim1nL._AC_SL1500_.jpg",
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
    editCardContent(nextCard, item.name, item.imageURL); // Edit title and image

    nextCard.addEventListener("click", function() {
      selectItem(item);
    });
    
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}

function editCardContent(card, newTitle, newImageURL) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");

  console.log("newTitle:", newTitle);
  
  cardHeader.textContent = newTitle;

  const cardImage = card.querySelector("img");
  cardImage.src = newImageURL;
  cardImage.alt = newTitle + " Poster";

  // You can use console.log to help you debug!
  // View the output by right clicking on your website,
  // select "Inspect", then click on the "Console" tab
  console.log("new card:", newTitle, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function quoteAlert() {
  console.log("Button Clicked!");
  alert(
    "I guess I can kiss heaven goodbye, because it got to be a sin to look this good!"
  );
}

function removeLastCard() {
  closetItems.pop(); // Remove last item in closetItems array
  showCards(); // Call showCards again to refresh
}
