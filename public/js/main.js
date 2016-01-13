
window.onload = function() {
  window.addEventListener('scroll', requestTick, false)

  var nav = document.querySelector('navigation')
  var body = document.querySelector('body')
  nav.addEventListener('mouseenter', function() {
    body.className += ' nav-open'
  })
  nav.addEventListener('mouseleave', function() {
    body.className = body.className.split(' ').filter(c => c != 'nav-open').join(' ')
  })
}

function windowTop() {
  return (window.pageYOffset || document.scrollTop) - (document.clientTop || 0)
}

let ticking
function requestTick() {
  if (!ticking) {
    requestAnimationFrame(update)
    ticking = true
  }
}
function update() {
  let nav = document.querySelector('.nav-list')
  nav.style.top = windowTop() + 'px'
  ticking = false
}
