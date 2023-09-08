function contactFormValidation() {
  //get all element onto the DOM
  const contactNames = document.getElementById("firstname").value;
  const contactEmail = document.getElementById("email").value;
  const contactSubject = document.getElementById("subject").value;
  const contactMsg = document.getElementById("message").value;
  const errorMsg = document.getElementById("contact-error");
  let errorText; // Will hold error msg

  if (contactNames === "" || contactNames.length < 2) {
    errorText = "Please! let me know who is contacting!";
    errorMsg.innerHTML = errorText;
    return false;
  }
  if (contactEmail === "" || contactEmail.indexOf("@") == -1) {
    errorText = "Your email please!";
    errorMsg.innerHTML = errorText;
    return false;
  }
  if (contactSubject === "" || contactSubject.length < 5) {
    errorText = "Please! Enter  your subject!";
    errorMsg.innerHTML = errorText;
    return false;
  }
  if (contactMsg === "" || contactMsg < 30) {
    errorText = "Your message should be meaningful!";
    errorMsg.innerHTML = errorText;
    return false;
  }
  return true;
}
