
function cpfLimpo(cpf){
  return cpf.replace(/\D+/g, '');
}

function calculaDigitos(arrayDigitos, valor){
  const total = arrayDigitos.reduce( (acumulador, numero, chave, arrayCompleto, multiplicador=valor) => {
    return acumulador += Number(numero) * (multiplicador - chave)
  },0);

  let digitoPrimeiraEtapa = 11 - (total % 11)
  return digitoPrimeiraEtapa > 9 ? 0 : digitoPrimeiraEtapa
}

function validaCPF(cpf){
  let cpfStringNumeros = cpfLimpo(cpf)
  let cpfNumbersOriginal =  Array.from(cpfStringNumeros)
  let cpfNumbers =  Array.from(cpfStringNumeros.slice(0,9))
  
  let digitoPrimeiraEtapa = calculaDigitos(cpfNumbers, 10)
  cpfNumbers.push(String(digitoPrimeiraEtapa))

  let digitoSegundaEtapa = calculaDigitos(cpfNumbers, 11)
  cpfNumbers.push(String(digitoSegundaEtapa))

  cpfNumbersOriginal = cpfNumbersOriginal.toString().replace(/\D+/g, '')
  cpfNumbers = cpfNumbers.toString().replace(/\D+/g, '')
  
  return cpfNumbersOriginal === cpfNumbers ? true : false
  
}


