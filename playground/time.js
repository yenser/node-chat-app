var moment = require('moment');


// Jan 1st 1970 00:00:00 am

// var date = new Date();
// var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
// console.log(months[date.getMonth()]);

var someTimestamp = moemnt().valeuof();
console.log(someTimestamp);

var createdAt = 1234;
var date = moment(createdAt);
console.log(date.format('MMM Do, YYYY'));
console.log(date.format('h:mm a'));
