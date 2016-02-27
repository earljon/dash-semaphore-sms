#dash-semaphore-sms

An [Amazon Dash](http://www.amazon.com/gp/product/B00WJ12MQ8?redirect=true&ref_=s9_al_bw_g570_i1) button service to trigger sending of SMS via Semaphore API. This is useful in case you like to alert someone when your home is under attack and/or any event that you like to send a message without composing it -- all you have to do is push this button! 

## Pre-Requisite

To know your Amazon Dash MAC address, please follow the [node-dash-button](https://github.com/hortinstein/node-dash-button) instructions.

## Installation

	npm install

## Configuration

Copy *config.json.sample* to *config.json* and update with your data. You need to configure the following:

	- device: Your Amazon Dash MAC address
	- semaphore: Your API key from Semaphore
	- message: Specify recipient and sms message. Optional: set also the sender id if you're allowed.

Please provide your **Semaphore API KEY** before running the application. You can get your key by subscribing to their [homepage](http://semaphore.co/)

## Usage

	node index.js

## Screenshot
![Sample Dash on Terminal](http://i.imgur.com/3aHOTGe.png)

## Revision History
* 0.0.1 - Initial commit

## Acknowledgements

* Edward Bensen (for his article on Medium that first inspired this)
* Alex Hortin (for his node-dash-button module).
* Bryan Wong (for my free Amazon Dash)

## License
MIT