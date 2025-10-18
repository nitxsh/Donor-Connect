const scriptURL = "https://script.google.com/macros/s/AKfycbwzS4bi1KbOHQgQOblmVHBIioNYFIFb1lvJDnZRkswwdqqJ3A8tVdsukxwXL2hy1sASyQ/exec";

// Function to handle any form by ID
function handleForm(formId) {
  const form = document.getElementById(formId);
  if (!form) return; // skip if page doesn't have the form

  form.addEventListener("submit", e => {
    e.preventDefault();

    const formData = new FormData(form);

    fetch(scriptURL, {
      method: "POST",
      body: formData
    })
      .then(res => res.json())
      .then(result => {
        alert("✅ Submitted successfully!");
        form.reset();
      })
      .catch(error => {
        alert("❌ Error submitting request: " + error.message);
        console.error("Error:", error);
      });
  });
}

// Apply to both forms
handleForm("donorForm");
handleForm("requestForm");
	