export default class Validator {
  static isEmailValid(email) {
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    return re.test(email);
  }

  static isNameValid(name) {
    const re = /^[A-Z]{1,}[A-Za-z]{2,}$/;
    return re.test(name);
  }

  static isPasswordValid(password) {
    const re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return re.test(password);
  }
}
