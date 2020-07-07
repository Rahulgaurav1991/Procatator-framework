"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
describe("verify photocomerce Application", function () {
    it("verify title of Application", function () {
        expect(protractor_1.browser.getTitle()).toBe("ProtoCommerce");
    });
    it("open browser", function () {
        //browser.get("https://qaclickacademy.github.io/protocommerce/");
        protractor_1.element(protractor_1.by.css(" div:nth-child(1)> input")).sendKeys("Rahul");
    });
    it("verify login shop-link funcality", function () {
        protractor_1.element(protractor_1.by.linkText("Shop")).click();
        expect(protractor_1.element(protractor_1.by.xpath("//nav[contains(@class,'navbar navbar-expand-lg')]//a[@class='navbar-brand']")).getText()).toBe("ProtoCommerce Home");
        console.log("passed");
    });
    it("Verify all items in a cart", function () {
        let list = new Array();
        protractor_1.element.all(protractor_1.by.tagName("app-card")).each(function (item) {
            //expect(item.count).toBe(4);
            item.element("h4 a").getText().then(function (text) {
                console.log("the value from element is ");
                list.push(text);
                console.log(list);
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzaWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9CYXNpYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUErRTtBQUUvRSxRQUFRLENBQUMsaUNBQWlDLEVBQUM7SUFFeEMsRUFBRSxDQUFDLDZCQUE2QixFQUFDO1FBQzdCLE1BQU0sQ0FBQyxvQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBRXJELENBQUMsQ0FBQyxDQUFBO0lBRUQsRUFBRSxDQUFDLGNBQWMsRUFBQztRQUNkLGlFQUFpRTtRQUNqRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUdsRSxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxrQ0FBa0MsRUFBQztRQUNsQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNyQyxNQUFNLENBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDZFQUE2RSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQzlJLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7SUFFMUIsQ0FBQyxDQUFDLENBQUM7SUFDSCxFQUFFLENBQUMsNEJBQTRCLEVBQUM7UUFDNUIsSUFBSSxJQUFJLEdBQVcsSUFBSSxLQUFLLEVBQUUsQ0FBQztRQUNoQyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVMsSUFBSTtZQUNsRCw2QkFBNkI7WUFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxJQUFJO2dCQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUM7Z0JBQzFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFNdEIsQ0FBQyxDQUFDLENBQUE7UUFFTCxDQUFDLENBQUMsQ0FBQztJQU9KLENBQUMsQ0FBQyxDQUFBO0FBR0wsQ0FBQyxDQUFDLENBQUEifQ==