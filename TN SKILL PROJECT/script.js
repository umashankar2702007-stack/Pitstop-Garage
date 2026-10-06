// Book Service Button

function bookService() {
    alert(
        "Thank you for choosing PitStop Garage!\n\n" +
        "Our service team will contact you soon."
    );
}


// FAQ Accordion

let questions = document.querySelectorAll(".faq-question");

questions.forEach(function(question) {

    question.addEventListener("click", function() {

        let answer = this.nextElementSibling;

        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }

    });

});