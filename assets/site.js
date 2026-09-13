(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.primary-nav');
  var groups = document.querySelectorAll('.nav-group');
  var viewportWidth = window.innerWidth;

  function closeGroups() {
    groups.forEach(function (group) { group.removeAttribute('open'); });
  }

  function closeNavigation() {
    closeGroups();
    if (!toggle || !nav) return;
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
      if (!open) closeGroups();
    });
  }

  groups.forEach(function (group) {
    group.addEventListener('toggle', function () {
      if (!group.open) return;
      groups.forEach(function (other) {
        if (other !== group) other.removeAttribute('open');
      });
    });
  });

  document.addEventListener('click', function (event) {
    groups.forEach(function (group) {
      if (group.open && !group.contains(event.target)) group.removeAttribute('open');
    });
  });

  document.addEventListener('keydown', function (event) {
    if (event.key !== 'Escape') return;
    var mobileMenuWasOpen = toggle && nav && nav.classList.contains('is-open');
    if (mobileMenuWasOpen) event.preventDefault();
    closeNavigation();
    if (mobileMenuWasOpen) toggle.focus();
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth === viewportWidth) return;
    viewportWidth = window.innerWidth;
    closeGroups();
    if (window.innerWidth > 1024) closeNavigation();
  });
})();
