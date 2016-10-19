const path = require('path');

const PORT = process.env.PORT || 80;
const TARGET = path.join(__dirname, 'target');

const express = require('express');
const WebSocketServer = require('ws').Server;
const http = require('http');
const app = express();

app.use(express.static(TARGET));

app.get('/', function(request, response) {
	response.sendFile(path.join(TARGET, 'index.html'));
});

const server = http.createServer(app);
server.listen(PORT, () => console.log(PORT));

const wss = new WebSocketServer({server: server});

wss.on('connection', function(ws) {
	const ping = setInterval(() => 
		ws.send(JSON.stringify(new Date()), () => {})
	, 1000);
	ws.on('message', data => () => { /* TODO */ });
	ws.on('close', () => clearInterval(ping));
});
