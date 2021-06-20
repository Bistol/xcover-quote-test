import Page from './page';

class LoginPage extends Page {

    get userName() {
        return $('#email');
    }

    get password() {
        return $('#password')
    }

    get submitButton() {
        return $('button[type="submit"]')
    }


    /* async login (username, password) {
         await (await this.inputUsername).setValue(username);
         await (await this.inputPassword).setValue(password);
         await (await this.btnSubmit).click();
     }*/

    login(userName, password) {
        this.userName.setValue(userName);
        this.password.setValue(password);
        this.submitButton.click();
    }

    open() {
        return super.open('login');
    }
}

export default new LoginPage();