@End2End
Feature: Validate Techfios Login Page Functionality

Background:
Given User is on the Techfios Login Page

@Scenario1
Scenario: User should be able to login with validate credentials(Making Variables workas PLaceHolders)
When User enters the username as "demo@techfios.com"
When User enters the password as "abc123"
And User clicks on the login button
Then User should be able to see the DashBoard Page
  
@Scenario2
Scenario Outline: User should be able to login with validate credentials(Making Variables work as Placeholders)
When User enters the "<username>" and "<password>"
Then User should be able to see the DashBoard Page
Examples: 
| username | password |
| demo@techfios.com | abc123 | 

