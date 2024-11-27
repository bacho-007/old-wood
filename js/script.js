window.addEventListener("scroll", function () {
    let header = document.querySelector(".header");
    header.classList.toggle("sticky", window.scrollY > 0);
});
// ************ ენის შეცვლის ფუნქცია************
document.addEventListener("DOMContentLoaded", function () {
    var flagLink = document.getElementById("flagLink");
    var georgianFlag = document.getElementById("georgianFlag");
    var checkbox = document.getElementById("languageCheckbox");
    var slider = document.getElementById("slider");
    var englishMenuItems = document.querySelectorAll('.menu__link');
    var georgianMenuItems = document.querySelectorAll('.menu__link2');

    function toggleMenuItems(language) {
        if (language === 'eng') {
            englishMenuItems.forEach(function (item) {
                item.style.display = 'block';
            });
            georgianMenuItems.forEach(function (item) {
                item.style.display = 'none';
            });
        } else if (language === 'geo') {
            englishMenuItems.forEach(function (item) {
                item.style.display = 'none';
            });
            georgianMenuItems.forEach(function (item) {
                item.style.display = 'block';
            });
        }
    }

    // Set initial state: only English flag is lit up
    georgianFlag.style.opacity = "0.3"; // Set Georgian flag to off initially

    flagLink.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default link behavior
        checkbox.checked = false; // Uncheck the checkbox
        flagLink.style.opacity = "1";
        georgianFlag.style.opacity = "0.3"; // Reduce opacity of Georgian flag
        slider.dataset.text = "eng"; // Set text to "eng"
        toggleMenuItems('eng'); // Show English menu items
        updateBallPosition();
    });

    georgianFlag.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default link behavior
        checkbox.checked = true; // Check the checkbox
        flagLink.style.opacity = "0.3"; // Reduce opacity of American flag
        georgianFlag.style.opacity = "1";
        slider.dataset.text = "geo"; // Set text to "geo"
        toggleMenuItems('geo'); // Show Georgian menu items
        updateBallPosition();
    });

    slider.addEventListener("click", function (event) {
        checkbox.checked = !checkbox.checked; // Toggle checkbox state
        slider.dataset.text = checkbox.checked ? "geo" : "eng"; // Set text accordingly
        toggleMenuItems(checkbox.checked ? 'geo' : 'eng'); // Show menu items based on language
        updateBallPosition();
    });

    checkbox.addEventListener("change", function (event) {
        if (checkbox.checked) {
            georgianFlag.click(); // Simulate click on Georgian flag
        } else {
            flagLink.click(); // Simulate click on American flag
        }
    });

    toggleMenuItems('eng'); // Initialize menu items to show English by default
});

// **********about da contact cliki**************

document.addEventListener("DOMContentLoaded", function () {
    const aboutLink = document.getElementById("aboutLink");
    const aboutLink2 = document.getElementById("aboutLink2");
    const contactLink = document.getElementById("contactLink");
    const contactLink2 = document.getElementById("contactLink2");
    const closeButton = document.getElementById("closeButton");
    const closeButtonGe = document.getElementById("closeButtonGe");
    const closeContactButton = document.getElementById("closeContactButton");
    const closeContactButtonGe = document.getElementById("closeContactButtonGe");
    const aboutContent = document.getElementById("aboutContent");
    const aboutContentGe = document.getElementById("aboutContentGe");
    const contactContent = document.getElementById("contactContent");
    const contactContentGe = document.getElementById("contactContentGe");

    aboutLink.addEventListener("click", function (event) {
        event.preventDefault();
        aboutContent.style.display = "flex";
        aboutContentGe.style.display = "none";
        contactContent.style.display = "none";
        contactContentGe.style.display = "none";
    });

    aboutLink2.addEventListener("click", function (event) {
        event.preventDefault();
        aboutContentGe.style.display = "flex";
        aboutContent.style.display = "none";
        contactContent.style.display = "none";
        contactContentGe.style.display = "none";
    });

    contactLink.addEventListener("click", function (event) {
        event.preventDefault();
        contactContent.style.display = "flex";
        contactContentGe.style.display = "none";
        aboutContent.style.display = "none";
        aboutContentGe.style.display = "none";
    });

    contactLink2.addEventListener("click", function (event) {
        event.preventDefault();
        contactContentGe.style.display = "flex";
        contactContent.style.display = "none";
        aboutContent.style.display = "none";
        aboutContentGe.style.display = "none";
    });

    closeButton.addEventListener("click", function () {
        aboutContent.style.display = "none";
    });

    closeButtonGe.addEventListener("click", function () {
        aboutContentGe.style.display = "none";
    });

    closeContactButton.addEventListener("click", function () {
        contactContent.style.display = "none";
    });

    closeContactButtonGe.addEventListener("click", function () {
        contactContentGe.style.display = "none";
    });
});
// ************იმგ სლაიდერ*******************
// JavaScript for slider functionality
// JavaScript for slider functionality
const sliderImages = document.querySelectorAll('.img_slider__img');
const arrowLeft = document.querySelector('.left-arrow');
const arrowRight = document.querySelector('.right-arrow');
const dotsContainer = document.querySelector('.dots-container');
let currentImageIndex = 0;

// Function to show the current image
function showImage(index) {
    sliderImages.forEach((image, i) => {
        if (i === index) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });

    // Highlight the corresponding dot
    const dots = dotsContainer.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Create dots based on the number of images
sliderImages.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dot.addEventListener('click', () => {
        showImage(i);
    });
    dotsContainer.appendChild(dot);
});

// Initial image display
showImage(currentImageIndex);

// Event listener for left arrow click
arrowLeft.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex === 0) ? sliderImages.length - 1 : currentImageIndex - 1;
    showImage(currentImageIndex);
});

// Event listener for right arrow click
arrowRight.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex === sliderImages.length - 1) ? 0 : currentImageIndex + 1;
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
document.addEventListener('DOMContentLoaded', function () {
    let cartCount = 0;
    let totalPrice = 0;
    const itemPrice = parseFloat(document.querySelector('.table__price').getAttribute('data-price'));
    const itemName = document.querySelector('.item-name__title').textContent.trim();
    const itemNumber = document.querySelector('.table__namber').textContent.trim();
    const cartCountElement = document.getElementById('cartCount');
    const totalPriceElement = document.getElementById('totalPrice');
    const buyButton = document.getElementById('buyButton');
    const cartItemsContainer = document.getElementById('cartItems');
    const orderButton = document.getElementById('orderButton');
    const totalAndLariElement = document.getElementById('totalAndLari');

    buyButton.addEventListener('click', function () {
        if (cartCount < 4) {
            addItemToCart();
            alert('Item added to cart!');
        } else {
            alert('You cannot buy more than 4 items per purchase.');
        }
    });

    function addItemToCart() {
        cartCount++;
        totalPrice += itemPrice;
        updateCart();

        const item = document.createElement('div');
        item.className = 'cart-item';
        item.innerHTML = `
            <img class="item-image" src="${document.querySelector('.img_slider__img').getAttribute('src')}" alt="Item Image">
            <div class="item-details">
                <span class="item-name">${itemName}</span>
                <span class="item-number">${itemNumber}</span>
            </div>
            <span class="item-price" data-price="${itemPrice}">${itemPrice} <span class="table__price__lari">&#x20BE;</span></span>
            <button class="delete-item">x</button>
        `;

        const itemContainer = document.createElement('div');
        itemContainer.className = 'cart-item-container';
        itemContainer.appendChild(item);

        // Append hr element after the item
        const hr = document.createElement('hr');
        hr.className = 'cart-divider';
        itemContainer.appendChild(hr);

        cartItemsContainer.appendChild(itemContainer);

        item.querySelector('.delete-item').addEventListener('click', function () {
            cartItemsContainer.removeChild(itemContainer);
            cartCount--;
            totalPrice -= itemPrice;
            updateCart();
        });
    }

    function updateCart() {
        cartCountElement.textContent = cartCount;
        totalPriceElement.textContent = `Total: ${totalPrice.toFixed(1)}`;

        if (cartCount === 0) {
            orderButton.style.display = 'none';
            totalAndLariElement.classList.remove('total__and__lari_with_item');
        } else {
            orderButton.style.display = 'block';
            totalAndLariElement.classList.add('total__and__lari_with_item');
        }

        // Apply other styles if needed
        totalPriceElement.style.fontWeight = 'bold';
        totalPriceElement.style.fontSize = '20px';
    }



    document.getElementById('closeShoppingPopup').addEventListener('click', function () {
        document.getElementById('shoppingPopupContainer').style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        var popupContainer = document.getElementById('shoppingPopupContainer');
        if (event.target == popupContainer) {
            popupContainer.style.display = 'none';
        }
    });
});

// ************ორდერის კოდი***************

var orderButton = document.getElementById('orderButton');
var orderContainer = document.getElementById('orderContainer');
var confirmationMessage = document.getElementById('confirmationMessage');
var popupContainer = document.getElementById('shoppingPopupContainer');

// Add click event listener to the order button
orderButton.addEventListener('click', function () {
    // Show the order container when the button is clicked
    orderContainer.style.display = 'block';
    // Hide the popup-container
    popupContainer.style.display = 'none';
});

// Handle form submission
document.getElementById('orderForm').addEventListener('submit', function (event) {
    event.preventDefault();
    // Show the confirmation message
    confirmationMessage.style.display = 'block';
    // Hide the order container after submission
    orderContainer.style.display = 'none';
});
var closeOrderButton = document.getElementById('closeOrderContainer');
var orderContainer = document.getElementById('orderContainer');

closeOrderButton.addEventListener('click', function () {
    orderContainer.style.display = 'none';
});

// *****************telegramis kodi*****************






// *************sHEKVEtIS GAGZAVNIS KODI************



// ***********************ფოტოს ზუმის კოდი**********************

// Get the modal
document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById("imageModal");
    var img = document.getElementsByClassName("img_slider__img");
    var modalImgs = document.getElementsByClassName("modal-content");
    var currentModalIndex = 0;

    // Open modal and show the corresponding image
    for (let i = 0; i < img.length; i++) {
        img[i].onclick = function () {
            modal.style.display = "block";
            showModalImage(i);
        }
    }

    // Close the modal
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function () {
        modal.style.display = "none";
    }

    // Close modal when clicking outside of the image
    modal.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }

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
    document.querySelector('.modal .left-arrow').onclick = function () {
        slideModalImage(-1);
    };

    document.querySelector('.modal .right-arrow').onclick = function () {
        slideModalImage(1);
    };
});

// ******ბურგერ მენიუს კოდი****




