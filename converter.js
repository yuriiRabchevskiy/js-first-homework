var euro = prompt('Please, enter the required number of euro');
var dolar = prompt('Please, enter the required number of dolar');
// rate against the evro 16.05.2017 00:30 http://finance.i.ua
var grnEuro = 29.0241;
// rate against the dolar 16.05.2017 00:30 http://finance.i.ua
var grnDolar = 26.2304;
// how much grns as necessary to convert the entered number evro
var userEvro = euro * grnEuro / 1;
// how much grns as necessary to convert the entered number dolar
var userDolar = dolar * grnDolar / 1;
// the ratio of the euro - dollar
var ratio = grnEuro / grnDolar;
// result
alert(euro + ' ' + 'euros are equal' + ' ' + grnEuro + ' ' + 'grns,' + ' ' + dolar + '$ are equal' + ' '
     + userDolar + ' ' + 'grns' + ', one euro is equal' + ' ' + ratio.toFixed(4) + '$.');