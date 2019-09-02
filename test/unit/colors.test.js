const colorsContoller = require('../../controllers/colors');
const httpMocks = require("node-mocks-http");

describe("colors controller retrieving colors ", () => {
    it("should have a getColos function", () => {
        expect(typeof colorsContoller.getColors).toBe("function");
    });

    it("should return 200 status code", () => {
        let req, res;
        req = httpMocks.createRequest();
        res = httpMocks.createResponse();

        colorsContoller.getColors(req, res);
        expect(res.statusCode).toBe(200);
    });

    it("should get json color data", () => {
        req = httpMocks.createRequest();
        res = httpMocks.createResponse();
        colorsContoller.getColors(req, res);
        let data = res._getJSONData();
        expect(data.colorNameHexCodes).toBeDefined();
        expect(data.colorNames).toBeDefined();
        expect(res._isEndCalled()).toBeTruthy();
        expect(res._isJSON()).toBeTruthy();

    })
});