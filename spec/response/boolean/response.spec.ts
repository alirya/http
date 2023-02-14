import Response from '../../../dist/response/boolean/response.js';
import Ok from '../../../dist/response/ok.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});


it('plain', () => {

    expect(Response({status:1, message:'', headers:{}})).toBe(true);

});


it('class', () => {

    expect(Response(Ok.Parameter({body:undefined}))).toBe(true);

});
