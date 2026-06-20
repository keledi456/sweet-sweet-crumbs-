// ===============================
// 🍔 MOBILE MENU TOGGLE
// ===============================
function toggleMenu() {
    let menu = document.getElementById("navMenu");
    menu.classList.toggle("active");
}


// ===============================
// 📩 CONTACT FORM VALIDATION
// ===============================
function validateContactForm() {
    let name = document.forms["contactForm"]["name"].value;
    let email = document.forms["contactForm"]["email"].value;
    let message = document.forms["contactForm"]["message"].value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return false;
    }

    if (!email.includes("@")) {
        alert("Please enter a valid email address.");
        return false;
    }

    alert("Message sent successfully!");
    return true;
}


// ===============================
// 🧁 ENQUIRY FORM VALIDATION
// ===============================

// Enquiry form
document.getElementById("enquiryForm")?.addEventListener("submit", function(e) {
e.preventDefault();
document.getElementById("response").innerText = "Enquiry submitted successfully!";
});

// Search function
const search = document.getElementById("search");

if (search) {
search.addEventListener("keyup", function() {
let filter = search.value.toLowerCase();
let items = document.querySelectorAll("#productList li");

items.forEach(item => {
item.style.display = item.textContent.toLowerCase().includes(filter) ? "" : "none";
});
});
}

// ===============================
// 🔍 PRODUCT SEARCH FUNCTION
// ===============================
function searchProducts() {
    let input = document.getElementById("search").value.toLowerCase();
    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        let text = card.innerText.toLowerCase();
        if (text.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}


// ===============================
// 🖼️ IMAGE LIGHTBOX (GALLERY)
// ===============================
document.addEventListener("DOMContentLoaded", function () {
    let images = document.querySelectorAll(".gallery-img");
    let lightbox = document.getElementById("lightbox");
    let lightboxImg = document.getElementById("lightbox-img");

    if (images.length > 0) {
        images.forEach(img => {
            img.addEventListener("click", () => {
                lightbox.style.display = "flex";
                lightboxImg.src = img.src;
            });
        });
    }
});

// Close lightbox
function closeLightbox() {
    let lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none";
}
