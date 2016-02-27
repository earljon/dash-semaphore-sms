var config = require('./config');
var dash_button = require('node-dash-button');
var dash = dash_button(config.device.mac_address);

var Semaphore = require('node-semaphore-sms');

dash.on("detected", function (){
    console.log("Amazon Dash Request -- Sending SMS via Semaphore");

    var sms = new Semaphore(config.semaphore.api_key);

	var payload = {
		from: config.message.from,
		to: config.message.to,
		message: config.message.body
	};

    sms.sendsms(payload, function(error, result) {
    	if (!error) {
    		console.log(result);

            sms.status(function(error, result) {
                if(!error) {
                    var status = JSON.parse(result);
                    console.log('Current SMS Balance: ' + status.balance);
                }
            })
    	} else
    		console.log(error);
    });
});

