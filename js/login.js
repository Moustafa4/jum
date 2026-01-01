document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var input = document.getElementById("emailOrPhone").value.trim();
    var errorMessage = document.getElementById("errorMessage");

    var emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    var phoneRegex = /^[0-9]{10,15}$/;

    if (emailRegex.test(input) || phoneRegex.test(input)) {
      errorMessage.textContent = "";
      alert("  تم تسجيل الدخول بنجاح! ✅");
      this.submit();
      window.location.href = "../pages/home.html";
    } else {
      errorMessage.textContent =
        "يرجى إدخال بريد Gmail صالح أو رقم هاتف صحيح 📌";
    }
  });
