function equacionar(){
    /* Atribuir as variáveis com o valor do A,B e C */
    var a = document.getElementById('a').value
    var b = document.getElementById('b').value
    var c = document.getElementById('c').value

    /* Calcular DELTA (VARIÁVEL) */
    delta = ((b**2) - (4 * a * c))

    /* Se delta for maior que zero */
    if (delta > 0){
        alert('(DELTA > 0): Há duas raízes diferentes.')
        alert('X1: ' + ((-b) + Math.sqrt(delta)) / (2 * a) +
         '\nX2: ' + (((-b) - Math.sqrt(delta)) / (2 * a)))
    }
    
    /* Se delta for igual a zero */
    else if (delta == 0){
        alert('DELTA = 0: Há duas raízes iguais.')
        alert('X1: ' + ((-b) + Math.sqrt(delta)) / (2 * a) +
        '\nX2: ' + (((-b) - Math.sqrt(delta)) / (2 * a)))
    }

    /* Se delta for MENOR que zero. */
    else{
        alert('Não há raízes reais.')
    }
}
