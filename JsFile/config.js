"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
exports.config = {
    onPrepare: function () {
        protractor_1.browser.manage().window().maximize();
        protractor_1.browser.get("https://qaclickacademy.github.io/protocommerce/");
    },
    framework: 'jasmine',
    capabilities: {
        browserName: 'chrome'
    },
    specs: ['Basic.js'],
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    // You could set no globals to true to avoid jQuery '$' and protractor '$'
    // collisions on the global namespace.
    noGlobals: true
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsMkNBQStFO0FBRXBFLFFBQUEsTUFBTSxHQUFXO0lBQzFCLFNBQVMsRUFBRTtRQUNYLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDckMsb0JBQU8sQ0FBQyxHQUFHLENBQUMsaURBQWlELENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBQ0MsU0FBUyxFQUFFLFNBQVM7SUFDcEIsWUFBWSxFQUFFO1FBQ1osV0FBVyxFQUFFLFFBQVE7S0FDdEI7SUFDRCxLQUFLLEVBQUUsQ0FBRSxVQUFVLENBQUU7SUFDckIsa0RBQWtEO0lBQ2xELGFBQWEsRUFBQyxJQUFJO0lBR2xCLDBFQUEwRTtJQUMxRSxzQ0FBc0M7SUFDdEMsU0FBUyxFQUFFLElBQUk7Q0FDaEIsQ0FBQyJ9