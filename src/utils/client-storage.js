const KEY_USER = "user";

const KEY_USER_EMAIL = "email";
const KEY_USER_PASSWORD = "password";
const KEY_USER_TOKEN = "token";

class ClientStorage {
  constructor() {
    const prefs = window.localStorage.getItem(KEY_USER);
    if (prefs) {
      this.prefs = JSON.parse(prefs);
    } else {
      this.prefs = {};
    }
  }

  commit() {
    window.localStorage.setItem(KEY_USER, JSON.stringify(this.prefs));
  }

  setString(key, value) {
    this.prefs[key] = "" + value;
    this.commit();
  }

  getString(key, defaultValue) {
    if (this.prefs[key] !== undefined) {
      return "" + this.prefs[key];
    } else {
      return defaultValue;
    }
  }

  getEmailUser() {
    return this.getString(KEY_USER_EMAIL, null);
  }

  setEmailUser(value) {
    this.setString(KEY_USER_EMAIL, value);
  }

  getPasswordUser() {
    return this.getString(KEY_USER_PASSWORD, null);
  }

  setPasswordUser(value) {
    this.setString(KEY_USER_PASSWORD, value);
  }

  getTokenUser() {
    return JSON.parse(this.getString(KEY_USER_TOKEN, null));
  }

  setTokenUser(value) {
    this.setString(KEY_USER_TOKEN, JSON.stringify(value));
  }

  clearUserInfo() {
    this.prefs = {};
    this.commit();
  }
}

export default new ClientStorage();