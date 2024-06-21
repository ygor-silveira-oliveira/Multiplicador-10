var cal = document.querySelector('input#txtcal').addEventListener('click', () => {
  let valor = document.querySelector('input#txtnum')
  let res = document.querySelector('div#res')
  
  if(valor.value.length == 0){
    window.alert('Por favor, digite um número!')
  }else{
    let num = Number(valor.value)
    res.innerHTML = `Tabuada do <strong>${num}</strong> <br>`
    for(let i=1; i <= 10;i++){
    let soma = i * num
    res.innerHTML += `${num} x ${i} = ${soma}<br> `
  }
  
}
})
