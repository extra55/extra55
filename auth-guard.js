// ===============================
// 🔐 Auth Guard - حماية الصفحات
// ===============================

// منع الدخول إذا غير مسجل
if (!localStorage.getItem("loggedIn")) {
  window.location.replace("auth.html");
}

// منع الرجوع بالـ Back بعد تسجيل الخروج
window.history.pushState(null, "", window.location.href);
window.onpopstate = function () {
  if (!localStorage.getItem("loggedIn")) {
    window.location.replace("auth.html");
  }
};
