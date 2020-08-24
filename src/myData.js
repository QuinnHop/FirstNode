const message = 'hello other world';

const getMessage = () => {
    console.log(message);
    return message;
}

module.exports = {
    getMessage,
}