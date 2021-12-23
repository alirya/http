import Request from "../../../dist/request/boolean/request";
import Method from "../../../dist/request/method/string/enum/method";
import Get from "../../../dist/request/get";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

it('plain', () => {

    expect(Request({path:'', method:Method.PATCH, headers:{}})).toBe(true)

});


it('class', () => {

    expect(Request(Get({path:''}))).toBe(true)

});
