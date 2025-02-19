window.addEventListener("scroll", function () {
  let header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// ********eni Shecvla**********

document.addEventListener("DOMContentLoaded", function () {
  var flagLink = document.getElementById("flagLink");
  var georgianFlag = document.getElementById("georgianFlag");
  var checkbox = document.getElementById("languageCheckbox");
  var slider = document.getElementById("slider");
  var englishMenuItems = document.querySelectorAll(".menu__link");
  var georgianMenuItems = document.querySelectorAll(".menu__link2");
  var georgianText = document.getElementById("georgianText");
  var englishText = document.getElementById("englishText");

  function toggleMenuItems(language) {
    if (language === "eng") {
      englishMenuItems.forEach(function (item) {
        item.style.display = "block";
      });
      georgianMenuItems.forEach(function (item) {
        item.style.display = "none";
      });

      georgianText.style.display = "none";
      englishText.style.display = "block";
    } else if (language === "geo") {
      englishMenuItems.forEach(function (item) {
        item.style.display = "none";
      });
      georgianMenuItems.forEach(function (item) {
        item.style.display = "block";
      });

      georgianText.style.display = "block";
      englishText.style.display = "none";
    }
  }

  // Set initial state: only English flag is lit up
  georgianFlag.style.opacity = "0.3";

  flagLink.addEventListener("click", function (event) {
    event.preventDefault();
    checkbox.checked = false;
    flagLink.style.opacity = "1";
    georgianFlag.style.opacity = "0.3";
    slider.dataset.text = "eng";
    toggleMenuItems("eng");
    updateBallPosition();
  });

  georgianFlag.addEventListener("click", function (event) {
    event.preventDefault();
    checkbox.checked = true;
    flagLink.style.opacity = "0.3";
    georgianFlag.style.opacity = "1";
    slider.dataset.text = "geo";
    toggleMenuItems("geo");
    updateBallPosition();
  });

  slider.addEventListener("click", function (event) {
    checkbox.checked = !checkbox.checked;
    slider.dataset.text = checkbox.checked ? "geo" : "eng";
    toggleMenuItems(checkbox.checked ? "geo" : "eng");
    updateBallPosition();
  });

  checkbox.addEventListener("change", function (event) {
    if (checkbox.checked) {
      georgianFlag.click();
    } else {
      flagLink.click();
    }
  });

  toggleMenuItems("eng"); // Initialize menu items to show English by default
});

// **********about da contact cliki**************

document.addEventListener("DOMContentLoaded", function () {
  const aboutLink = document.getElementById("aboutLink");
  const aboutLink2 = document.getElementById("aboutLink2");
  const closeButton = document.getElementById("closeButton");
  const closeButtonGe = document.getElementById("closeButtonGe");
  const aboutContent = document.getElementById("aboutContent");
  const aboutContentGe = document.getElementById("aboutContentGe");

  // About სექციების ჩვენება
  if (aboutLink && aboutContent) {
    aboutLink.addEventListener("click", function (event) {
      event.preventDefault();
      aboutContent.style.display = "flex";
      aboutContentGe.style.display = "none";
    });
  }

  if (aboutLink2 && aboutContentGe) {
    aboutLink2.addEventListener("click", function (event) {
      event.preventDefault();
      aboutContentGe.style.display = "flex";
      aboutContent.style.display = "none";
    });
  }

  // დახურვის ფუნქცია
  function addCloseEvent(buttonId, contentId) {
    const button = document.getElementById(buttonId);
    const content = document.getElementById(contentId);

    if (button && content) {
      button.addEventListener("click", function () {
        content.style.display = "none";
      });
    }
  }

  // About სექციების დახურვა
  addCloseEvent("closeButton", "aboutContent");
  addCloseEvent("closeButtonGe", "aboutContentGe");

  // Shopping popup-ის დახურვა
  addCloseEvent("closeShoppingPopup", "shoppingPopupContainer");
});

// ************იმგ სლაიდერ*******************
// JavaScript for slider functionality
// JavaScript for slider functionality
const sliderImages = document.querySelectorAll(".img_slider__img");
const arrowLeft = document.querySelector(".left-arrow");
const arrowRight = document.querySelector(".right-arrow");
const dotsContainer = document.querySelector(".dots-container");
let currentImageIndex = 0;

// Function to show the current image
function showImage(index) {
  sliderImages.forEach((image, i) => {
    if (i === index) {
      image.style.display = "block";
    } else {
      image.style.display = "none";
    }
  });

  // Highlight the corresponding dot
  const dots = dotsContainer.querySelectorAll(".dot");
  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

// Create dots based on the number of images
sliderImages.forEach((_, i) => {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  dot.addEventListener("click", () => {
    showImage(i);
  });
  dotsContainer.appendChild(dot);
});

// Initial image display
showImage(currentImageIndex);

// Event listener for left arrow click
arrowLeft.addEventListener("click", () => {
  currentImageIndex =
    currentImageIndex === 0 ? sliderImages.length - 1 : currentImageIndex - 1;
  showImage(currentImageIndex);
});

// Event listener for right arrow click
arrowRight.addEventListener("click", () => {
  currentImageIndex =
    currentImageIndex === sliderImages.length - 1 ? 0 : currentImageIndex + 1;
  showImage(currentImageIndex);
});

// ************infos kodi************
// Get the elements
var infoLink = document.getElementById("info");
var infoPopupContainer = document.getElementById("infoPopupContainer");
var closeInfoPopup = document.getElementById("closeInfoPopup");

// Event listener for info link
infoLink.addEventListener("click", function () {
  infoPopupContainer.style.display = "flex";
});

// Close popup when close button is clicked
closeInfoPopup.addEventListener("click", function () {
  infoPopupContainer.style.display = "none";
});

/* ******************შოპინგ ქარდის კოდი*********** */

var shoppingLink = document.getElementById("shoppingLink");
var shoppingPopupContainer = document.getElementById("shoppingPopupContainer");
var closeShoppingPopup = document.getElementById("closeShoppingPopup");

// Event listener for shopping link
shoppingLink.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent default behavior of link
  shoppingPopupContainer.style.display = "flex";
});

// Close popup when close button is clicked
closeShoppingPopup.addEventListener("click", function () {
  shoppingPopupContainer.style.display = "none";
});

// ********კალათაში დამატების კოდი************
document.addEventListener("DOMContentLoaded", () => {
  let cartCount = 0;
  let totalPrice = 0;

  const itemPriceElement = document.querySelector(".table__price");
  const itemNameElement = document.querySelector(".item-name__title");
  const itemNumberElement = document.querySelector(".table__namber");
  const slider = document.querySelector(".slider");
  const initialTotalElement = document.getElementById("initialTotal");

  if (
    !itemPriceElement ||
    !itemNameElement ||
    !itemNumberElement ||
    !slider ||
    !initialTotalElement
  ) {
    console.error("One or more elements are missing.");
    return;
  }

  const itemPrice = parseFloat(itemPriceElement.getAttribute("data-price"));
  const itemName = itemNameElement.textContent.trim();
  const itemNumber = itemNumberElement.textContent.trim();

  const cartCountElement = document.getElementById("cartCount");
  const totalPriceElement = document.getElementById("totalPrice");
  const buyButton = document.getElementById("buyButton");
  const cartItemsContainer = document.getElementById("cartItems");
  const orderButton = document.getElementById("orderButton");
  const totalAndLariElement = document.getElementById("totalAndLari");

  if (
    !cartCountElement ||
    !totalPriceElement ||
    !buyButton ||
    !cartItemsContainer ||
    !orderButton ||
    !totalAndLariElement
  ) {
    console.error("One or more essential elements are missing.");
    return;
  }

  const getLanguage = () => slider.dataset.text || "eng";

  const showAlert = (type) => {
    const language = getLanguage();
    const alertElement =
      language === "eng" ?
        document.getElementById("customAlert__eng")
      : document.getElementById("customAlert__geo");

    if (!alertElement) {
      console.error("Alert element not found.");
      return;
    }

    const customAlertMessage = alertElement.querySelector(
      language === "eng" ?
        "#customAlertMessage__eng"
      : "#customAlertMessage__geo"
    );
    const customAlertMessageRestriction = alertElement.querySelector(
      language === "eng" ?
        "#customAlertMessage__Restriction__eng"
      : "#customAlertMessage__Restriction__geo"
    );

    if (!customAlertMessage || !customAlertMessageRestriction) {
      console.error("Custom alert messages not found.");
      return;
    }

    customAlertMessage.textContent = "";
    customAlertMessageRestriction.textContent = "";

    if (type === "add") {
      customAlertMessage.textContent =
        language === "eng" ? "Item added to cart!" : "ნივთი დაემატა კალათში";
    } else if (type === "restriction") {
      customAlertMessageRestriction.textContent =
        language === "eng" ?
          "You cannot add more than 3 items!"
        : "3 ნივთზე მეტს ვერ დაამატებთ!";
    }

    alertElement.classList.add("show");

    const closeAlertButton = alertElement.querySelector(
      language === "eng" ? "#closeAlert__eng" : "#closeAlert__geo"
    );
    if (closeAlertButton) {
      closeAlertButton.addEventListener("click", () => {
        alertElement.classList.remove("show");
      });
    }
  };

  buyButton.addEventListener("click", () => {
    if (cartCount < 3) {
      addItemToCart();
      showAlert("add");
    } else {
      showAlert("restriction");
    }
  });

  const addItemToCart = () => {
    cartCount++;
    totalPrice += itemPrice;
    updateCart();

    const itemImageElement = document.querySelector(".img_slider__img");
    if (!itemImageElement) {
      console.error("Item image not found.");
      return;
    }

    const itemImageSrc = itemImageElement.getAttribute("src");

    const itemContainer = document.createElement("div");
    itemContainer.className = "cart-item-container";

    itemContainer.innerHTML = `
      <div class="cart-item">
        <img class="item-image" src="${itemImageSrc}" alt="Item Image">
        <div class="item-details">
          <span class="item-name">${itemName}</span>
          <span class="item-number">${itemNumber}</span>
        </div>
        <span class="item-price" data-price="${itemPrice}">${itemPrice} <span class="table__price__lari">&#x20BE;</span></span>
        <button class="delete-item">x</button>
      </div>
      <hr class="cart-divider">
    `;

    cartItemsContainer.appendChild(itemContainer);

    itemContainer
      .querySelector(".delete-item")
      .addEventListener("click", () => {
        cartItemsContainer.removeChild(itemContainer);
        cartCount--;
        totalPrice -= itemPrice;
        updateCart();
      });
  };

  const updateCart = () => {
    cartCountElement.textContent = cartCount;
    totalPriceElement.textContent = `Total: ${totalPrice.toFixed(1)}`;

    if (cartCount === 0) {
      orderButton.style.display = "none";
      initialTotalElement.style.display = "block"; // საწყისი ტოტალის ჩვენება
      totalAndLariElement.style.display = "none"; // ნამდვილი ტოტალის დამალვა
    } else {
      orderButton.style.display = "block";
      initialTotalElement.style.display = "none"; // საწყისი ტოტალის დამალვა
      totalAndLariElement.style.display = "flex"; // ნამდვილი ტოტალის ჩვენება
    }

    totalPriceElement.style.fontWeight = "bold";
    totalPriceElement.style.fontSize = "20px";
  };

  // როდესაც გვერდი იტვირთება, ვამოწმებთ კალათის სტატუსს
  if (cartItemsContainer.children.length === 0) {
    initialTotalElement.style.display = "block";
    totalAndLariElement.style.display = "none";
  } else {
    initialTotalElement.style.display = "none";
    totalAndLariElement.style.display = "flex";
  }

  window.addEventListener("click", (event) => {
    const popupContainer = document.getElementById("shoppingPopupContainer");
    if (popupContainer && event.target === popupContainer) {
      popupContainer.style.display = "none";
    }
  });
});

// ************ორდერის კოდი***************

var orderButton = document.getElementById("orderButton");
var orderContainer = document.getElementById("orderContainer");
var confirmationMessage = document.getElementById("confirmationMessage");
var popupContainer = document.getElementById("shoppingPopupContainer");

// Add click event listener to the order button
orderButton.addEventListener("click", function () {
  // Show the order container when the button is clicked
  orderContainer.style.display = "block";
  // Hide the popup-container
  popupContainer.style.display = "none";
});

// Handle form submission
document
  .getElementById("orderForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    // Show the confirmation message
    confirmationMessage.style.display = "block";
    // Hide the order container after submission
    orderContainer.style.display = "none";
  });
var closeOrderButton = document.getElementById("closeOrderContainer");
var orderContainer = document.getElementById("orderContainer");

closeOrderButton.addEventListener("click", function () {
  orderContainer.style.display = "none";
});

// *****************telegramis kodi*****************

// *************sHEKVEtIS GAGZAVNIS KODI************

// ***********************ფოტოს ზუმის კოდი**********************

// Get the modal
document.addEventListener("DOMContentLoaded", function () {
  var modal = document.getElementById("imageModal");
  var img = document.getElementsByClassName("img_slider__img");
  var modalImgs = document.getElementsByClassName("modal-content");
  var currentModalIndex = 0;

  // Open modal and show the corresponding image
  for (let i = 0; i < img.length; i++) {
    img[i].onclick = function () {
      modal.style.display = "block";
      showModalImage(i);
    };
  }

  // Close the modal
  var span = document.getElementsByClassName("close")[0];
  span.onclick = function () {
    modal.style.display = "none";
  };

  // Close modal when clicking outside of the image
  modal.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };

  // Show the current image in the modal
  function showModalImage(index) {
    for (let i = 0; i < modalImgs.length; i++) {
      modalImgs[i].style.display = "none";
    }
    modalImgs[index].style.display = "block";
    currentModalIndex = index;
  }

  // Function to navigate modal images
  function slideModalImage(direction) {
    currentModalIndex += direction;
    if (currentModalIndex < 0) {
      currentModalIndex = modalImgs.length - 1;
    } else if (currentModalIndex >= modalImgs.length) {
      currentModalIndex = 0;
    }
    showModalImage(currentModalIndex);
  }

  // Function to navigate main slider images (optional, for consistency)
  function slideImage(direction) {
    // Implement the main slider functionality here if needed
  }

  // Event listeners for modal navigation arrows
  document.querySelector(".modal .left-arrow").onclick = function () {
    slideModalImage(-1);
  };

  document.querySelector(".modal .right-arrow").onclick = function () {
    slideModalImage(1);
  };
});

// ******აიკონის დარეკვის კოდი****
// English section
function showPhoneNumberEn(event) {
  event.preventDefault();
  const popup = document.getElementById("phone-popup-en");

  // Show phone number
  popup.classList.add("show");

  // Hide after 10 seconds
  setTimeout(() => {
    popup.classList.remove("show");
  }, 6000);
}

// Georgian section
function showPhoneNumberGe(event) {
  event.preventDefault();
  const popup = document.getElementById("phone-popup-ge");

  // Show phone number
  popup.classList.add("show");

  // Hide after 10 seconds
  setTimeout(() => {
    popup.classList.remove("show");
  }, 6000);
}

// **********რესპონსივი დარეკვის ღილაკის*******
function handlePhoneClick(event) {
  event.preventDefault();

  const screenWidth = window.innerWidth;

  if (screenWidth >= 320 && screenWidth <= 800) {
    window.location.href = "tel:+995598105125"; // პირდაპირ დარეკვაზე გადავიდა
  } else {
    const popup = document.getElementById("phone-popup-ge");
    popup.classList.add("show");

    setTimeout(() => {
      popup.classList.remove("show");
    }, 6000);

    // დამატებით: ერთი კლიკით გადადის დარეკვის ფუნქციაში
    window.location.href = "tel:+995598105125"; // ეს ორი ხაზი ასევე უზრუნველყოფს, რომ კლიკი დარეკვის ზონაში გადაგიყვანოს
  }
}
