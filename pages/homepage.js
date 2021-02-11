const firstNumber_input = element(by.model("first"));
const secondNumber_input = element(by.model("second"));
const goButton = element(by.css('[ng-click="doAddition()"]'));

module.exports = {
  firstNumber_input: firstNumber_input,
  secondNumber_input: secondNumber_input,
  get: function (url) {
    browser.get(url);
  },
  enterFirstNumber: function (firstNo) {
    firstNumber_input.sendKeys(firstNo);
  },
  enterSecondNumber: function (secondNo) {
    secondNumber_input.sendKeys(secondNo);
  },
  clickGo: function () {
    goButton.click();
  },
  verifyResult: function (result) {
    const output = element(by.cssContainingText(".ng-binding", result));
    expect(output.getText()).toEqual("7");
  },
};
