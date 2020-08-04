const messages = [
    'erika',
    'patricia',
    'andrea',
    'carolina',
    'sara',
    'paulina',
    'camila',
    'oscar',
    'juan'
];


const randomMsg = () => {
    const msg = messages[Math.floor(Math.random() * messages.length)];
    console.log(msg);
};

module.exports = { randomMsg };