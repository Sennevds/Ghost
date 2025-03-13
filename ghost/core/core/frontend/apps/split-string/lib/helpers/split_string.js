require('../../../../services/handlebars');

module.exports = function splitString(text, separator) {
    return text.split(separator).map((item) => item.trim());
};  