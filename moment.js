var moment = require('moment');
var now = moment();

var timestamp = 1588146858096;
var timestampMoment = moment.utc(timestamp);
console.log(timestampMoment.format());

console.log(timestampMoment.format('h:mm a'));
console.log(timestampMoment.local().format('h:mm a'));
now.subtract(1,'year');
// console.log(now.valueOf());
 console.log(now.format());
// console.log(now.format('X'));
// console.log(now.format('h:mm'));
// console.log(now.format('MMM Do YYYY, h:mma'));