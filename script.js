var name = prompt('Please, enter your Name', 'Yurii Rabchevskiy');
var date = new Date();
var occurrent = prompt('Please, write your event', 'meeting');
var place = prompt('Please, write your place', 'Lviv');

console.log(name + ' ' + 'has a ' + occurrent + ' ' + date.getHours() + ':' + date.getMinutes() + ' somewhere in '+ place);