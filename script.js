/* ============================================
   FILE: script.js
   YADAV DAIRY FARM — INTERACTIONS & E-COMMERCE
============================================ */

"use strict";

/* ============================================
   1. FARM CONFIGURATION
============================================ */

const FARM = Object.freeze({
    name: "Yadav Dairy Farm",
    phone: "919118720915",
    displayPhone: "9118720915",
    email: "rahulyadavvikas5@gmail.com",
    address: "Oghanagar, Rajesultanpur, Ambedkarnagar, Uttar Pradesh, India"
});

/*
    DEMONSTRATION CATALOGUE

    Update the prices, sizes, images and availability
    to match your real business before publishing.

    The images are illustrative remote image URLs.
    Replace them with your own correctly labelled
    product photographs for the best result.
*/

const PRODUCT_CATALOGUE = [
    {
        id: "cow-milk",
        name: "Cow Milk",
        category: "milk",
        categoryLabel: "Fresh Milk",
        description: "A versatile everyday milk option for tea, breakfast and cooking.",
        price: 60,
        unit: "1 litre",
        badge: "DAILY ESSENTIAL",
        image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=750&q=85",
        featured: true,
        available: true
    },
    {
        id: "buffalo-milk",
        name: "Buffalo Milk",
        category: "milk",
        categoryLabel: "Fresh Milk",
        description: "A rich-tasting milk option for traditional recipes and beverages.",
        price: 75,
        unit: "1 litre",
        badge: "POPULAR",
        image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=750&q=85",
        featured: true,
        available: true
    },
    {
        id: "full-cream-milk",
        name: "Full-Cream Milk",
        category: "milk",
        categoryLabel: "Fresh Milk",
        description: "A creamy option for daily family use and favourite recipes.",
        price: 70,
        unit: "1 litre",
        badge: "CREAMY CHOICE",
        image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=750&q=85",
        featured: true,
        available: true
    },
    {
        id: "packaged-milk",
        name: "Packaged Milk",
        category: "milk",
        categoryLabel: "Fresh Milk",
        description: "A convenient packaged milk option. Confirm the brand and size.",
        price: 35,
        unit: "500 ml",
        badge: "CONVENIENT",
        image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=750&q=85",
        featured: false,
        available: true
    },
    {
        id: "paneer",
        name: "Fresh Paneer",
        category: "daily",
        categoryLabel: "Daily Essentials",
        description: "A versatile dairy ingredient for curries, snacks and family meals.",
        price: 100,
        unit: "200 g",
        badge: "KITCHEN FAVOURITE",
        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=750&q=85",
        featured: true,
        available: true
    },
    {
        id: "dahi",
        name: "Dahi",
        category: "daily",
        categoryLabel: "Daily Essentials",
        description: "A traditional dairy staple for meals, snacks and recipes.",
        price: 40,
        unit: "500 g",
        badge: "EVERYDAY",
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=750&q=85",
        featured: true,
        available: true
    },
    {
        id: "malai",
        name: "Milk Malai",
        category: "daily",
        categoryLabel: "Daily Essentials",
        description: "Creamy dairy for traditional dishes and homemade recipes.",
        price: 60,
        unit: "200 g",
        badge: "CREAMY",
        image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=750&q=85",
        featured: false,
        available: true
    },
    {
        id: "buttermilk",
        name: "Buttermilk",
        category: "daily",
        categoryLabel: "Daily Essentials",
        description: "A refreshing dairy drink to enjoy with everyday meals.",
        price: 25,
        unit: "500 ml",
        badge: "REFRESHING",
        image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=750&q=85",
        featured: false,
        available: true
    },
    {
        id: "lassi",
        name: "Sweet Lassi",
        category: "daily",
        categoryLabel: "Daily Essentials",
        description: "A sweet yogurt-based drink for a refreshing treat.",
        price: 35,
        unit: "250 ml",
        badge: "FAMILY FAVOURITE",
        image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=750&q=85",
        featured: false,
        available: true
    },
    {
        id: "desi-ghee",
        name: "Desi Ghee",
        category: "traditional",
        categoryLabel: "Traditional Dairy",
        description: "A traditional cooking ingredient for Indian kitchens.",
        price: 300,
        unit: "250 g",
        badge: "TRADITIONAL",
        image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=750&q=85",
        featured: true,
        available: true
    },
    {
        id: "white-butter",
        name: "White Butter",
        category: "traditional",
        categoryLabel: "Traditional Dairy",
        description: "A classic dairy spread for meals and cooking.",
        price: 100,
        unit: "200 g",
        badge: "DAIRY CLASSIC",
        image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=750&q=85",
        featured: false,
        available: true
    },
    {
        id: "salted-butter",
        name: "Salted Butter",
        category: "traditional",
        categoryLabel: "Traditional Dairy",
        description: "A savoury butter option for toast and favourite recipes.",
        price: 120,
        unit: "200 g",
        badge: "KITCHEN ESSENTIAL",
        image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=750&q=85",
        featured: false,
        available: true
    },
    {
        id: "flavoured-lassi",
        name: "Flavoured Lassi",
        category: "special",
        categoryLabel: "Special Treats",
        description: "A flavourful variation on a classic dairy drink.",
        price: 45,
        unit: "250 ml",
        badge: "SPECIAL",
        image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=750&q=85",
        featured: false,
        available: true
    },
    {
        id: "flavoured-milk",
        name: "Flavoured Milk",
        category: "special",
        categoryLabel: "Special Treats",
        description: "A milk-based drink for a little variety in your day.",
        price: 35,
        unit: "200 ml",
        badge: "TASTY TREAT",
        image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=750&q=85",
        featured: false,
        available: true
    },
    {
        id: "cheese",
        name: "Cheese",
        category: "special",
        categoryLabel: "Special Treats",
        description: "A versatile dairy ingredient for snacks and family meals.",
        price: 120,
        unit: "200 g",
        badge: "VERSATILE",
        image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=750&q=85",
        featured: false,
        available: true
    },
    {
        id: "ice-cream",
        name: "Ice Cream",
        category: "special",
        categoryLabel: "Special Treats",
        description: "A chilled dessert for celebrations and everyday treats.",
        price: 80,
        unit: "500 ml",
        badge: "SWEET TREAT",
        image: "https://images.unsplash.com/photo-1560008581-09826d1de69e?auto=format&fit=crop&w=750&q=85",
        featured: false,
        available: true
    },
    {
        id: "milk-sweets",
        name: "Milk-Based Sweets",
        category: "special",
        categoryLabel: "Special Treats",
        description: "Traditional sweet treats. Confirm varieties and ingredients.",
        price: 150,
        unit: "500 g",
        badge: "CELEBRATION",
        image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=750&q=85",
        featured: false,
        available: true
    },
    {
        id: "milk-container",
        name: "Milk Container",
        category: "daily",
        categoryLabel: "Dairy Accessories",
        description: "A reusable container option for carrying dairy products.",
        price: 100,
        unit: "1 piece",
        badge: "ACCESSORY",
        image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=750&q=85",
        featured: false,
        available: true
    }
];

/* ============================================
   2. APPLICATION STATE
============================================ */

const state = {
    products: PRODUCT_CATALOGUE.map(product => ({ ...product })),
    cart: new Map(),
    category: "all",
    search: "",
    sort: "featured",
    cartOpen: false,
    adminOpen: false
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const dom = {
    header: $("#siteHeader"),
    nav: $("#mainNav"),
    menuToggle: $("#menuToggle"),
    searchPanel: $("#searchPanel"),
    searchInput: $("#searchInput"),
    categoryTabs: $("#categoryTabs"),
    productsGrid: $("#productsGrid"),
    productCount: $("#productCount"),
    emptyState: $("#emptyState"),
    cartDrawer: $("#cartDrawer"),
    cartOverlay: $("#cartOverlay"),
    cartItems: $("#cartItems"),
    cartCount: $("#cartCount"),
    floatingCartCount: $("#floatingCartCount"),
    drawerCount: $("#drawerCount"),
    cartSubtotal: $("#cartSubtotal"),
    cartFooter: $("#cartFooter"),
    toastRegion: $("#toastRegion")
};

/* ============================================
   3. UTILITIES
============================================ */

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, character => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
    })[character]);
}

function money(amount) {
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 2
    }).format(amount);
}

function getProduct(id) {
    return state.products.find(product => product.id === String(id));
}

function getQuantity() {
    let total = 0;

    for (const quantity of state.cart.values()) {
        total += quantity;
    }

    return total;
}

function getSubtotal() {
    let total = 0;

    for (const [id, quantity] of state.cart.entries()) {
        const product = getProduct(id);

        if (product) {
            total += product.price * quantity;
        }
    }

    return total;
}

function toast(message, type = "success") {
    const element = document.createElement("div");
    element.className = `toast${type === "error" ? " toast-error" : ""}`;

    const icon = document.createElement("span");
    icon.className = "toast-icon";
    icon.textContent = type === "error" ? "!" : "✓";

    const text = document.createElement("span");
    text.textContent = message;

    element.append(icon, text);
    dom.toastRegion.append(element);

    window.setTimeout(() => {
        element.style.opacity = "0";
        element.style.transform = "translateX(12px)";

        window.setTimeout(() => element.remove(), 250);
    }, 2800);
}

function openWhatsApp(message) {
    const url =
        `https://wa.me/${FARM.phone}?text=${encodeURIComponent(message)}`;

    const opened = window.open(url, "_blank", "noopener,noreferrer");

    if (!opened) {
        toast("Unable to open WhatsApp. Please contact the farm directly.", "error");
    }
}

/* ============================================
   4. PRODUCT RENDERING
============================================ */

function getVisibleProducts() {
    let results = [...state.products];

    if (state.category !== "all") {
        results = results.filter(product => product.category === state.category);
    }

    const term = state.search.trim().toLowerCase();

    if (term) {
        results = results.filter(product => {
            const searchable = [
                product.name,
                product.categoryLabel,
                product.description,
                product.unit
            ].join(" ").toLowerCase();

            return searchable.includes(term);
        });
    }

    if (state.sort === "price-low") {
        results.sort((a, b) => a.price - b.price);
    } else if (state.sort === "price-high") {
        results.sort((a, b) => b.price - a.price);
    } else if (state.sort === "name") {
        results.sort((a, b) => a.name.localeCompare(b.name));
    } else {
        results.sort((a, b) => {
            if (a.featured !== b.featured) {
                return a.featured ? -1 : 1;
            }

            return PRODUCT_CATALOGUE.findIndex(item => item.id === a.id) -
                   PRODUCT_CATALOGUE.findIndex(item => item.id === b.id);
        });
    }

    return results;
}

function renderProducts() {
    const products = getVisibleProducts();

    dom.productCount.textContent =
        `${products.length} ${products.length === 1 ? "product" : "products"}`;

    dom.emptyState.hidden = products.length !== 0;
    dom.productsGrid.hidden = products.length === 0;

    dom.productsGrid.innerHTML = products.map((product, index) => `
        <article class="product-card reveal is-visible"
                 data-product-id="${escapeHTML(product.id)}"
                 style="--reveal-delay:${(index % 4) * 45}ms">

            <div class="product-image-wrap">
                <img
                    src="${escapeHTML(product.image)}"
                    alt="${escapeHTML(product.name)}"
                    loading="lazy">

                <span class="product-badge ${["special", "traditional"].includes(product.category) ? "special" : ""}">
                    ${escapeHTML(product.badge)}
                </span>

                <button
                    type="button"
                    class="product-quick-add"
                    data-add-product="${escapeHTML(product.id)}"
                    aria-label="Add ${escapeHTML(product.name)} to bag">+</button>
            </div>

            <div class="product-content">
                <span class="product-category-label">${escapeHTML(product.categoryLabel)}</span>
                <h3>${escapeHTML(product.name)}</h3>
                <p class="product-description">${escapeHTML(product.description)}</p>

                <div class="product-meta">
                    <div class="product-price">
                        <strong>${money(product.price)}</strong>
                        <small>per ${escapeHTML(product.unit)}</small>
                    </div>

                    <button
                        type="button"
                        class="add-to-cart"
                        data-add-product="${escapeHTML(product.id)}"
                        ${product.available ? "" : "disabled"}>
                        ${product.available ? "Add to Bag +" : "Unavailable"}
                    </button>
                </div>
            </div>
        </article>
    `).join("");

    initialiseProductImages();
    initialiseReveals();
}

/* ============================================
   5. SEARCH, FILTER AND SORT
============================================ */

function setCategory(category) {
    state.category = category;

    $$(".category-tab").forEach(button => {
        const active = button.dataset.category === category;

        button.classList.toggle("active", active);
        button.setAttribute("aria-pressed", String(active));
    });

    renderProducts();
}

dom.categoryTabs.addEventListener("click", event => {
    const button = event.target.closest("[data-category]");

    if (!button) return;

    setCategory(button.dataset.category);
});

$$("[data-category-link]").forEach(button => {
    button.addEventListener("click", () => {
        setCategory(button.dataset.categoryLink);

        $("#products").scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

$("#sortProducts").addEventListener("change", event => {
    state.sort = event.target.value;
    renderProducts();
});

$("#searchToggle").addEventListener("click", () => {
    const isOpen = dom.searchPanel.classList.toggle("open");

    if (isOpen) {
        dom.searchInput.focus();
    } else {
        dom.searchInput.value = "";
        state.search = "";
        renderProducts();
    }
});

$("#closeSearch").addEventListener("click", () => {
    dom.searchPanel.classList.remove("open");
    dom.searchInput.value = "";
    state.search = "";
    renderProducts();
});

dom.searchInput.addEventListener("input", event => {
    state.search = event.target.value;
    renderProducts();
});

$("#resetFilters").addEventListener("click", () => {
    state.search = "";
    state.category = "all";
    state.sort = "featured";

    dom.searchInput.value = "";
    $("#sortProducts").value = "featured";

    setCategory("all");
});

/* ============================================
   6. SHOPPING CART
============================================ */

function addToCart(id) {
    const product = getProduct(id);

    if (!product || !product.available) {
        toast("This product is currently unavailable.", "error");
        return;
    }

    const current = state.cart.get(product.id) || 0;

    if (current >= 99) {
        toast("Maximum quantity reached.", "error");
        return;
    }

    state.cart.set(product.id, current + 1);

    updateCart();
    toast(`${product.name} added to your bag.`);
}

function updateQuantity(id, difference) {
    const current = state.cart.get(id) || 0;

    if (!current) return;

    const next = current + difference;

    if (next <= 0) {
        state.cart.delete(id);
    } else if (next <= 99) {
        state.cart.set(id, next);
    } else {
        toast("Maximum quantity reached.", "error");
        return;
    }

    updateCart();
}

function removeFromCart(id) {
    const product = getProduct(id);

    state.cart.delete(id);
    updateCart();

    if (product) {
        toast(`${product.name} removed from your bag.`);
    }
}

function renderCartItems() {
    if (state.cart.size === 0) {
        dom.cartItems.innerHTML = `
            <div class="cart-empty">
                <span>🛍️</span>
                <h3>Your bag is waiting</h3>
                <p>Discover your everyday dairy essentials and add your favourites.</p>
                <button class="button button-dark" id="continueShopping">Explore Products</button>
            </div>
        `;

        return;
    }

    const fragments = [];

    for (const [id, quantity] of state.cart.entries()) {
        const product = getProduct(id);

        if (!product) continue;

        fragments.push(`
            <article class="cart-line">
                <div class="cart-line-image">
                    <img src="${escapeHTML(product.image)}" alt="${escapeHTML(product.name)}">
                </div>

                <div class="cart-line-info">
                    <h3>${escapeHTML(product.name)}</h3>
                    <p>${money(product.price)} / ${escapeHTML(product.unit)}</p>

                    <div class="quantity-control">
                        <button type="button" data-quantity-change="-1" data-id="${escapeHTML(id)}" aria-label="Decrease quantity">−</button>
                        <span>${quantity}</span>
                        <button type="button" data-quantity-change="1" data-id="${escapeHTML(id)}" aria-label="Increase quantity">+</button>
                    </div>
                </div>

                <div class="cart-line-total">
                    <strong>${money(product.price * quantity)}</strong>
                    <button type="button" class="remove-line" data-remove-product="${escapeHTML(id)}">Remove</button>
                </div>
            </article>
        `);
    }

    dom.cartItems.innerHTML = fragments.join("");
}

function updateCart() {
    const quantity = getQuantity();
    const subtotal = getSubtotal();

    dom.cartCount.textContent = quantity;
    dom.floatingCartCount.textContent = quantity;
    dom.drawerCount.textContent = `(${quantity})`;
    dom.cartSubtotal.textContent = money(subtotal);
    dom.cartFooter.hidden = quantity === 0;

    renderCartItems();

    if (state.adminOpen) {
        renderAdmin();
    }
}

function openCart() {
    state.cartOpen = true;

    dom.cartDrawer.classList.add("open");
    dom.cartOverlay.classList.add("open");
    dom.cartDrawer.setAttribute("aria-hidden", "false");

    updateBodyScroll();
    $("#closeCart").focus();
}

function closeCart() {
    state.cartOpen = false;

    dom.cartDrawer.classList.remove("open");
    dom.cartOverlay.classList.remove("open");
    dom.cartDrawer.setAttribute("aria-hidden", "true");

    updateBodyScroll();
}

$("#openCart").addEventListener("click", openCart);
$("#floatingCart").addEventListener("click", openCart);
$("#closeCart").addEventListener("click", closeCart);
dom.cartOverlay.addEventListener("click", closeCart);

document.addEventListener("click", event => {
    const addButton = event.target.closest("[data-add-product]");

    if (addButton) {
        addToCart(addButton.dataset.addProduct);
        return;
    }

    const quantityButton = event.target.closest("[data-quantity-change]");

    if (quantityButton) {
        updateQuantity(
            quantityButton.dataset.id,
            Number(quantityButton.dataset.quantityChange)
        );
        return;
    }

    const removeButton = event.target.closest("[data-remove-product]");

    if (removeButton) {
        removeFromCart(removeButton.dataset.removeProduct);
        return;
    }

    if (
        event.target.closest("#continueShopping") ||
        event.target.closest("#continueShoppingBottom")
    ) {
        closeCart();

        $("#products").scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
});

/* ============================================
   7. ORDER REQUEST VIA WHATSAPP
============================================ */

$("#checkoutButton").addEventListener("click", () => {
    if (state.cart.size === 0) {
        toast("Your bag is empty.", "error");
        return;
    }

    closeCart();
    openModal("orderModal");
});

$("#orderForm").addEventListener("submit", event => {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.reportValidity()) return;

    if (state.cart.size === 0) {
        closeModal("orderModal");
        toast("Your bag is empty.", "error");
        return;
    }

    const data = new FormData(form);

    const name = String(data.get("customerName") || "").trim();
    const phone = String(data.get("customerPhone") || "").trim();
    const address = String(data.get("customerAddress") || "").trim();
    const note = String(data.get("customerNote") || "").trim();

    if (!/^\d{10}$/.test(phone)) {
        toast("Enter a valid 10-digit mobile number.", "error");
        $("#customerPhone").focus();
        return;
    }

    const lines = [];

    for (const [id, quantity] of state.cart.entries()) {
        const product = getProduct(id);

        if (!product) continue;

        lines.push(
            `${product.name} (${product.unit}) x ${quantity} = ${money(product.price * quantity)}`
        );
    }

    const message = [
        "NEW ORDER REQUEST",
        "",
        `Farm: ${FARM.name}`,
        `Customer name: ${name}`,
        `Customer mobile: ${phone}`,
        `Delivery address: ${address}`,
        "",
        "PRODUCTS:",
        ...lines,
        "",
        `Estimated subtotal: ${money(getSubtotal())}`,
        "Delivery charge: To be confirmed",
        "Final availability and price: To be confirmed",
        "",
        `Additional instructions: ${note || "None"}`,
        "",
        "Please confirm the final order, delivery timing and accepted payment method."
    ].join("\n");

    closeModal("orderModal");
    openWhatsApp(message);
});

/* ============================================
   8. CUSTOMER FEEDBACK
============================================ */

$("#openFeedback").addEventListener("click", () => {
    openModal("feedbackModal");
});

$("#feedbackForm").addEventListener("submit", event => {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.reportValidity()) return;

    const data = new FormData(form);

    const name = String(data.get("feedbackName") || "").trim();
    const topic = String(data.get("feedbackType") || "").trim();
    const message = String(data.get("feedbackMessage") || "").trim();

    const whatsappMessage = [
        "CUSTOMER FEEDBACK",
        "",
        `Farm: ${FARM.name}`,
        `Name: ${name || "Not provided"}`,
        `Topic: ${topic}`,
        "",
        message
    ].join("\n");

    closeModal("feedbackModal");
    openWhatsApp(whatsappMessage);

    form.reset();
});

/* ============================================
   9. MODAL MANAGEMENT
============================================ */

function openModal(id) {
    const modal = document.getElementById(id);

    if (!modal) return;

    modal.hidden = false;
    updateBodyScroll();

    const firstField = modal.querySelector(
        "input, textarea, select, button"
    );

    if (firstField) {
        window.setTimeout(() => firstField.focus(), 40);
    }
}

function closeModal(id) {
    const modal = document.getElementById(id);

    if (!modal) return;

    modal.hidden = true;
    updateBodyScroll();
}

function updateBodyScroll() {
    const modalOpen = $$(".modal-backdrop").some(modal => !modal.hidden);

    document.body.classList.toggle(
        "no-scroll",
        state.cartOpen || modalOpen
    );
}

document.addEventListener("click", event => {
    const closeButton = event.target.closest("[data-close-modal]");

    if (closeButton) {
        closeModal(closeButton.dataset.closeModal);
        return;
    }

    if (
        event.target.classList.contains("modal-backdrop") &&
        !event.target.hidden
    ) {
        closeModal(event.target.id);
    }
});

document.addEventListener("keydown", event => {
    if (event.key !== "Escape") return;

    closeCart();

    $$(".modal-backdrop").forEach(modal => {
        if (!modal.hidden) {
            closeModal(modal.id);
        }
    });

    dom.nav.classList.remove("open");
    dom.menuToggle.setAttribute("aria-expanded", "false");
    dom.searchPanel.classList.remove("open");
});

/* ============================================
   10. ADMIN DASHBOARD DEMO
============================================ */

/*
    IMPORTANT SECURITY NOTE

    This is a frontend demonstration only.

    It is not a secure admin system. It has no authentication,
    permanent inventory database, real order records or
    server-side access control.

    A production admin dashboard requires a backend,
    secure authentication, database storage and protected APIs.
*/

function openAdmin() {
    state.adminOpen = true;
    renderAdmin();
    openModal("adminModal");
}

function renderAdmin() {
    $("#adminProductTotal").textContent = state.products.length;
    $("#adminCartTotal").textContent = getQuantity();
    $("#adminRevenue").textContent = money(getSubtotal());

    $("#adminProductList").innerHTML = state.products.map(product => `
        <div class="admin-product-row">
            <div>
                <strong>${escapeHTML(product.name)}</strong>
                <small>${escapeHTML(product.unit)} · ${escapeHTML(product.categoryLabel)}</small>
            </div>

            <input
                type="number"
                min="0"
                max="1000000"
                step="0.01"
                value="${product.price}"
                data-admin-price="${escapeHTML(product.id)}"
                aria-label="Demonstration price for ${escapeHTML(product.name)}">

            <button type="button" data-save-price="${escapeHTML(product.id)}">Update</button>
        </div>
    `).join("");
}

$("#adminAccess").addEventListener("click", openAdmin);

document.addEventListener("click", event => {
    const updateButton = event.target.closest("[data-save-price]");

    if (!updateButton) return;

    const id = updateButton.dataset.savePrice;
    const input = document.querySelector(`[data-admin-price="${id}"]`);
    const product = getProduct(id);

    if (!input || !product) return;

    const value = Number(input.value);

    if (!Number.isFinite(value) || value < 0 || value > 1000000) {
        toast("Enter a valid price.", "error");
        return;
    }

    product.price = Math.round(value * 100) / 100;

    renderProducts();
    updateCart();
    renderAdmin();

    toast(`${product.name} demonstration price updated.`);
});

$("#exportProducts").addEventListener("click", () => {
    const data = state.products.map(product => ({ ...product }));

    const blob = new Blob(
        [JSON.stringify(data, null, 2)],
        { type: "application/json" }
    );

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = "yadav-dairy-product-catalogue.json";

    document.body.append(link);
    link.click();
    link.remove();

    URL.revokeObjectURL(url);

    toast("Product catalogue exported.");
});

/* ============================================
   11. MOBILE NAVIGATION
============================================ */

dom.menuToggle.addEventListener("click", () => {
    const open = dom.nav.classList.toggle("open");

    dom.menuToggle.setAttribute("aria-expanded", String(open));
    dom.menuToggle.setAttribute(
        "aria-label",
        open ? "Close navigation" : "Open navigation"
    );
});

$$(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        dom.nav.classList.remove("open");
        dom.menuToggle.setAttribute("aria-expanded", "false");
    });
});

/* ============================================
   12. STICKY HEADER AND BACK TO TOP
============================================ */

const trackedSections = [
    "home",
    "products",
    "story",
    "quality",
    "faq",
    "contact"
];

function updateScrollUI() {
    const scrollY = window.scrollY;

    dom.header.classList.toggle("scrolled", scrollY > 10);
    $("#backToTop").classList.toggle("visible", scrollY > 450);

    let activeSection = "home";
    const threshold = scrollY + 170;

    for (const id of trackedSections) {
        const section = document.getElementById(id);

        if (section && section.offsetTop <= threshold) {
            activeSection = id;
        }
    }

    $$(".nav-link").forEach(link => {
        link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${activeSection}`
        );
    });
}

let scrollQueued = false;

window.addEventListener("scroll", () => {
    if (scrollQueued) return;

    scrollQueued = true;

    requestAnimationFrame(() => {
        updateScrollUI();
        scrollQueued = false;
    });
}, { passive: true });

$("#backToTop").addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

/* ============================================
   13. SCROLL REVEAL
============================================ */

let revealObserver = null;

function initialiseReveals() {
    const items = $$(".reveal:not(.is-visible)");

    if (!("IntersectionObserver" in window)) {
        items.forEach(item => item.classList.add("is-visible"));
        return;
    }

    if (!revealObserver) {
        revealObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;

                entry.target.classList.add("is-visible");
                revealObserver.unobserve(entry.target);
            });
        }, {
            threshold: 0.1,
            rootMargin: "0px 0px -25px 0px"
        });
    }

    items.forEach(item => revealObserver.observe(item));
}

/* ============================================
   14. IMAGE FALLBACKS
============================================ */

function initialiseProductImages() {
    $$(".product-image-wrap img").forEach(img => {
        img.addEventListener("error", () => {
            if (img.dataset.fallbackUsed === "true") return;

            img.dataset.fallbackUsed = "true";

            img.src =
                "https://placehold.co/700x500/f0f4e8/103d2b?text=Yadav+Dairy+Farm";
        }, { once: true });
    });
}

document.addEventListener("error", event => {
    const image = event.target;

    if (
        !(image instanceof HTMLImageElement) ||
        image.dataset.globalFallbackUsed === "true"
    ) {
        return;
    }

    image.dataset.globalFallbackUsed = "true";

    image.src =
        "https://placehold.co/700x500/f0f4e8/103d2b?text=Yadav+Dairy+Farm";
}, true);

/* ============================================
   15. FAQ ACCORDION
============================================ */

$$(".faq-item").forEach(item => {
    item.addEventListener("toggle", () => {
        if (!item.open) return;

        $$(".faq-item").forEach(other => {
            if (other !== item) {
                other.open = false;
            }
        });
    });
});

/* ============================================
   16. INTERACTIVE THREE.JS PRODUCT
============================================ */

let scene = null;
let camera = null;
let renderer = null;
let bottle = null;
let animationFrame = null;

let autoRotate = true;
let dragging = false;
let previousX = 0;
let previousY = 0;
let targetRotationY = 0;
let targetRotationX = 0;
let cameraDistance = 6.2;

function show3DFallback() {
    const fallback = $("#threeFallback");

    if (fallback) {
        fallback.style.display = "flex";
    }
}

function resize3D() {
    if (!renderer || !camera) return;

    const container = $("#threeCanvasWrap");

    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    if (!width || !height) return;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
}

function updateCamera() {
    if (!camera) return;

    camera.position.z = cameraDistance;
    camera.position.y = .35;
    camera.lookAt(0, 0, 0);
}

function build3DBottle() {
    const THREE = window.THREE;

    scene = new THREE.Scene();

    const container = $("#threeCanvasWrap");

    if (!container) return;

    scene.background = new THREE.Color("#e8efdf");

    camera = new THREE.PerspectiveCamera(
        38,
        container.clientWidth / container.clientHeight,
        .1,
        100
    );

    camera.position.set(0, .35, cameraDistance);
    camera.lookAt(0, 0, 0);

    renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: false,
        powerPreference: "low-power"
    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.8));
    renderer.setSize(container.clientWidth, container.clientHeight);

    if ("outputColorSpace" in renderer && THREE.SRGBColorSpace) {
        renderer.outputColorSpace = THREE.SRGBColorSpace;
    } else {
        renderer.outputEncoding = THREE.sRGBEncoding;
    }

    renderer.domElement.setAttribute(
        "aria-label",
        "Interactive 3D milk bottle. Drag to rotate."
    );

    renderer.domElement.style.touchAction = "pan-y";
    container.prepend(renderer.domElement);

    scene.add(new THREE.AmbientLight(0xffffff, 1.55));

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.1);
    keyLight.position.set(4, 5, 6);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xd6e8bb, 1.5);
    rimLight.position.set(-4, 1, -3);
    scene.add(rimLight);

    const fillLight = new THREE.PointLight(0xe4cc92, .9, 15);
    fillLight.position.set(-3, 3, 4);
    scene.add(fillLight);

    bottle = new THREE.Group();
    scene.add(bottle);

    const glassMaterial = new THREE.MeshPhysicalMaterial({
        color: 0xf9fbf2,
        roughness: .23,
        metalness: 0,
        transparent: true,
        opacity: .85,
        clearcoat: 1,
        clearcoatRoughness: .12
    });

    const milkMaterial = new THREE.MeshStandardMaterial({
        color: 0xfffdf4,
        roughness: .25
    });

    const greenMaterial = new THREE.MeshStandardMaterial({
        color: 0x174734,
        roughness: .34
    });

    const capMaterial = new THREE.MeshStandardMaterial({
        color: 0x2c7048,
        roughness: .36
    });

    const goldMaterial = new THREE.MeshStandardMaterial({
        color: 0xd8b76f,
        roughness: .33,
        metalness: .35
    });

    function addMesh(geometry, material, x, y, z) {
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x, y, z);
        bottle.add(mesh);
        return mesh;
    }

    // Bottle body.
    addMesh(
        new THREE.CylinderGeometry(.70, .61, 2.02, 48),
        glassMaterial,
        0, -.17, 0
    );

    // Rounded lower rim.
    addMesh(
        new THREE.CylinderGeometry(.62, .59, .14, 48),
        glassMaterial,
        0, -1.23, 0
    );

    // Shoulder.
    addMesh(
        new THREE.CylinderGeometry(.30, .70, .45, 48),
        glassMaterial,
        0, 1.08, 0
    );

    // Neck.
    addMesh(
        new THREE.CylinderGeometry(.30, .30, .37, 40),
        glassMaterial,
        0, 1.48, 0
    );

    // Cap.
    addMesh(
        new THREE.CylinderGeometry(.34, .34, .23, 40),
        capMaterial,
        0, 1.78, 0
    );

    // Cap ridges.
    for (let i = 0; i < 24; i++) {
        const angle = i / 24 * Math.PI * 2;

        const ridge = new THREE.Mesh(
            new THREE.BoxGeometry(.022, .16, .022),
            goldMaterial
        );

        ridge.position.set(
            Math.cos(angle) * .343,
            1.78,
            Math.sin(angle) * .343
        );

        bottle.add(ridge);
    }

    // Milk fill.
    addMesh(
        new THREE.CylinderGeometry(.59, .54, 1.2, 48),
        milkMaterial,
        0, -.55, 0
    );

    // Main label.
    addMesh(
        new THREE.CylinderGeometry(.716, .716, .87, 48, 1, true),
        greenMaterial,
        0, -.12, 0
    );

    // Label borders.
    [ .34, -.56 ].forEach(y => {
        const ring = new THREE.Mesh(
            new THREE.TorusGeometry(.72, .023, 8, 48),
            goldMaterial
        );

        ring.rotation.x = Math.PI / 2;
        ring.position.y = y;
        bottle.add(ring);
    });

    // Circular emblem.
    addMesh(
        new THREE.CircleGeometry(.22, 40),
        new THREE.MeshStandardMaterial({
            color: 0xdce8c8,
            side: THREE.DoubleSide
        }),
        0, .08, .722
    );

    const emblemMaterial = new THREE.MeshStandardMaterial({
        color: 0x174734
    });

    function addBar(x, y, width, height) {
        const bar = new THREE.Mesh(
            new THREE.BoxGeometry(width, height, .02),
            emblemMaterial
        );

        bar.position.set(x, y, .745);
        bottle.add(bar);
    }

    // Abstract YD monogram.
    addBar(-.07, .14, .025, .15);
    addBar(.02, .14, .025, .15);
    addBar(-.025, .07, .11, .025);

    // Floating decorative particles.
    const particleMaterial = new THREE.MeshStandardMaterial({
        color: 0xc0d6a2,
        roughness: .25
    });

    [
        [-1.13, .95, 0],
        [1.15, .45, -.1],
        [-.95, -1.0, .15],
        [1.03, 1.13, -.2],
        [-1.2, -.12, -.3]
    ].forEach(([x, y, z], index) => {
        const sphere = new THREE.Mesh(
            new THREE.SphereGeometry(.075, 18, 18),
            particleMaterial
        );

        sphere.position.set(x, y, z);
        sphere.userData.baseY = y;
        sphere.userData.phase = index * 1.2;

        scene.add(sphere);
    });

    // Presentation platform.
    addMesh(
        new THREE.CylinderGeometry(1.35, 1.45, .10, 64),
        new THREE.MeshStandardMaterial({
            color: 0xd3dfc7,
            roughness: .6
        }),
        0, -1.48, 0
    );

    const shadow = new THREE.Mesh(
        new THREE.CircleGeometry(1.42, 48),
        new THREE.MeshBasicMaterial({
            color: 0x9cae91,
            transparent: true,
            opacity: .2
        })
    );

    shadow.rotation.x = -Math.PI / 2;
    shadow.position.set(0, -1.535, 0);
    bottle.add(shadow);

    $("#threeFallback").style.display = "none";

    setup3DControls();
    resize3D();
    animate3D();
}

function setup3DControls() {
    const canvas = renderer.domElement;

    canvas.addEventListener("pointerdown", event => {
        dragging = true;
        previousX = event.clientX;
        previousY = event.clientY;

        if (canvas.setPointerCapture) {
            canvas.setPointerCapture(event.pointerId);
        }
    });

    canvas.addEventListener("pointermove", event => {
        if (!dragging || !bottle) return;

        const dx = event.clientX - previousX;
        const dy = event.clientY - previousY;

        targetRotationY += dx * .009;
        targetRotationX += dy * .004;

        targetRotationX = Math.max(
            -.45,
            Math.min(.45, targetRotationX)
        );

        previousX = event.clientX;
        previousY = event.clientY;

        autoRotate = false;
    });

    const stopDragging = () => {
        dragging = false;
    };

    canvas.addEventListener("pointerup", stopDragging);
    canvas.addEventListener("pointercancel", stopDragging);
    canvas.addEventListener("lostpointercapture", stopDragging);

    $("#rotate3D").addEventListener("click", () => {
        autoRotate = !autoRotate;

        toast(autoRotate ? "Automatic rotation enabled." : "Rotation paused.");
    });

    $("#zoomIn3D").addEventListener("click", () => {
        cameraDistance = Math.max(4, cameraDistance - .4);
        updateCamera();
    });

    $("#zoomOut3D").addEventListener("click", () => {
        cameraDistance = Math.min(9, cameraDistance + .4);
        updateCamera();
    });

    $("#reset3D").addEventListener("click", () => {
        cameraDistance = 6.2;
        targetRotationX = 0;
        targetRotationY = 0;
        autoRotate = true;

        updateCamera();
        toast("3D view reset.");
    });
}

function animate3D() {
    if (!renderer || !scene || !camera) return;

    animationFrame = requestAnimationFrame(animate3D);

    const time = performance.now() * .001;

    if (bottle) {
        if (autoRotate && !dragging) {
            targetRotationY += .003;
        }

        bottle.rotation.y +=
            (targetRotationY - bottle.rotation.y) * .08;

        bottle.rotation.x +=
            (targetRotationX - bottle.rotation.x) * .08;

        bottle.position.y = Math.sin(time * .8) * .04;
    }

    scene.children.forEach(object => {
        if (
            object.isMesh &&
            object.userData.baseY !== undefined
        ) {
            object.position.y =
                object.userData.baseY +
                Math.sin(time + object.userData.phase) * .07;
        }
    });

    renderer.render(scene, camera);
}

function initialise3D() {
    if (!window.THREE) {
        show3DFallback();
        return;
    }

    try {
        build3DBottle();
    } catch (error) {
        console.error("3D preview initialisation failed:", error);
        show3DFallback();
    }
}

window.addEventListener("resize", resize3D);

/* ============================================
   17. FOOTER YEAR
============================================ */

$("#currentYear").textContent = new Date().getFullYear();

/* ============================================
   18. START WEBSITE
============================================ */

function initialiseWebsite() {
    renderProducts();
    updateCart();
    initialiseReveals();
    updateScrollUI();

    if (window.THREE) {
        initialise3D();
    } else {
        show3DFallback();
    }

    console.info(`${FARM.name} website loaded successfully.`);
}

if (document.readyState === "loading") {
    document.addEventListener(
        "DOMContentLoaded",
        initialiseWebsite,
        { once: true }
    );
} else {
    initialiseWebsite();
}
