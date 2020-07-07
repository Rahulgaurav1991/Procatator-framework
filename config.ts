import {Config} from 'protractor';
import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';

export let config: Config = {
  onPrepare: function() {
  browser.manage().window().maximize();
  browser.get("https://qaclickacademy.github.io/protocommerce/");
},
  framework: 'jasmine',
  capabilities: {
    browserName: 'chrome'
  },
  specs: [ 'Basic.js' ],
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  directConnect:true,
  

  // You could set no globals to true to avoid jQuery '$' and protractor '$'
  // collisions on the global namespace.
  noGlobals: true
};