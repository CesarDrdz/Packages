

function decrypt(data) {
    return 'decrypted data';
}

function read() {
    return decrypt('data');
}

// this is not TLS just  an example. 

module.exports = {
    read,
}