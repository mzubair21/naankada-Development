import './style.css'

document.addEventListener('readystatechange', function () {
  if (this.readyState == 'complete') {
    document.querySelector('#body').classList.remove('hidden')
    document.querySelector('#body').style.opacity = 1
    const loader = document.querySelector('.loader')
    loader.style.opacity = 0
    setTimeout(() => {
      loader.classList.add('hidden')
    }, 300)
  }
})
