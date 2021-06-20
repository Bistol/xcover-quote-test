import LoginPage from '../pages/login.page';
import UserDetails from '../testdata/user-details';


describe('My Login application', () => {

    it('should login with valid credentials', () => {
        LoginPage.open();
        LoginPage.login(UserDetails.email, UserDetails.password);
    });
});


