const request = require('supertest');
const app = require('../../app');

let endPoint = "/api/colors";
describe(`get ${endPoint}`, () => {
    it("should return 200 status code", (done) => {
        request(app)
            .get(endPoint)
            .expect(200)
            .end(done);
    });

    it("should get json color data", (done) => {
        request(app)
            .get(endPoint)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .end(function (err, res) {
                if (err) {
                    return done(err);
                }
                expect(res.body.colorNames).toBeDefined();
                expect(res.body.colorNameHexCodes).toBeDefined(); 
                return done();
            })
    })
});