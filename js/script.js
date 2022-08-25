const input = {
  name: document.querySelector(".holder-name"),
  number: document.querySelector(".holder-number"),
  month: document.querySelector(".expiry-month"),
  year: document.querySelector(".expiry-year"),
  cvc: document.querySelector(".cvc-data"),
};

const errormsg = {
  name: document.querySelector(".error-name"),
  number: document.querySelector(".error-number"),
  expiry: document.querySelector(".error-date"),
  cvc: document.querySelector(".error-cvc"),
};

const card = {
  name: document.querySelector(".card-name"),
  number: document.querySelector(".card-number"),
  month: document.querySelector(".card-expiry-month"),
  year: document.querySelector(".card-expiry-year"),
  cvc: document.querySelector(".cvc-numbers"),
};

const btn = {
  confirm: document.getElementById("submit"),
  continue: document.getElementById("continue"),
};

const state = {
  form: document.getElementById("myForm"),
  thanks: document.getElementById("thank-you"),
};

// Functions to fill the card

function inputName() {
  card.name.innerHTML = input.name.value;

  if (input.name.value.length == 0) {
    card.name.innerHTML = `Jane Appleseed`;
  }

  console.log(input.name.value.length);
}

function inputCardNum() {
  let length = input.number.value.length;
  card.number.innerHTML = input.number.value;

  // Error Message
  if (length < 19 || length > 19) {
    errormsg.number.innerHTML = `does not respect the required length`;
    input.number.classList.add("input-error");
  } else {
    errormsg.number.innerHTML = ``;
    input.number.classList.remove("input-error");
  }
}

function inputMM() {
  card.month.innerHTML = input.month.value;

  // Error Message
  if (input.month.value > 12) {
    errormsg.expiry.innerHTML = `This month doesn't exist`;
    input.month.classList.add("input-error");
  } else {
    errormsg.expiry.innerHTML = ``;
    input.month.classList.remove("input-error");
  }
}

function inputYY() {
  card.year.innerHTML = input.year.value;

  // Error Message
  if (input.year.value > 2030) {
    errormsg.expiry.innerHTML = `This year doesn't exist`;
    input.year.classList.add("input-error");
  } else {
    errormsg.expiry.innerHTML = ``;
    input.year.classList.remove("input-error");
  }
}

function inputCVC() {
  card.cvc.innerHTML = input.cvc.value;

  // Error Message
  if (input.cvc.value > 999 || input.cvc.value < 100) {
    errormsg.cvc.innerHTML = `invalid CVC`;
    input.cvc.classList.add("input-error");
  } else {
    errormsg.cvc.innerHTML = ``;
    input.cvc.classList.remove("input-error");
  }
}

function submit() {
  if (input.name.value == "") {
    errormsg.name.innerHTML = `Can't be blank`;
    errormsg.number.innerHTML = ``;
    errormsg.expiry.innerHTML = ``;
    errormsg.cvc.innerHTML = ``;
  } else if (input.number.value == "") {
    errormsg.number.innerHTML = `Can't be blank`;
    errormsg.name.innerHTML = ``;
    errormsg.expiry.innerHTML = ``;
    errormsg.cvc.innerHTML = ``;
  } else if (input.year.value == "") {
    errormsg.expiry.innerHTML = `Can't be blank`;
    errormsg.name.innerHTML = ``;
    errormsg.number.innerHTML = ``;
    errormsg.cvc.innerHTML = ``;
  } else if (input.month.value == "") {
    errormsg.expiry.innerHTML = `Can't be blank`;
    errormsg.name.innerHTML = ``;
    errormsg.number.innerHTML = ``;
    errormsg.cvc.innerHTML = ``;
  } else if (input.cvc.value == "") {
    errormsg.cvc.innerHTML = `Can't be blank`;
    errormsg.name.innerHTML = ``;
    errormsg.number.innerHTML = ``;
    errormsg.expiry.innerHTML = ``;
  } else {
    errormsg.name.innerHTML = ``;
    errormsg.number.innerHTML = ``;
    errormsg.expiry.innerHTML = ``;
    errormsg.cvc.innerHTML = ``;

    state.form.classList.add("hidden");
    state.thanks.classList.remove("hidden");
  }
}
