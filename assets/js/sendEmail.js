function sendMail(contactForm) {
    emailjs.send('service_iv8f1qf', 'template_agfy8rz', {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value,
    })
    .then(
        function(response) {
            const success = document.createElement("div");
            const newContent = document.createTextNode('Form successfully submitted!');
            success.appendChild(newContent);
            $(success).addClass('alert alert-success');
            $(success).attr('role', 'alert');

            console.log("SUCCESS", response);
            document.getElementById("form-submit").replaceWith(success);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );

    return false;
}