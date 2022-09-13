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
      }, 300)
    }, 0)
  }

  //Navbar Toggler
  const nav_toggler = document.getElementById('nav-toggler')
  nav_toggler.addEventListener('click', () => {
    document.querySelector('.navbar').classList.toggle('active')
  })

  //Onscroll

  window.addEventListener('scroll', function () {
    if (window.scrollY > 100) {
      document.querySelector('.navbar').classList.remove('fixed')
      document.querySelector('.navbar').classList.add('sticky')

      console.log('chalo bhai')
    } else {
      document.querySelector('.navbar').classList.add('fixed')
      document.querySelector('.navbar').classList.remove('sticky')
    }
  })
})
