package steps;


import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import page.LoginPage;
import util.BrowserFactory;

public class StepDef {
	WebDriver driver;
	LoginPage login;



	@Before
	public void BeforeRun() {
		driver = BrowserFactory.startBrowser();
		login = PageFactory.initElements(driver, LoginPage.class);
}

	@Given ("^User is on the Techfios Login Page$")
	public void User_is_on_the_Techfios_Login_Page() {
		driver.get("https://techfios.com/billing/?ng=admin/");
	}
	
	@When("^User enters the username as \"([^\"]*)\"$")
	public void user_enters_the_username_as(String userName) throws Throwable {
	    login.enterUserName(userName);
		//driver.findElement(By.xpath("//*[@id=\"username\"]")).sendKeys("demo@techfios.com");
	}
	@When("^User enters the password as \"([^\"]*)\"$")
	public void user_enters_the_password_as(String password) throws Throwable {
		login.enterPassword(password);
		//driver.findElement(By.xpath("//*[@id=\"password\"]")).sendKeys("abc123");
	}

	@When("^User clicks on the login button$")
	public void user_clicks_on_the_login_button() throws Throwable {
		login.clickSignInButton();
	   //driver.findElement(By.xpath("/html/body/div/div/div/form/div[3]/button")).click();
	    Thread.sleep(4000);
	}

	@Then("^User should be able to see the DashBoard Page$")
	public void user_should_be_able_to_see_the_DashBoard_Page() throws Throwable {
		String expectedTitle ="Dashboard- iBilling";
		String actualTitle =login.getPageTitle();
		Assert.assertEquals(expectedTitle, actualTitle);
		
		//login.getPageTitle();
	  // System.out.println("User is able to see the DashBoard");
	}

	@When("^User enters the \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_the_and(String userName, String password) throws Throwable {
	   login.login(userName, password);
	
	}
	@After
	public void afterRun() {
		driver.close();
		driver.quit();
	}
	}
