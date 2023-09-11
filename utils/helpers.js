const Handlebars = require('handlebars');

Handlebars.registerHelper('format_date', (date) => {
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
});