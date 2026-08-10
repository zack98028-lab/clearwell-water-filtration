document.addEventListener('DOMContentLoaded', function () {
  var burger = document.getElementById('burgerBtn');
  var links = document.getElementById('navLinks');
  if (burger && links) {
    burger.addEventListener('click', function () {
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('open'); });
    });
  }

  var form = document.getElementById('testForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var required = form.querySelectorAll('[required]');
      var valid = true;
      required.forEach(function (f) {
        if (!f.value.trim()) { valid = false; f.style.borderColor = '#B0603F'; }
        else { f.style.borderColor = ''; }
      });
      if (!valid) return;
      form.style.display = 'none';
      document.getElementById('formSuccess').style.display = 'block';
      window.scrollTo({ top: form.offsetTop - 120, behavior: 'smooth' });
    });
  }
});
