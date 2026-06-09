class LoginPage {
  constructor(page) {
    this.page = page;

    // Locators
    this.username = page.getByPlaceholder('Username');
    this.password = page.getByPlaceholder('Password');
    this.loginBtn = page.getByRole('button', { name: 'LOGIN' });
  }

  // Actions
  async goto(BaseUrl) {
    await this.page.goto(BaseUrl);
  }

  async fillUsername(user) {
    await this.username.fill(user);
  }
  async fillPassword(pass) {
    await this.password.fill(pass);
  }
  async clickLogin() {
    await this.loginBtn.click();
  }
  
  async loginToFinzor(BaseUrl, user, pass) {
    await this.goto(BaseUrl);
    await this.fillUsername(user);
    await this.fillPassword(pass);
    await this.clickLogin();
  }

}

export default LoginPage;
