const auth = require('basic-auth');
const compare = require('tsscmp');
const check = (name, pass) => {
    let valid = true;
    valid = compare(name, 'admin') && valid;
    valid = compare(pass, '12345') && valid;
    return valid;
};
const basicAuth = (request, response, next) => {
    const credentials = auth(request);
    if (credentials && check(credentials.name, credentials.pass)) {
        return next();
    }
    else {
        response.set('WWW-Authenticate', 'Basic realm="nhap tai khoan, mat khau truy cap"');
        return response.status(401).send("khong co quyen vo");
    }
};
module.exports = basicAuth;