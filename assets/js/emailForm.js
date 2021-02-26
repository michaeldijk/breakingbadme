// emailJS form from CI lecture, adjusted
function sendMail(contactForm) {
    emailjs.send("emailJSOutlook", "bbEmailTemplate", {
            // take values from form, and pass it to emailJS    
            "from_firstname": contactForm.fname.value,
            "from_email": contactForm.email.value,
            "story": contactForm.story.value,
        })
        .then(
            // pop-up showing message send
            function (response) {
                alert("Your message has been send succesfully!");
            },
            // else, pop-up showing message failed to send
            function (error) {
                alert("Message couldn't be send, please try again...", error);
            });
    // return false to not reset page.
    return false;
}