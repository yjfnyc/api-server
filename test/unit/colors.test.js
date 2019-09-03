const colorsContoller = require('../../controllers/colors');
const httpMocks = require("node-mocks-http");

describe("colors controller retrieving colors ", () => {
    let req, res;
    beforeEach(()=>{
        req = httpMocks.createRequest();
        res = httpMocks.createResponse();
    });

    it("should have a getColos function", () => {
        expect(typeof colorsContoller.getColors).toBe("function");
    });

    it("should return 200 status code", () => {
        colorsContoller.getColors(req, res);
        expect(res.statusCode).toBe(200);
        expect(res._isEndCalled()).toBeTruthy();
    });

    it("should get json color data", () => {
        colorsContoller.getColors(req, res);
        let data = res._getJSONData();
        expect(data.colorNameHexCodes).toBeDefined();
        expect(data.colorNames).toBeDefined();
        expect(res._isJSON()).toBeTruthy();
    })
});