import Response from '../../../dist/response/boolean/response';
import Ok from '../../../dist/response/ok-parameter';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});


it('plain', () => {

    expect(Response({code:1, message:'', headers:{}})).toBe(true);

});


it('class', () => {

    expect(Response(Ok({body:undefined}))).toBe(true);

});
