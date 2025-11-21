
// ================ MOBILE MENU TOGGLE (Perfect & Smooth) ================
let hamburgerControl = false;

function showMenu() {
    const hamburgerIcon = document.getElementById("hamburgerIcon");
    const navItems = document.getElementById("navItems");

    if (!hamburgerControl) {
        // Open menu
        hamburgerIcon.innerHTML = '<i class="fa-solid fa-xmark text-3xl"></i>';
        navItems.classList.remove("hidden");
        navItems.classList.add("flex", "flex-col", "absolute", "top-full", "left-0", "w-full", 
                             "bg-gradient-to-b", "from-blue-950", "to-indigo-900", 
                             "py-10", "shadow-2xl", "z-50");
        navItems.querySelectorAll("a").forEach(link => {
            link.classList.add("text-White", "text-2xl", "font-medium", "py-4", "hover:text-yellow-400", "transition");
        });
        hamburgerControl = true;
    } else {
        // Close menu
        hamburgerIcon.innerHTML = '<i class="fa-solid fa-bars text-3xl"></i>';
        navItems.classList.add("hidden");
        hamburgerControl = false;
    }
}

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
