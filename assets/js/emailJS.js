(function () {
    emailjs.init("user_4QgUIJkPSvelEHJpPosvP");
})();

window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        emailjs.sendForm('emailJSOutlook', 'bbEmailTemplate')
            .then(function () {
                console.log('SUCCESS!');
            }, function (error) {
                console.log('FAILED...', error);
            });
    });
}