// // the below URL should point to the SERVER
// const socket = new WebSocket('ws://localhost:8080');

// // Listen for messages (from server)
// socket.onmessage = ({ data }) => {
//     console.log('Message from server ', data)
// }
// document.querySelector('button').onclick = () => {
//     socket.send('hello');
// }

// connect the socket to the server
const socket = io('ws://localhost:8080');


// Listen to incoming messages
socket.on('message', text => {
    const el = document.createElement('li');
    el.innerHTML = text;
    document.querySelector('ul').appendChild(el);
})


document.querySelector('button').onclick = () => {
    const text = document.querySelector('input').value;
    socket.emit('message', text);
}