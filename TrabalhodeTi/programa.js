function segundograu()
{
var a = document.getElementById('a').value;
var b = document.getElementById('b').value;
var c = document.getElementById('c').value;
var delta = (b**2)-(4*a*c)
if (delta > 0){
    alert('Haverá duas raízes diferentes. X1: ' + (-(b) + Math.sqrt(delta)) / (2*a) + 
    ' X2: ' + (-(b) - Math.sqrt(delta)) / (2*a))
}
else if (delta == 0){
    alert('Haverá duas raízes iguais! X1 == X2 = ' + (-(b) + Math.sqrt(delta)) / (2*a))
}
else{
    alert('Não haverá raízes reais.')
}


}