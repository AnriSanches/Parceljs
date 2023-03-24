console.log('Hello world');

const formRef = document.querySelector('.user-form');

const refs = {
    inputPassword: formRef.firstElementChild,
    inputEmail: document.querySelector('#user-email'),
    labelButton: formRef.lastElementChild,
};

formRef.addEventListener('submit', onButtonSubmit);

function onButtonSubmit(event) {
    event.preventDefault();

    const {
        elements: { name, email, password },
    } = event.currentTarget;

    const newData = [];

    // if (password.value === '' || email.value === '') {
    //     return alert('wrong input');
    // }

    const Joi = require('joi');

    const schema_password = Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'));

    const repeat_password = Joi.ref('password');

    if (password) {
        const { error, value } = schema_password.validate(password.value);

        if (!error) {
            newData.push({ password: value });
        }

        if (error) {
            alert('Enter a valid field');
        }
    }

    const schema_email = Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: ['com', 'net'] },
    });

    if (email) {
        const { error, value } = schema_email.validate(email.value);

        if (!error) {
            newData.push({ email: value });
        }
    }

    const schema_name = Joi.string().alphanum().min(5).max(30).required();

    if (name) {
        const { error, value } = schema_name.validate(name.value);
        if (!error) {
            newData.push({ name: value });
        }
    }

    return console.log(newData);
}
