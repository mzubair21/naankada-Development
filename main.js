import './style.css'

document.addEventListener('readystatechange', function () {
  if (this.readyState == 'complete') {
    setTimeout(() => {
      document.querySelector('#body').classList.remove('hidden')
      document.querySelector('#body').style.opacity = 1
      const loader = document.querySelector('.loader')
      loader.style.opacity = 0
      setTimeout(() => {
        loader.classList.add('hidden')
      }, 100)
    }, 300)
  }

  //Navbar Toggler
  const navbar = document.getElementById('nav-toggler')
  navbar.addEventListener('click', () => {
    document.querySelector('.navbar').classList.toggle('active')
  })
  const nav = document.getElementById('nav-toggler')
  nav.addEventListener('click', () => {
    document.querySelector('.nav').classList.toggle('active')
  })

  //Onscroll

  window.addEventListener('scroll', function () {
    if (window.scrollY > 100) {
      document.querySelector('.navbar').classList.remove('fixed')
      document.querySelector('.navbar').classList.add('sticky')
    } else {
      document.querySelector('.navbar').classList.add('fixed')
      document.querySelector('.navbar').classList.remove('sticky')
    }
  })

  //links
  var fb = 'https://www.facebook.com/Naankada/'
  var insta = 'https://www.instagram.com/naankada'
  var linkedin = 'https://www.instagram.com/naankada'

  var links = document.querySelectorAll('.link')
  links.forEach((link) => {
    link.target = '_blank'
    if (link.classList.contains('fb')) link.href = fb
    else if (link.classList.contains('linkedin')) link.href = linkedin
    else if (link.classList.contains('insta')) link.href = insta
  })
})
