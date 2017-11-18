import { Utility } from './Utility';

describe("Utility", () => {
    
    it("it should check the delay between 2 times", function () {
        
        const delay = Utility.getDelay("12:30", "12:45");

        expect(delay).toEqual("15 min late");
    });

    it("it should check the delay between 2 times", function () {
        
        const delay = Utility.getDelay("15:56", "16:10");

        expect(delay).toEqual("14 min late");
    });

    it("it should return 'On time' if there is no delay", function () {
        
        const delay = Utility.getDelay("22:10", "22:10");

        expect(delay).toEqual("On time");
    });
});