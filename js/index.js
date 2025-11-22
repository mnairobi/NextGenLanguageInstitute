const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenu = document.getElementById("closeMenu");

// Open menu
menuBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("hidden");
    mobileMenu.classList.add("flex");
});

// Close menu
closeMenu.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    mobileMenu.classList.remove("flex");
});


// ================ CONTACT FORM → SENDS TO YOUR GMAIL ================
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#contact form");
    const submitBtn = form.querySelector("button[type='submit']");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Basic validation
        const name = form.querySelector("input[type='text']").value.trim();
        const email = form.querySelector("input[type='email']").value.trim();
        const message = form.querySelector("textarea").value.trim();

        if (!name || !email || !message) {
            alert("Please fill in all fields.");
            return;
        }

        // Show loading
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-2"></i>Sending...';

        emailjs.send("service_mb7812y", "template_q3070gi", {
            from_name: name,
            from_email: email,
            message: message
        })
        .then(function () {
            alert("Thank you! Your message has been sent successfully. We’ll reply very soon! ");
            form.reset();
            submitBtn.innerHTML = "Send Message";
            submitBtn.disabled = false;
        }, function (error) {
            alert("Oops! Something went wrong. Please email us directly:\nnextgenlanguageinstitute@gmail.com");
            console.error("EmailJS Error:", error);
            submitBtn.innerHTML = "Send Message";
            submitBtn.disabled = false;
        });
    });
});
