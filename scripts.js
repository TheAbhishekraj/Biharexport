// Payment Gateway Integration (Razorpay)
function startPayment(amount) {
    const options = {
        key: "YOUR_RAZORPAY_KEY",
        amount: amount * 100, // ₹500 = 50000 paise
        currency: "INR",
        name: "Bihar Agri Exports",
        description: "Sample Purchase",
        handler: function(response) {
            alert("Payment ID: " + response.razorpay_payment_id);
        }
    };
    new Razorpay(options).open();
}

// Form Handling (Using Formspree)
document.getElementById("enquiryForm").addEventListener("submit", (e) => {
    e.preventDefault();
    fetch("https://formspree.io/f/YOUR_FORMSPREE_ID", {
        method: "POST",
        body: new FormData(e.target),
        headers: { "Accept": "application/json" }
    }).then(response => {
        if (response.ok) {
            alert("Enquiry submitted!");
        }
    });
});
