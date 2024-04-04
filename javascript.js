document.addEventListener("DOMContentLoaded", function () {
  // Add click animation to the button
  var submitBtn = document.getElementById("submit-btn");
  submitBtn.addEventListener("click", function () {
    submitBtn.classList.add("clicked");
    setTimeout(function () {
      submitBtn.classList.remove("clicked");
    }, 300);
  });

  // Handle form submission
  var form = document.getElementById("contact-form");
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Get form data
    var formData = new FormData(form);
    var name = formData.get("name");
    var email = formData.get("email");
    var message = formData.get("message");

    // Do something with the form data (e.g., send it to a server)
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Contact:", contact);
    console.log("Message:", message);

    // Reset form fields
    form.reset();
  });
});
