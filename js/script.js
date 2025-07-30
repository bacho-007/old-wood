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
  var georgianDescription = document.getElementById("georgianDescription");
  var englishDescription = document.getElementById("englishDescription");

  // ორდერის სისტემის ენის მართვა
  function updateOrderLanguage(language) {
    // ეს ფუნქციის კოდი ამოვშლით, რადგან არღარ გვჭირდება ცალკეული ღილაკები
  }

  function toggleMenuItems(language) {
    if (language === "eng") {
      englishMenuItems.forEach(item => item.style.display = "block");
      georgianMenuItems.forEach(item => item.style.display = "none");
      georgianText.style.display = "none";
      englishText.style.display = "block";
      toggleDescription("eng");
    } else if (language === "geo") {
      englishMenuItems.forEach(item => item.style.display = "none");
      georgianMenuItems.forEach(item => item.style.display = "block");
      georgianText.style.display = "block";
      englishText.style.display = "none";
      toggleDescription("geo");
    }
  }

  function toggleDescription(language) {
    var georgianSpecs = document.querySelector(".item-specs");
    var englishSpecs = document.querySelector(".item-specs-eng");

    if (language === "eng") {
      georgianDescription.style.display = "none";
      englishDescription.style.display = "block";
      georgianSpecs.style.display = "none";
      englishSpecs.style.display = "block";
    } else {
      georgianDescription.style.display = "block";
      englishDescription.style.display = "none";
      georgianSpecs.style.display = "block";
      englishSpecs.style.display = "none";
    }
  }

  georgianFlag.style.opacity = "0.3";

  flagLink.addEventListener("click", function (event) {
    event.preventDefault();
    checkbox.checked = false;
    flagLink.style.opacity = "1";
    georgianFlag.style.opacity = "0.3";
    slider.dataset.text = "eng";
    toggleMenuItems("eng");
  });

  georgianFlag.addEventListener("click", function (event) {
    event.preventDefault();
    checkbox.checked = true;
    flagLink.style.opacity = "0.3";
    georgianFlag.style.opacity = "1";
    slider.dataset.text = "geo";
    toggleMenuItems("geo");
  });

  slider.addEventListener("click", function () {
    checkbox.checked = !checkbox.checked;
    var language = checkbox.checked ? "geo" : "eng";
    slider.dataset.text = language;
    toggleMenuItems(language);
  });

  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      georgianFlag.click();
    } else {
      flagLink.click();
    }
  });

  toggleMenuItems("eng");
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

// ************ორდერის კოდი - განახლებული ბილინგვური ვერსია - Telegram ბოტით***************

// Telegram Bot კონფიგურაცია
const TELEGRAM_CONFIG = {
  BOT_TOKEN: '8246826133:AAGBqGPjAi5aSG5ihQOfAKIb_5MUPOggs2k', // შენი ბოტის ტოკენი
  CHAT_ID: '6463341442' // შენი Telegram ID
};

// Telegram-ზე შეტყობინების გაგზავნის ფუნქცია
async function sendToTelegram(orderData, language) {
  const cartItems = getCartItems(); // კალათის ინფორმაციის მიღება

  // შეტყობინების ტექსტის შექმნა
  let message = language === 'geo' ?
    `🛒 *ახალი შეკვეთა!*\n\n` :
    `🛒 *New Order!*\n\n`;

  message += language === 'geo' ?
    `👤 *სახელი:* ${orderData.name}\n📞 *ტელეფონი:* ${orderData.phone}\n📍 *მისამართი:* ${orderData.address}\n\n` :
    `👤 *Name:* ${orderData.name}\n📞 *Phone:* ${orderData.phone}\n📍 *Address:* ${orderData.address}\n\n`;

  // კალათის ნივთების დამატება
  if (cartItems.length > 0) {
    message += language === 'geo' ? `📦 *შეკვეთილი ნივთები:*\n` : `📦 *Ordered Items:*\n`;
    cartItems.forEach((item, index) => {
      message += `${index + 1}. ${item.name}\n   ${language === 'geo' ? 'კოდი' : 'Code'}: ${item.number}\n   ${language === 'geo' ? 'ფასი' : 'Price'}: ${item.price}₾\n\n`;
    });

    const totalPrice = cartItems.reduce((sum, item) => sum + parseFloat(item.price), 0);
    message += language === 'geo' ?
      `💰 *სრული ღირებულება:* ${totalPrice.toFixed(1)}₾` :
      `💰 *Total Amount:* ${totalPrice.toFixed(1)}₾`;
  }

  try {
    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_CONFIG.BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CONFIG.CHAT_ID,
        text: message,
        parse_mode: 'Markdown'
      })
    });

    if (response.ok) {
      return { success: true };
    } else {
      const errorData = await response.json();
      console.error('Telegram API Error:', errorData);
      return { success: false, error: errorData };
    }
  } catch (error) {
    console.error('Network Error:', error);
    return { success: false, error: error.message };
  }
}

// კალათის ნივთების მიღების ფუნქცია
function getCartItems() {
  const cartItemsContainer = document.getElementById("cartItems");
  const items = [];

  if (cartItemsContainer) {
    const cartItemElements = cartItemsContainer.querySelectorAll('.cart-item');
    cartItemElements.forEach(item => {
      const name = item.querySelector('.item-name')?.textContent || '';
      const number = item.querySelector('.item-number')?.textContent || '';
      const priceElement = item.querySelector('.item-price');
      const price = priceElement?.getAttribute('data-price') || '0';

      items.push({ name, number, price });
    });
  }

  return items;
}

// DOM load event
document.addEventListener('DOMContentLoaded', function () {
  console.log("DOM loaded"); // Debug log

  // მთავარი ორდერის ღილაკი (კალათიდან)
  const orderButton = document.getElementById("orderButton");

  // ორდერის კონტეინერები
  const orderContainerGeo = document.getElementById("orderContainerGeo");
  const orderContainerEng = document.getElementById("orderContainerEng");

  // დახურვის ღილაკები
  const closeOrderContainerGeo = document.getElementById("closeOrderContainerGeo");
  const closeOrderContainerEng = document.getElementById("closeOrderContainerEng");

  // ფორმები
  const orderFormGeo = document.getElementById("orderFormGeo");
  const orderFormEng = document.getElementById("orderFormEng");

  // წარდგენის ღილაკები
  const submitButtonGeo = document.getElementById("submitButtonGeo");
  const submitButtonEng = document.getElementById("submitButtonEng");

  // ენის განსაზღვრის ფუნქცია
  const getCurrentLanguage = () => {
    const slider = document.getElementById("slider");
    return slider ? slider.dataset.text || "eng" : "eng";
  };

  // მთავარი ორდერის ღილაკის event listener
  if (orderButton) {
    orderButton.addEventListener("click", function () {
      const currentLanguage = getCurrentLanguage();

      // Shopping popup-ის დამალვა
      const popupContainer = document.getElementById("shoppingPopupContainer");
      if (popupContainer) popupContainer.style.display = "none";

      // ენის მიხედვით შესაბამისი კონტეინერის ჩვენება
      if (currentLanguage === "geo") {
        if (orderContainerGeo) {
          orderContainerGeo.style.display = "flex";
        }
        if (orderContainerEng) {
          orderContainerEng.style.display = "none";
        }
      } else {
        if (orderContainerEng) {
          orderContainerEng.style.display = "flex";
        }
        if (orderContainerGeo) {
          orderContainerGeo.style.display = "none";
        }
      }
    });
  }

  // ქართული კონტეინერის დახურვა
  if (closeOrderContainerGeo && orderContainerGeo) {
    closeOrderContainerGeo.addEventListener("click", function () {
      orderContainerGeo.style.animation = 'fadeOut 0.3s ease-in-out';
      setTimeout(() => {
        orderContainerGeo.style.display = 'none';
        orderContainerGeo.style.animation = ''; // animation reset
      }, 300);
    });
  }

  // ინგლისური კონტეინერის დახურვა
  if (closeOrderContainerEng && orderContainerEng) {
    closeOrderContainerEng.addEventListener("click", function () {
      orderContainerEng.style.animation = 'fadeOut 0.3s ease-in-out';
      setTimeout(() => {
        orderContainerEng.style.display = 'none';
        orderContainerEng.style.animation = ''; // animation reset
      }, 300);
    });
  }

  // ქართული ფორმის submission
  if (orderFormGeo && submitButtonGeo) {
    orderFormGeo.addEventListener('submit', async function (e) {
      e.preventDefault();

      // ფორმის მონაცემების წაკითხვა
      const orderData = {
        name: document.getElementById('firstNameGeo').value.trim(),
        phone: document.getElementById('phoneNumberGeo').value.trim(),
        address: document.getElementById('addressGeo').value.trim()
      };

      // ვალიდაცია
      if (!orderData.name || !orderData.phone || !orderData.address) {
        alert('გთხოვთ შეავსოთ ყველა ველი!');
        return;
      }

      // ღილაკის შეცვლა loading სტატუსზე
      submitButtonGeo.innerHTML = '⏳ გაგზავნა...';
      submitButtonGeo.disabled = true;

      try {
        // Telegram-ზე გაგზავნა
        const result = await sendToTelegram(orderData, 'geo');

        if (result.success) {
          const container = orderContainerGeo.querySelector('.order-container');
          container.classList.add('success-animation');

          submitButtonGeo.innerHTML = '✅ შეკვეთა გაგზავნილია!';
          submitButtonGeo.style.background = 'linear-gradient(135deg, #2ed573, #17c0eb)';

          setTimeout(() => {
            submitButtonGeo.innerHTML = '✨ შეკვეთის გაგზავნა';
            submitButtonGeo.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            submitButtonGeo.disabled = false;
            container.classList.remove('success-animation');
            orderFormGeo.reset();
            orderContainerGeo.style.display = 'none';

            // კალათის გაცარიელება
            clearCart();
          }, 2000);
        } else {
          throw new Error(result.error);
        }
      } catch (error) {
        console.error('Error sending order:', error);
        alert('შეცდომა: ვერ გაიგზავნა შეკვეთა. გთხოვთ სცადოთ ხელახლა.');

        submitButtonGeo.innerHTML = '✨ შეკვეთის გაგზავნა';
        submitButtonGeo.disabled = false;
      }
    });
  }

  // ინგლისური ფორმის submission
  if (orderFormEng && submitButtonEng) {
    orderFormEng.addEventListener('submit', async function (e) {
      e.preventDefault();

      // ფორმის მონაცემების წაკითხვა
      const orderData = {
        name: document.getElementById('firstNameEng').value.trim(),
        phone: document.getElementById('phoneNumberEng').value.trim(),
        address: document.getElementById('addressEng').value.trim()
      };

      // ვალიდაცია
      if (!orderData.name || !orderData.phone || !orderData.address) {
        alert('Please fill out all fields!');
        return;
      }

      // ღილაკის შეცვლა loading სტატუსზე
      submitButtonEng.innerHTML = '⏳ Sending...';
      submitButtonEng.disabled = true;

      try {
        // Telegram-ზე გაგზავნა
        const result = await sendToTelegram(orderData, 'eng');

        if (result.success) {
          const container = orderContainerEng.querySelector('.order-container');
          container.classList.add('success-animation');

          submitButtonEng.innerHTML = '✅ Order Submitted!';
          submitButtonEng.style.background = 'linear-gradient(135deg, #2ed573, #17c0eb)';

          setTimeout(() => {
            submitButtonEng.innerHTML = '✨ Submit Order';
            submitButtonEng.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            submitButtonEng.disabled = false;
            container.classList.remove('success-animation');
            orderFormEng.reset();
            orderContainerEng.style.display = 'none';

            // კალათის გაცარიელება
            clearCart();
          }, 2000);
        } else {
          throw new Error(result.error);
        }
      } catch (error) {
        console.error('Error sending order:', error);
        alert('Error: Could not submit order. Please try again.');

        submitButtonEng.innerHTML = '✨ Submit Order';
        submitButtonEng.disabled = false;
      }
    });
  }

  // Backdrop კლიკი - ორივე კონტეინერისთვის
  if (orderContainerGeo) {
    orderContainerGeo.addEventListener('click', function (e) {
      if (e.target === this) {
        closeOrderContainerGeo.click();
      }
    });
  }

  if (orderContainerEng) {
    orderContainerEng.addEventListener('click', function (e) {
      if (e.target === this) {
        closeOrderContainerEng.click();
      }
    });
  }
});

// კალათის გაცარიელების ფუნქცია (შეკვეთის შემდეგ)
function clearCart() {
  const cartItemsContainer = document.getElementById("cartItems");
  const cartCountElement = document.getElementById("cartCount");
  const totalPriceElement = document.getElementById("totalPrice");
  const orderButton = document.getElementById("orderButton");
  const initialTotalElement = document.getElementById("initialTotal");
  const totalAndLariElement = document.getElementById("totalAndLari");

  if (cartItemsContainer) {
    cartItemsContainer.innerHTML = '';
  }

  if (cartCountElement) {
    cartCountElement.textContent = '0';
  }

  if (totalPriceElement) {
    totalPriceElement.textContent = 'Total: 0.0';
  }

  if (orderButton) {
    orderButton.style.display = "none";
  }

  if (initialTotalElement) {
    initialTotalElement.style.display = "block";
  }

  if (totalAndLariElement) {
    totalAndLariElement.style.display = "none";
  }
}

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

