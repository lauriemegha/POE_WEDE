const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {

    bookingForm.addEventListener("submit", function(event) {

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let service = document.getElementById("service").value;

        if (name.length < 2) {
            alert("Please enter a valid name.");
            event.preventDefault();
            return;
        }

        if (!email.includes("@")) {
            alert("Please enter a valid email address.");
            event.preventDefault();
            return;
        }

        if (service === "") {
            alert("Please select a service.");
            event.preventDefault();
            return;
        }

        alert("Booking request submitted successfully!");

    });

}
/* Mobile navigation menu */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if(menuToggle && navMenu){

    menuToggle.addEventListener("click", function(){

        navMenu.classList.toggle("show");

    });

}