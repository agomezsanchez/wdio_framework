const Page = require ('../pages/page');

class LoginPage extends Page{

    // define locators
    get inputUsername () { return $('[name="login.username"]')}
    get inputPassword () { return $('[name="login.password"]')}
    get btnLogin () { return $('.button-login')}

    // methods for Login Page
    navigateToLogin () {
        this.btnLogin.click ();
    }

    login (username, password) {
        this.inputUsername.setValue (username);
        this.inputPassword.setValue (password);
        this.btnLogin.click ();
    }

}

module.exports = new LoginPage ();