const assert = require('assert')
const {Before, Given, When, Then} = require('cucumber');
const chrome = require('selenium-webdriver/chrome');
require('chromedriver');
const {Builder, Key, By, until} = require('selenium-webdriver');
const screen = {
  width: 640,
  height: 480
};
let driver;
 

Given('i go to hello world app', async function () {
  // Write code here that turns the phrase above into concrete actions
  driver = new Builder()
  .forBrowser('chrome')
  .setChromeOptions(new chrome.Options().windowSize(screen)) 
  .build();

await driver.get('http://localhost:3000/'); 

});


When('i select language {string} and selet hour {string}', async function (string, string2) {
  // Write code here that turns the phrase above into concrete actions
  let element = await driver.findElement(By.id("hora"));
  element.sendKeys(string2);
  let element2 = await driver.findElement(By.id("idioma"));
  element2.sendKeys(string);
  await driver.findElement(By.id("click")).click();
});

Then('should see {string}',{timeout:5000}, async function (string) {
  // Write code here that turns the phrase above into concrete actions
 
  let text = await driver.findElement(By.tagName("h1")).getText();
  assert.equal(text, string);
  driver.close();
  //driver.quit();
});
 