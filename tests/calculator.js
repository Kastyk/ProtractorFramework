const homepage = require("../pages/homepage");

describe("Demo calculator tests", () => {
  it("addition test", () => {
    homepage.get("http://juliemr.github.io/protractor-demo/");
    homepage.enterFirstNumber("4");
    homepage.enterSecondNumber("3");
    homepage.clickGo();
    homepage.verifyResult("7");
    browser.sleep(2000);
  });
  it("addition test", () => {
    homepage.get("http://juliemr.github.io/protractor-demo/");
    homepage.enterFirstNumber("4");
    homepage.enterSecondNumber("3");
    homepage.clickGo1();
    homepage.verifyResult("7");
    browser.sleep(2000);
  });
});
