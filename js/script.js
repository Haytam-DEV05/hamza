document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault()

  const user = document.getElementById('username').value
  const pass = document.getElementById('password').value
  const error = document.getElementById('errorMsg')
  const spinner = document.getElementById('spinner')
  const sound = document.getElementById('successSound')
  const flash = document.getElementById('flash')
  const box = document.getElementById('box')

  if (user === 'admin' && pass === '1234') {
    localStorage.setItem('admin', user)
    error.style.display = 'none'
    spinner.style.display = 'block'
    flash.style.display = 'block'

    if (sound) sound.play()

    setTimeout(() => {
      box.style.opacity = '0'
      box.style.transform = 'scale(0.9)'
      setTimeout(() => {
        window.location.href = 'home.html'
      }, 800)
    }, 1500)
  } else {
    error.style.display = 'block'
    if (navigator.vibrate) navigator.vibrate(200)
  }
})