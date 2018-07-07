console.log('starting app');


setTimeout( () => {
    console.log('in setTime out');
}, 2000);


setTimeout( () => {
    console.log('in setTime out2');
}, 0);

console.log('finishing app');