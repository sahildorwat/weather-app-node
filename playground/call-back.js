
const getUser = (id, callback) => { 
    const user = { id , name : 'sahil'};
    setTimeout( () => callback(user), 2000);
}


getUser(21, (user) => console.log(user));