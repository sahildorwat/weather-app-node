const rq = require('request');


rq({
   url: 'https://maps.googleapis.com/maps/api/geocode/json?address=2016%20gorman%20street',
	json: true
}, (error,response,body) => {
	console.log(JSON.stringify(body, undefined, 2));
});
