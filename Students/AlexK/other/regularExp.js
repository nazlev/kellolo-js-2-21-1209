class changeQuotes {
  constructor(string, work = 1) {
    this.str = string;
    this.work = work;
    this.regExp = null;
    this._init()
  }
  _init() {
    this.work == 1 ? this.regExp = /'/gi : this.regExp = /'(?=\s\S)/gi;
    console.log(this.str.replace(this.regExp, '"'));
  }
}

new changeQuotes(`firstQuote:' secondQuote:' thirdQuote:' fourthQuote:' fifthQuote: aren't `);
new changeQuotes(`firstQuote:' secondQuote:' thirdQuote:' fourthQuote:' fifthQuote: aren't `, 0);


let name = document.getElementById('_name');
let phone = document.getElementById('_phone');
let mail = document.getElementById('_mail');



function checkName(name) {
  let regExp = /^([a-z]+\s?){0,}$/i;
  return regExp.test(name);
}

function checkMail(mail) {
  let regExp = /(^\s?$)|((.+)@(.+)\.(.+){2,3})/i;
  return regExp.test(mail);
}

function checkPhone(phone) {
  let regExp = /\+\d{1}\(\d{3}\)\d{3}-\d{4}/i;
  return regExp.test(phone);
}

document.getElementById('homework').addEventListener('keyup', (ev) => {
  switch (ev.target.name) {
    case 'name':
      checkName(name.value) ? name.classList.remove('error') : inputError(name);
      break;
    case 'mail':
      checkMail(mail.value) ? mail.classList.remove('error') : inputError(mail);
      break;
    case 'phone':
      checkPhone(phone.value) ? phone.classList.remove('error') : inputError(phone);
      break;
  };
})


function inputError(container) {
  container.classList.add('error');
}