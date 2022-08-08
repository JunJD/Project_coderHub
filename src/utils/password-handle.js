const cryptp = require('crypto')

const md5password = (password) => {
        const md5 = cryptp.createHash('md5')
        const result = md5.update(String(password)).digest('hex')
        return result
}

module.exports = md5password