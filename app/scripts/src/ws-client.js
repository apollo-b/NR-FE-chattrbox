let socket;

function init(url) {
  socket = new WebSocket(url);
  console.log('ws-client,socket.init: ' + 'connecting...');
}

function registerOpenHandler (handlerFunction) {
  socket.onopen = () => {
    console.log('registerOpenHandler:' + 'open');
    handlerFunction();
  };
}

function registerMessageHandler (handlerFunction) {
  socket.onmessage = (e) => {
    console.log('registerMessageHandler: ' + 'message', e.data);
    let data = JSON.parse(e.data);
    handlerFunction(data);
  };
}

function sendMessage (payload) {
  socket.send(JSON.stringify(payload));
}

export default {
  init,
  registerOpenHandler,
  registerMessageHandler,
  sendMessage
}
