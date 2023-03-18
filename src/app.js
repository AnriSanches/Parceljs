console.log('Hello world');

const formRef= document.querySelector('.user-form');

const refs = {
    inputPassword: formRef.firstElementChild,
    inputEmail: document.querySelector('#user-email'),
    labelButton: formRef.lastElementChild,  
};

formRef.addEventListener('submit', onButtonSubmit);

function onButtonSubmit (event) {
    event.preventDefault();
    const {elements: {password, email}} = event.currentTarget

    if(password.value === '' || email.value === '') {
        return alert('wrong input');
    }

    const Joi = require('joi');

const schema = Joi.string()
.alphanum()
.min(3)
.max(30)
.required();

const {error, value} = schema.validate(password.value);

if(!error) {
    return
}

alert(error)

};





