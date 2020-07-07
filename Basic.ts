import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';

describe("verify photocomerce Application",function(){

   it("verify title of Application",function(){
       expect(browser.getTitle()).toBe("ProtoCommerce");

   })

    it("open browser",function(){
        //browser.get("https://qaclickacademy.github.io/protocommerce/");
        element(by.css(" div:nth-child(1)> input")).sendKeys("Rahul");
        

    });

    it("verify login shop-link funcality",function(){
        element(by.linkText("Shop")).click();
        expect(element(by.xpath("//nav[contains(@class,'navbar navbar-expand-lg')]//a[@class='navbar-brand']")).getText()).toBe("ProtoCommerce Home");
        console.log("passed");

    });
    it("Verify all items in a cart",function(){
        let list:string[] =new Array();
       element.all(by.tagName("app-card")).each(function(item){
           //expect(item.count).toBe(4);
           item.element("h4 a").getText().then(function(text){
               console.log("the value from element is ");
               list.push(text);
               console.log(list);
        
               
               


           })
         
        });

       
       
       
           

       })


    })


    


