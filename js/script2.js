//emailjs

function sendMail() {
  (function () {
    emailjs.init("D4EFA7xsa90EaOx6e");
  })();

  var params = {
    sendername: document.querySelector("#sendername").value,
    to: document.querySelector("#to").value,
    subject: document.querySelector("#subject").value,
    replyto: document.querySelector("#replyto").value,
    message: document.querySelector("#message").value,
  };
  var serviceID = "service_8rf4cqi";
  var templateID = "template_ge96bnc";
  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      alert("Email send successfully!");
    })
    .catch((error) => {
      alert("Failed to send email. Please try again later.");
      console.error("Error:", error);
    });
}
