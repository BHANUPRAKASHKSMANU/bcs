// Small interactions: nav toggle, year, and simple form validation
document.addEventListener('DOMContentLoaded',function(){
  var nav = document.getElementById('siteNav');
  var btn = document.getElementById('navToggle');
  btn.addEventListener('click',function(){
    nav.classList.toggle('open');
  });

  // year
  var y = new Date().getFullYear();
  var yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = y;

  // form
  var form = document.getElementById('contactForm');
  var msg = document.getElementById('formMsg');
  form.addEventListener('submit',function(e){
    e.preventDefault();
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();
    if(!name || !email || !message){
      msg.textContent = 'Please complete all fields.';
      msg.style.color = 'tomato';
      return;
    }
    // pretend to send
    msg.style.color = '';
    msg.textContent = 'Thanks — your message was sent (demo).';
    form.reset();
  });
});
