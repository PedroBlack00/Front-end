setInterval(function () {
  let data = new Date()
  let hora = data.getHours()
  let minutos = data.getMinutes()
  let segundo = data.getSeconds()
  const time = document.getElementById('clock')

  if (hora < 10) {
    hora = '0' + hora
  }
  if (minutos < 10) {
    minutos = '0' + minutos
  }
  if (segundo < 10) {
    segundo = '0' + segundo
  }
  const novo = `${hora}: ${minutos}: ${segundo}`
  time.innerHTML = novo
})
