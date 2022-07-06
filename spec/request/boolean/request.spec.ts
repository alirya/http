import Request from '../../../dist/request/boolean/request.js';
import Method from '../../../dist/request/method/enum/method.js';
import Get from '../../../dist/request/get.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

it('plain', () => {

    expect(Request({path:'', method:Method.PATCH, headers:{}})).toBe(true);

});


it('class', () => {

    expect(Request(Get({path:''}))).toBe(true);

});
