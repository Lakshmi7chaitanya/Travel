//book
document.getElementById("booking-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var whereTo = document.getElementById("where-to").value;
    var howMany = document.getElementById("how-many").value;
    var arrivals = document.getElementById("arrivals").value;
    var leaving = document.getElementById("leaving").value;
    var details = document.getElementById("details").value;


  // Simulate booking process
    alert("Booking Successful!\n\n" +
          "Destination: " + whereTo + "\n" +
          "Number of People: " + howMany + "\n" +
          "Arrival Date: " + arrivals + "\n" +
          "Leaving Date: " + leaving + "\n" +
          "Details: " + details);

    
     fetch('/api/book', {
      method: 'POST',
      headers: {
             'Content-Type': 'application/json',
         },
         body: JSON.stringify({
             whereTo: whereTo,
             howMany: howMany,
             arrivals: arrivals,
             leaving: leaving,
             details: details
         }),
     }).then(response => response.json()).then(data => {
         console.log('Success:', data);
     }).catch((error) => {
         console.error('Error:', error);
     });
});

//about
function toggleMoreContent() {
    var moreContent = document.getElementById("more-content");
    var btnText = document.getElementById("about-btn");

    if (moreContent.style.display === "none") {
        moreContent.style.display = "block";
        btnText.textContent = "Read Less";
    } else {
        moreContent.style.display = "none";
        btnText.textContent = "Read More...";
    }
}


//review form 
document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const destination = document.getElementById('destination').value;
    const reviewText = document.getElementById('review').value;
    const rating = document.getElementById('rating').value;

    const reviewsSection = document.querySelector('.reviews-section .row');

    const newReview = document.createElement('div');
    newReview.classList.add('col-md-4', 'mb-4');
    newReview.innerHTML = `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Visited ${destination}</h6>
                <p class="card-text">"${reviewText}"</p>
                <div class="rating">
                    <span>${'&#9733;'.repeat(rating) + '&#9734;'.repeat(5 - rating)}</span>
                </div>
            </div>
        </div>
    `;

    reviewsSection.appendChild(newReview);

    document.getElementById('reviewForm').reset();
});


//contact
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const message = document.getElementById('contactMessage').value;

    // Display an alert message
    alert(`Thank you, ${name}! Your message has been sent.`);

    // Clear the form
    document.getElementById('contactForm').reset();
});
