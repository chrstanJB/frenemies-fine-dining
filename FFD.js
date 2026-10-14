/* =========================================
   LOGIN PROTECTION
========================================= */
const currentPage =
    window.location.pathname.split("/").pop();
    const protectedPages = [
    "CartFFD.html",
    "CheckoutFFD.html",
    "PaymentFFD.html",
    "ConfirmFFD.html",
    "AccountFFD.html"
    ];
    /* CURRENT USER */
    const currentUser =
        JSON.parse(localStorage.getItem("ffdCurrentUser"));
    /* =========================================
   GLOBAL CART COUNT VISIBILITY RULE
    ========================================= */
    const cartCount = document.getElementById("cartCount");
    if (!currentUser && cartCount) {
        cartCount.textContent = "";
        cartCount.style.display = "none";
    }
    if (protectedPages.includes(currentPage) && !currentUser) {
        window.location.replace("LoginFFD.html?reason=cart");
    }
    const params = new URLSearchParams(window.location.search);
    if (
    currentPage === "LoginFFD.html" &&
    params.get("reason") === "cart"
    ) {
    alert("Please log in to access your cart.");
    }
/*SHOP JS*/
const filterButtons = document.querySelectorAll(".filter-btn");
const menuCards = document.querySelectorAll(".menu-card");
let activeFilter = "all";
/* DEFAULT ACTIVE BUTTON */
const allFilterBtn =
    document.querySelector('[data-filter="all"]');
if(allFilterBtn){
    allFilterBtn.classList.add("active");
}
/* FILTER FUNCTION */
function filterItems(filter){
    menuCards.forEach(card => {
        if(filter === "all"){
            card.style.display = "block";
        }
        else if(card.dataset.category === filter){
            card.style.display = "block";
        }
        else {
            card.style.display = "none";
        }
    });
}
/* BUTTON EVENTS */
filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const selectedFilter = button.dataset.filter;
        /* CLICKING ACTIVE FILTER */
        if(selectedFilter === activeFilter){
            /* KEEP ALL ACTIVE */
            if(selectedFilter === "all"){
                filterItems("all");
                return;
            }

            /* RETURN TO ALL */
            activeFilter = "all";
        }
        else {
            activeFilter = selectedFilter;
        }
        /* UPDATE ACTIVE BUTTON */
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });
        document
            .querySelector(`[data-filter="${activeFilter}"]`)
            .classList.add("active");
        /* APPLY FILTER */
        filterItems(activeFilter);
    });
});
/* INITIAL LOAD */
if(menuCards.length > 0){
    filterItems("all");
}
/*HOME JS */
const products = [
    /* CAT */
    {
        category: "CAT'S SIDE",
        name: "Whiskas - Chicken in Jelly",
        price: "₱645",
        image: "cat food1.png"
    },
    {
        category: "CAT'S SIDE",
        name: "Meow Mix - Original Choice",
        price: "₱630",
        image: "cat food2.png"
    },
    {
        category: "CAT'S SIDE",
        name: "ACANA - Market Medley Indoor Cat (Chicken, Trout & Salmon)",
        price: "₱680",
        image: "cat food3.png"
    },
    {
        category: "CAT'S SIDE",
        name: "Goodest - Chicken Chomp Wet Cat Food",
        price: "₱625",
        image: "cat food4.png"
    },
    {
        category: "CAT'S SIDE",
        name: "Petsup - Complete Nutrition Dry Cat Food (Salmon Flavor)",
        price: "₱635",
        image: "cat food5.png"
    },
    {
        category: "CAT'S SIDE",
        name: "Special Cat (Monge) - Chicken & Turkey",
        price: "₱650",
        image: "cat food6.png"  
    },
    {
        category: "CAT'S SIDE",
        name: "Goodest - Tasty Tuna Dry Cat Food",
        price: "₱620",
        image: "cat food7.png"
    },
    {
        category: "CAT'S SIDE",
        name: "Purr-fect Bisque",
        price: "₱680",
        image: "cat food8.png"
    },
    {
        category: "CAT'S SIDE",
        name: "Meow Minestrone",
        price: "₱620",
        image: "cat food9.png"
    },
    {
        category: "CAT'S SIDE",
        name: "Kitty Carbonara",
        price: "₱660",
        image: "cat food10.png"
    },
    /* DOG */
    {
        category: "DOG'S SIDE",
        name: "Bark & Braise",
        price: "₱680",
        image: "dog food1.png"
    },
    {
        category: "DOG'S SIDE",
        name: "Vitality Classic - Lamb & Beef",
        price: "₱635",
        image: "dog food2.png"
    },
    {
        category: "DOG'S SIDE",
        name: "Vitality ValueMeal - Puppy (Premium Lamb & Beef)",
        price: "₱625",
        image: "dog food3.png"  
    },
    {
        category: "DOG'S SIDE",
        name: "Royal Canin - Hypoallergenic Small Dogs (Veterinary Diet)",
        price: "₱680",
        image: "dog food4.png"
    },
    {
        category: "DOG'S SIDE",
        name: "Special Dog - Lamb & Rice",
        price: "₱645",
        image: "dog food5.png"
    },
    {
        category: "DOG'S SIDE",
        name: "Brit",
        price: "₱630",
        image: "dog food6.png"
    },
    {
        category: "DOG'S SIDE",
        name: "Barf Boosters - Good Gut (Gut Health Supplement)",
        price: "₱660",
        image: "dog food7.png"
    },
    {
        category: "DOG'S SIDE",
        name: "Pedigree Puppy Chicken & Milk",
        price: "₱620",
        image: "dog food8.png"
    },
    {
        category: "DOG'S SIDE",
        name: "Purina Beautiful Healthy Puppy",
        price: "₱650",
        image: "dog food9.png"
    },
    {
        category: "DOG'S SIDE",
        name: "Pedigree Biscrok Multi Mix bone-shaped dog treats",
        price: "₱628",
        image: "dog food10.png"
    },
    /* BUNDLES */
    {
        category: "BUNDLE",
        name: "Willow Hypoallergenic Bundle",
        price: "₱1,210",
        image: "bundle1.jpg"
    },
    {
        category: "BUNDLE",
        name: "Goodest Cat & Dog Combo",
        price: "₱1,120",
        image: "bundle2.jpg"
    },
    {
        category: "BUNDLE",
        name: "Kooky Kibble Starter Kit (Cat & Dog)",
        price: "₱1,180",
        image: "bundle3.jpg"
    },
    {
        category: "BUNDLE",
        name: "MJL Steamed Chicken Liver Treats (Cat & Dog)",
        price: "₱1,135",
        image: "bundle4.jpg"
    },
    {
        category: "BUNDLE",
        name: "Dad's All-Paws Bundle",
        price: "₱1,225",
        image: "bundle5.jpg"
    },
];
/*FOR CART SYSTEM MANAGEMENT*/
function cleanPrice(price){
    return Number(
        price.replace("₱","").replace(/,/g,"")
    );
}
function formatPrice(price){
    return `₱${price.toFixed(2)}`;
}
function formatPawCoins(value){
    return Math.floor(value);
}
function getCart(){
    if(!currentUser){
        return [];
    }
    const cartKey =
        `ffdCart_${currentUser.email}`;
    return JSON.parse(localStorage.getItem(cartKey)) || [];
}
function saveCart(cart){
    if(!currentUser){
        return;
    }
    const cartKey =
        `ffdCart_${currentUser.email}`;
    localStorage.setItem(
        cartKey,
        JSON.stringify(cart)
    );
}
/* =========================================
   CART COUNT BADGE
========================================= */
function updateCartCount(){
    const cartCount =
        document.getElementById("cartCount");
    if(!cartCount){
        return;
    }
    /*HIDE COMPLETELY IF NOT LOGGED IN */
    if(!currentUser){
        cartCount.textContent = "";
        cartCount.style.display = "none";
        return;
    }
    const cart = getCart();
    let totalItems = 0;
    cart.forEach(item => {
        totalItems += item.quantity;
    });
    /* EMPTY CART → HIDE */
    if(totalItems === 0){
        cartCount.textContent = "";
        cartCount.style.display = "none";
    }
    else{
        cartCount.textContent = totalItems;
        cartCount.style.display = "inline";
    }
}
/*(CART) CHECKOUT BUTTON VALIDATION */
function updateCheckoutButton(){
    const checkoutBtn =
        document.getElementById("checkoutBtn");
    if(!checkoutBtn){
        return;
    }
    const cart = getCart();
    if(cart.length === 0){
        /* DISABLE BUTTON */
        checkoutBtn.disabled = true;
        checkoutBtn.style.opacity = "0.5";
        checkoutBtn.style.cursor = "not-allowed";
    }
    else{
        /* ENABLE BUTTON */
        checkoutBtn.disabled = false;
        checkoutBtn.style.opacity = "1";
        checkoutBtn.style.cursor = "pointer";
    }
}
/*ADD TO CART FUNCTION*/
function addToCart(product){
    /* CHECK IF USER IS LOGGED IN */
    if(!currentUser){
        alert(
            "You need to log in into your account to add product to cart."
        );
        window.location.href = "LoginFFD.html";
        return false;
    }
    let cart = getCart();
    const existingItem = cart.find(item =>
        item.name === product.name
    );
    if(existingItem){
        existingItem.quantity += 1;
    }
    else{
        cart.push({
            ...product,
            quantity: 1
        });
    }
    cart.sort((a,b) =>
        cleanPrice(b.price) - cleanPrice(a.price)
    );
    saveCart(cart);
    updateCartCount();
    return true;
}
/* ELEMENTS FOR HOME PAGE SEARCH ITEM FEATURE */
const searchInput =
    document.getElementById("searchInput");
const suggestionsBox =
    document.getElementById("searchSuggestions");
const featuredCategory =
    document.getElementById("featuredCategory");
const featuredName =
    document.getElementById("featuredName");
const featuredPrice =
    document.getElementById("featuredPrice");
const featuredBtn =
    document.getElementById("featuredBtn");
const featuredImage =
    document.getElementById("featuredImage");
let currentFeaturedProduct = null;
/* AUTOCOMPLETE */
if(searchInput){
    searchInput.addEventListener("input", () => {
        const input =
            searchInput.value.toLowerCase();
        suggestionsBox.innerHTML = "";
        if(input === ""){
            return;
        }
        const matches = products.filter(product =>
            product.name.toLowerCase().includes(input)
        );
        matches.forEach(product => {
            const suggestion =
                document.createElement("div");
            suggestion.classList.add("suggestion-item");
            suggestion.textContent = product.name;
            suggestion.addEventListener("click", () => {
                searchInput.value = product.name;
                suggestionsBox.innerHTML = "";
            });
            suggestionsBox.appendChild(suggestion);
        });
    });
}
/*HIDE SUGGESTION WHEN CLICKING ELSEWHERE*/
document.addEventListener("click", (event) => {
    if(!event.target.closest(".search-bar")){
        suggestionsBox.innerHTML = "";
    }
});
/* ENTER SEARCH */
if(searchInput){
    searchInput.addEventListener("keypress", function(event){
        if(event.key === "Enter"){
            const userInput =
                searchInput.value.trim().toLowerCase();
            const foundProduct = products.find(product =>
                product.name.toLowerCase().includes(userInput)
            );
            /* FOUND */
            if(foundProduct){
                currentFeaturedProduct = foundProduct;
                featuredCategory.className = "default-tag";
                if(foundProduct.category === "CAT'S SIDE"){
                    featuredCategory.classList.add("cat-tag-featured");
                }
                else if(foundProduct.category === "DOG'S SIDE"){
                    featuredCategory.classList.add("dog-tag-featured");
                }
                else if(foundProduct.category === "BUNDLE"){
                    featuredCategory.classList.add("bundle-tag-featured");
                }
                featuredCategory.textContent =
                    foundProduct.category;
                featuredName.textContent =
                    foundProduct.name;
                featuredPrice.textContent =
                    foundProduct.price;
                featuredImage.src =
                    foundProduct.image;
                featuredImage.style.display =
                    "block";
                featuredBtn.style.display =
                    "inline-block";
            }
            /* NOT FOUND */
            else {
                featuredCategory.className =
                    "tag default-tag";
                featuredCategory.textContent =
                    "NO PRODUCT FOUND";
                featuredName.textContent =
                    "Try searching another meal.";
                featuredPrice.textContent = "";
                featuredBtn.style.display =
                    "none";
                featuredImage.style.display =
                    "none";
            }
        }
    });
}
/*HOME PAGE FEATURED ADD TO CART*/
if(featuredBtn){
    featuredBtn.addEventListener("click", () => {
        const added =
            addToCart(currentFeaturedProduct);

        if(added){
            alert("Item added to cart!");
        }
    });
}
/*SHOP PAGE ADD TO CART*/
const addButtons =
    document.querySelectorAll(".menu-bottom button");
addButtons.forEach(button => {
    button.addEventListener("click", () => {
        const productName =
            button.dataset.product;
        const matchedProduct =
            products.find(product =>
                product.name === productName
            );
        const added =
            addToCart(matchedProduct);
        if(added){
            alert("Item added to cart!");
        }
    });
});
/*CART PAGE LITERAL*/
const cartLeft =
    document.querySelector(".cart-left");
const summaryRows =
    document.querySelectorAll(".summary-row span:last-child");
const totalElement =
    document.querySelector(".summary-total span:last-child");
const rewardBox =
    document.querySelector(".reward-box");
function renderCart(){
    if(!cartLeft){
        return;
    }
    let cart = getCart();
    cart.sort((a,b) =>
        cleanPrice(b.price) - cleanPrice(a.price)
    );
    saveCart(cart);
const oldItems =
    document.querySelectorAll(".cart-item");
    oldItems.forEach(item => item.remove());
    let subtotal = 0;
    cart.forEach((item,index) => {
        const itemPrice =
        cleanPrice(item.price);
        subtotal += itemPrice * item.quantity;
        let bgClass = "cat-bg";

        if(item.category === "DOG'S SIDE"){
            bgClass = "dog-bg";
        }
        else if(item.category === "BUNDLE"){
            bgClass = "bundle-bg";
        }
const cartItem =
    document.createElement("div");
    cartItem.className = "cart-item";
cartItem.innerHTML = `
        <div class="cart-item-left">
            <div class="cart-item-image ${bgClass}">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-details">
                <h3>${item.name}</h3>
                <span>${item.category}</span>
                <div class="quantity-controls">
                    <button class="minus-btn" data-index="${index}">-</button>
                    <span>${item.quantity}</span>
                    <button class="plus-btn" data-index="${index}">+</button>
                </div>
            </div>
        </div>
        <div class="cart-price">
            <h2>${formatPrice(itemPrice * item.quantity)}</h2>
            <small class="remove-btn" data-index="${index}">Remove</small>
        </div>
`;
cartLeft.appendChild(cartItem);
});
const deliveryFee = subtotal * 0.05;
const total = subtotal + deliveryFee;
const rewards = subtotal * 0.10;

    if(summaryRows.length >= 2){
        summaryRows[0].textContent =
            formatPrice(subtotal);
        summaryRows[1].textContent =
            formatPrice(deliveryFee);
    }
    if(totalElement){
        totalElement.textContent =
            formatPrice(total);
    }
    if(rewardBox){
        rewardBox.innerHTML =
            `⛃ You'll earn <b>+${formatPawCoins(rewards)} Paw Coins</b> on this order!`;
    }
/* PLUS BUTTON */
document.querySelectorAll(".plus-btn")
    .forEach(button => {
        button.addEventListener("click", () => {
            const index = button.dataset.index;
            cart[index].quantity += 1;
            saveCart(cart);
            renderCart();
        });
    });
/* MINUS BUTTON */
document.querySelectorAll(".minus-btn")
    .forEach(button => {
        button.addEventListener("click", () => {
            const index = button.dataset.index;
            if(cart[index].quantity > 1){
            cart[index].quantity -= 1;
            }
            saveCart(cart);
            renderCart();
        });
    });
/* REMOVE BUTTON */
document.querySelectorAll(".remove-btn")
    .forEach(button => {
        button.addEventListener("click", () => {
            const index = button.dataset.index;
            cart.splice(index,1);
            cart.sort((a,b) =>
            cleanPrice(b.price) - cleanPrice(a.price)
            );
            saveCart(cart);
            renderCart();
        });
    });
updateCheckoutButton();
updateCartCount();
}
if(currentUser){
    renderCart();
    updateCheckoutButton();
    updateCartCount();
}

const checkoutItems =
    document.getElementById("checkoutItems");
const checkoutDelivery =
    document.getElementById("checkoutDelivery");
const checkoutTotal =
    document.getElementById("checkoutTotal");
const checkoutRewards =
    document.getElementById("checkoutRewards");
function renderCheckout(){
    if(!checkoutItems){
        return;
    }
    const cart = getCart();
    checkoutItems.innerHTML = "";
    let subtotal = 0;

    cart.forEach(item => {
        const itemTotal =
            cleanPrice(item.price) * item.quantity;
        subtotal += itemTotal;
        const checkoutItem =
            document.createElement("div");
        checkoutItem.className = "checkout-item";
        checkoutItem.innerHTML = `
            <span class="checkout-item-name">${item.name}</span>
            <span class="checkout-item-qty">×${item.quantity}</span>
            <span class="checkout-item-price">${formatPrice(itemTotal)}</span>
        `;
        checkoutItems.appendChild(checkoutItem);
    });
    const deliveryFee = subtotal * 0.05;
    const total = subtotal + deliveryFee;
    const rewards = subtotal * 0.10;
    checkoutDelivery.textContent =
        formatPrice(deliveryFee);
    checkoutTotal.textContent =
        formatPrice(total);
    if(checkoutRewards){
        checkoutRewards.innerHTML =
           `⛃ You'll earn <b>+${formatPawCoins(rewards)} Paw Coins</b> on this order!`;
    }
}
renderCheckout();
/*PAYMENT*/
const paymentMethods =
    document.querySelectorAll(".payment-method");
    paymentMethods.forEach(method => {
        method.addEventListener("click", () => {
            
            if(method.classList.contains("active-payment")){
                method.classList.remove("active-payment");
            }
            else{
                method.classList.add("active-payment");
            }
    });
});
/*VALID CONFIRM PAYMENT*/
const confirmPaymentBtn = document.getElementById("confirmPaymentBtn");
if(confirmPaymentBtn){
    confirmPaymentBtn.addEventListener("click", () => {
        const selectedPayment = document.querySelector(".payment-method.active-payment");

        if(!selectedPayment){
            alert("Please select a payment method first.");
            return;
        }
        const cart = getCart();
        let subtotal = 0;
        cart.forEach(item => {
            subtotal += cleanPrice(item.price) * item.quantity;
        });
        const deliveryFee = subtotal * 0.05;
        const total = subtotal + deliveryFee;
        const rewards = subtotal * 0.10;
        /* =========================================
            SAVE USER PAW COINS
        ========================================= */
        if(currentUser){
            const pawCoinsKey =
                `ffdPawCoins_${currentUser.email}`;
            let currentPawCoins =
            Number(localStorage.getItem(pawCoinsKey)) || 0;
            currentPawCoins += rewards;
            localStorage.setItem(
                pawCoinsKey,
                currentPawCoins
            );
        }
        /* =========================================
           USER ORDER SERIAL NUMBER
        ========================================= */
        let userOrderCount = 0;
        if(currentUser){
            const orderCountKey = `ffdOrderCount_${currentUser.email}`;
            userOrderCount =
                Number(localStorage.getItem(orderCountKey)) || 0;
            userOrderCount++;
            localStorage.setItem(
                orderCountKey,
                userOrderCount
            );
        }
        /* =========================================
           GENERATE ORDER NUMBER
        ========================================= */
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1)
            .padStart(2, "0");
        const day = String(now.getDate())
            .padStart(2, "0");
        const serialNumber = String(userOrderCount)
            .padStart(4, "0");
        const orderNumber =
            `#FD-${year}/${month}/${day}-${serialNumber}`;
        /* =========================================
           TEXTUAL DATE
        ========================================= */
        const orderDate = now.toLocaleDateString(
            "en-US",
            {
                year: "numeric",
                month: "long",
                day: "numeric"
            }
        );
        /* =========================================
           SAVE USER ORDERS
        ========================================= */
        if(currentUser){
            const userOrdersKey =
                `ffdOrders_${currentUser.email}`;
            let userOrders =
                JSON.parse(
                    localStorage.getItem(userOrdersKey)
                ) || [];

            /* OLD PROCESSING -> DELIVERED */
            userOrders.forEach(order => {
                order.status = "Delivered";
            });

            /* NEW ORDER */
            const newOrder = {
                orderNumber: orderNumber,
                orderDate: orderDate,
                status: "Processing",
                total: total,
                rewards: rewards,
                items: cart.map(item => ({
                    name: item.name,
                    quantity: item.quantity
                }))
            };
            userOrders.unshift(newOrder);
            localStorage.setItem(
                userOrdersKey,
                JSON.stringify(userOrders)
            );

            /* SAVE LAST ORDER */
            localStorage.setItem(
                "ffdLastOrder",
                JSON.stringify(newOrder)
            );

            /* CLEAR CART */
            const cartKey =
                `ffdCart_${currentUser.email}`;
            localStorage.removeItem(cartKey);
        }
        alert("Payment method confirmed!");
        window.location.href = "ConfirmFFD.html";
    });
}
/*CONFIRM ORDER PROMPT PAGE*/
const orderNumberElement =
    document.getElementById("orderNumber");
const confirmRewards =
    document.getElementById("confirmRewards");

function renderConfirmationPage(){
    if(!orderNumberElement){
        return;
    }
    const savedOrder =
        JSON.parse(
            localStorage.getItem("ffdLastOrder")
        );
    if(!savedOrder){
        orderNumberElement.textContent =
            "No recent order found.";
        return;
    }
    orderNumberElement.textContent =
        savedOrder.orderNumber;

    confirmRewards.innerHTML =
        `<b>⛃</b> You earned <b>+${formatPawCoins(savedOrder.rewards)} Paw Coins</b> on this order!`;
}
renderConfirmationPage();
/* =========================================
   ACCOUNT SYSTEM
========================================= */
function getAccounts(){
    return JSON.parse(localStorage.getItem("ffdAccounts")) || [];
}
function saveAccounts(accounts){
    localStorage.setItem(
        "ffdAccounts",
        JSON.stringify(accounts)
    );
}
/* =========================================
   SIGN UP
========================================= */
const signupForm =
    document.getElementById("signupForm");

if(signupForm){
    signupForm.addEventListener("submit", function(e){
        e.preventDefault();
        const firstName =
            document.getElementById("firstName").value.trim();
        const lastName =
            document.getElementById("lastName").value.trim();
        const address =
            document.getElementById("address").value.trim();
        const city =
            document.getElementById("city").value.trim();
        const zip =
            document.getElementById("zip").value.trim();
        const phone =
            document.getElementById("phone").value.trim();
        const email =
            document.getElementById("signupEmail")
            .value
            .trim()
            .toLowerCase();
        const password =
            document.getElementById("signupPassword").value;
        const confirmPassword =
            document.getElementById("confirmPassword").value;
        if(password !== confirmPassword){
            alert("Passwords do not match.");
            return;
        }
        let accounts = getAccounts();
        const existingAccount =
            accounts.find(account =>
        account.email === email ||
        account.phone === phone ||
        account.address.toLowerCase() ===
            address.toLowerCase() ||
                account.password === password
    );
        if(existingAccount){
            alert( "Email, phone number, address, or password already exists.");
            return;
        }
        accounts.push({
            firstName,
            lastName,
            address,
            city,
            zip,
            phone,
            email,
            password
        });
        saveAccounts(accounts);
        alert("Account created successfully!");
        window.location.href = "LoginFFD.html";
    });
}
/* =========================================
   LOGIN
========================================= */
const loginForm =
    document.getElementById("loginForm");
if(loginForm){
    loginForm.addEventListener("submit", function(e){
        e.preventDefault();
        const email =
            document.getElementById("loginEmail")
            .value
            .trim()
            .toLowerCase();
        const password =
            document.getElementById("loginPassword")
            .value;
        const accounts = getAccounts();
        const matchedAccount =
            accounts.find(account =>
                account.email === email &&
                account.password === password
            );
        if(!matchedAccount){
            alert("Invalid email or password.");
            return;
        }
        localStorage.setItem(
            "ffdCurrentUser",
            JSON.stringify(matchedAccount)
        );
        alert(
            `Welcome back, ${matchedAccount.firstName}!`
        );
        window.location.href = "FFD.html";
    });
}
/* =========================================
   FORGOT PASSWORD
========================================= */
const forgotPasswordForm =
    document.getElementById("forgotPasswordForm");
if(forgotPasswordForm){
    forgotPasswordForm.addEventListener("submit", function(e){
        e.preventDefault();
        const email =
            document.getElementById("forgotEmail")
            .value
            .trim()
            .toLowerCase();
        const newPassword =
            document.getElementById("newPassword")
            .value;
        const confirmNewPassword =
            document.getElementById("confirmNewPassword")
            .value;
        if(newPassword !== confirmNewPassword){
            alert("Passwords do not match.");
            return;
        }
        let accounts = getAccounts();
        const accountIndex =
            accounts.findIndex(account =>
                account.email === email
            );
        if(accountIndex === -1){
            alert("No account found with that email.");
            return;
        }
        accounts[accountIndex].password =
            newPassword;
        saveAccounts(accounts);
        alert("Password reset successful!");
        window.location.href = "LoginFFD.html";
    });
}
/* =========================================
   AUTOFILL CHECKOUT
========================================= */
if(currentUser){
    const firstNameInput =
        document.getElementById("checkoutFirstName");
    const lastNameInput =
        document.getElementById("checkoutLastName");
    const addressInput =
        document.getElementById("checkoutAddress");
    const cityInput =
        document.getElementById("checkoutCity");
    const zipInput =
        document.getElementById("checkoutZip");
    const phoneInput =
        document.getElementById("checkoutPhone");

    if(firstNameInput){
        firstNameInput.value =
            currentUser.firstName;
    }
    if(lastNameInput){
        lastNameInput.value =
            currentUser.lastName;
    }
    if(addressInput){
        addressInput.value =
            currentUser.address;
    }
    if(cityInput){
        cityInput.value =
            currentUser.city;
    }
    if(zipInput){
        zipInput.value =
            currentUser.zip;
    }
    if(phoneInput){
        phoneInput.value =
            currentUser.phone;
    }
}
/* =========================================
   AUTOFILL CONTACT
========================================= */
if(currentUser){
    const contactFirstName =
        document.getElementById("contactFirstName");
    const contactLastName =
        document.getElementById("contactLastName");
    const contactEmail =
        document.getElementById("contactEmail");

    if(contactFirstName){
        contactFirstName.value =
            currentUser.firstName;
    }
    if(contactLastName){
        contactLastName.value =
            currentUser.lastName;
    }
    if(contactEmail){
        contactEmail.value =
            currentUser.email;
    }
}
const contactForm =
    document.querySelector(".contact-form");

if(contactForm){
    contactForm.addEventListener("submit", function(e){
        e.preventDefault();
        /* =========================================
           LOGIN CHECK FIRST
        ========================================= */
        if(!currentUser){
            alert("Account required to send message to Frenemies Fine Dining");
            window.location.href = "LoginFFD.html";
            return;
        }
        const subject =
            contactForm.querySelector('input[placeholder="What is it about?"]').value.trim();
        const message =
            contactForm.querySelector('textarea').value.trim();
        if(subject === "" && message === ""){
            alert("Enter subject and message to send to Frenemies Fine Dining");
        }
        else if(subject !== "" && message === ""){
            alert("Enter message to send to Frenemies Fine Dining");
        }
        else if(subject === "" && message !== ""){
            alert("Message sent to Frenemies Fine Dining. Thank you for reaching out!");
        }
        else if(subject !== "" && message !== ""){
            alert("Message sent to Frenemies Fine Dining. Thank you for reaching out!");
        }
        /* reset form */
        contactForm.reset();
    });
}
const trackBtn =
    document.querySelector(".track-btn");
/*TRACK ORDER BUTTON */
if(trackBtn && currentUser){
    trackBtn.addEventListener("click", () => {
        window.location.href =
            "AccountFFD.html";
    });
}
/* =========================================
   ACCOUNT PAGE INFO
========================================= */
const accountName =
    document.getElementById("accountName");
const accountEmail =
    document.getElementById("accountEmail");
if(currentUser){
    if(accountName){
        accountName.textContent =
            `${currentUser.firstName} ${currentUser.lastName}`;
    }
    if(accountEmail){
        accountEmail.textContent =
            currentUser.email;
    }
}
/* =========================================
   ACCOUNT PAGE PAW COINS
========================================= */
const pawCoinsBox =
    document.getElementById("pawCoinsBox");
if(currentUser && pawCoinsBox){
    const userOrdersKey =
        `ffdOrders_${currentUser.email}`;
    const userOrders =
        JSON.parse(
            localStorage.getItem(userOrdersKey)
        ) || [];
    /* WELCOME BONUS */
    const welcomeBonus = 100;
    let totalCoins = welcomeBonus;
    /* ADD ORDER REWARDS */
    userOrders.forEach(order => {
        totalCoins += order.rewards;
    });
    pawCoinsBox.innerHTML =
        `⛃ ${Math.floor(totalCoins)} Paw Coins`;
}
const loginButtons =
    document.querySelectorAll(".login-btn");
if(currentUser){
    loginButtons.forEach(button => {
        button.textContent = "Account";
        button.onclick = () => {
            window.location.href =
                "AccountFFD.html";
        };
    });
}
/* =========================================
   ACCOUNT PAGE ORDERS
========================================= */
const ordersContainer =
    document.getElementById("ordersContainer");
function renderOrders(){
    if(!ordersContainer || !currentUser){
        return;
    }
    const userOrdersKey =
        `ffdOrders_${currentUser.email}`;
    const userOrders =
        JSON.parse(
            localStorage.getItem(userOrdersKey)
        ) || [];
    ordersContainer.innerHTML = "";
    if(userOrders.length === 0){
        ordersContainer.innerHTML = `
            <p style="color:#999;">
                No orders yet.
            </p>
        `;
        return;
    }
    userOrders.forEach(order => {
        const orderCard =
            document.createElement("div");
        orderCard.className = "order-card";
        let itemsHTML = "";
        order.items.forEach(item => {
            itemsHTML += `
                <p>
                    • ${item.name} ×${item.quantity}
                </p>
            `;
        });
        orderCard.innerHTML = `
            <div>
                <h3>${order.orderNumber}</h3>
                <p>${order.orderDate}</p>
                <details class="view-order-dropdown">
                    <summary>
                        View Order
                    </summary>
                    <div class="dropdown-items">
                        ${itemsHTML}
                    </div>
                </details>
            </div>
            <div class="order-right">
                <span class="${
                    order.status === "Processing"
                    ? "processing-status"
                    : "delivered-status"
                }">
                    ${order.status.toUpperCase()}
                </span>
                <h2>
                    ${formatPrice(order.total)}
                </h2>
            </div>
        `;
        ordersContainer.appendChild(orderCard);
    });
}
renderOrders();
/* =========================================
   PAW COINS PAGE
========================================= */
const availableCoinsElement =
    document.getElementById("availableCoins");
const totalEarnedCoinsElement =
    document.getElementById("totalEarnedCoins");
const pawCoinsHistory =
    document.getElementById("pawCoinsHistory");
function renderPawCoins(){
    if(
        !pawCoinsHistory ||
        !currentUser
    ){
        return;
    }
    const userOrdersKey =
        `ffdOrders_${currentUser.email}`;
    const userOrders =
        JSON.parse(
            localStorage.getItem(userOrdersKey)
        ) || [];
    pawCoinsHistory.innerHTML = "";
    /* =========================================
       WELCOME BONUS
    ========================================= */
    const welcomeBonus = 100;
    let totalCoins = welcomeBonus;
    /* =========================================
       ADD ORDER REWARDS
    ========================================= */
    userOrders.forEach(order => {
        totalCoins += order.rewards;
    });
    /* =========================================
       DISPLAY TOTALS
    ========================================= */
    availableCoinsElement.textContent =
        Math.floor(totalCoins).toLocaleString();
    totalEarnedCoinsElement.textContent =
        Math.floor(totalCoins).toLocaleString();
        totalEarnedCoinsElement.style.color = "black";
    /* =========================================
       RENDER ORDERS
    ========================================= */
    userOrders.forEach(order => {
        const historyItem =
            document.createElement("div");
        historyItem.className =
            "pawcoins-history-item";
        let subtitle = "";
        if(order.status === "Processing"){
            subtitle =
                `Pending • ${order.orderDate}`;
        }
        else{
            subtitle =
                order.orderDate;
        }
        historyItem.innerHTML = `
            <div class="pawcoins-history-left">
                <h3>
                    Order ${order.orderNumber}
                </h3>
                <p class="
                    ${
                        order.status === "Processing"
                        ? "pending-order-text"
                        : ""
                    }
                ">
                    ${subtitle}
                </p>
            </div>
            <div class="pawcoins-earned">
                +${Math.floor(order.rewards)}
                <span>⛃</span>
            </div>
        `;
        pawCoinsHistory.appendChild(historyItem);
    });
    /* =========================================
       WELCOME BONUS ENTRY
    ========================================= */
    const welcomeItem =
        document.createElement("div");
    welcomeItem.className =
        "pawcoins-history-item";
    welcomeItem.innerHTML = `
        <div class="pawcoins-history-left">
            <h3>
                Welcome Bonus
            </h3>
            <p>
                May 21, 2026
            </p>
        </div>
        <div class="pawcoins-earned">
            +100
            <span>⛃</span>
        </div>
    `;
    pawCoinsHistory.appendChild(welcomeItem);
}
renderPawCoins();
/* =========================================
   LOGOUT
========================================= */
const logoutBtn =
    document.getElementById("logoutBtn");
if(logoutBtn){
    logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("ffdCurrentUser");
        const cartCount =
            document.getElementById("cartCount");
        if(cartCount){
            cartCount.textContent = "";
            cartCount.style.display = "none";
        }
        updateCartCount();
        alert("Logged out successfully.");
        window.location.href = "LoginFFD.html";
    });
}
/* =========================================
   EDIT PROFILE PAGE
========================================= */
const editProfileForm =
    document.getElementById("editProfileForm");
if(editProfileForm && currentUser){
    /* =========================================
       AUTOFILL USER DATA
    ========================================= */
    const editFirstName =
        document.getElementById("editFirstName");
    const editLastName =
        document.getElementById("editLastName");
    const editEmail =
        document.getElementById("editEmail");
    const editPhone =
        document.getElementById("editPhone");
    const editPassword =
        document.getElementById("editPassword");
    const editConfirmPassword =
        document.getElementById("editConfirmPassword");
    /* SET VALUES */
    editFirstName.value =
        currentUser.firstName;
    editLastName.value =
        currentUser.lastName;
    editEmail.value =
        currentUser.email;
    editPhone.value =
        currentUser.phone;
    /* =========================================
       SAVE CHANGES
    ========================================= */
    editProfileForm.addEventListener("submit", function(e){
        e.preventDefault();
        const firstName =
            editFirstName.value.trim();
        const lastName =
            editLastName.value.trim();
        const email =
            editEmail.value
                .trim()
                .toLowerCase();
        const phone =
            editPhone.value.trim();
        const newPassword =
            editPassword.value;
        const confirmPassword =
            editConfirmPassword.value;
        /* =========================================
           PASSWORD VALIDATION
        ========================================= */
        if(
            newPassword !== "" &&
            newPassword !== confirmPassword
        ){
            alert("Passwords do not match.");
            return;
        }
        /* =========================================
           GET ACCOUNTS
        ========================================= */
        let accounts = getAccounts();
        const accountIndex =
            accounts.findIndex(account =>
                account.email === currentUser.email
            );
        if(accountIndex === -1){
            alert("Account not found.");
            return;
        }
        /* =========================================
           UPDATE USER INFO
        ========================================= */
        accounts[accountIndex].firstName =
            firstName;
        accounts[accountIndex].lastName =
            lastName;
        accounts[accountIndex].email =
            email;
        accounts[accountIndex].phone =
            phone;
        /* =========================================
           UPDATE PASSWORD ONLY IF FILLED
        ========================================= */
        if(newPassword !== ""){
            accounts[accountIndex].password =
                newPassword;
        }
        /* =========================================
           SAVE UPDATED ACCOUNTS
        ========================================= */
        saveAccounts(accounts);
        /* =========================================
           UPDATE CURRENT USER SESSION
        ========================================= */
        localStorage.setItem(
            "ffdCurrentUser",
            JSON.stringify(accounts[accountIndex])
        );
        alert("Profile updated successfully!");
        window.location.href="AccountFFD.html";
    });
}

