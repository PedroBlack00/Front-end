function calcular() {
  let anos = document.getElementById('input[id="anos"]')
  let x = document.getElementById('x')
  let calc = document.getElementById('soma')

  calc.addEventListener('click', () => {
    x = parseInt(anos)
    console.log(x)
    x.value = x
  })
}
