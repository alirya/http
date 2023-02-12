import Successful from '../../../../../dist/response/status/class/boolean/successful.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});



it('lower', function () {
    expect(Successful(199)).toBeFalse();
});

it('lowest', function () {
    expect(Successful(200)).toBeTrue();
});

it('middle', function () {
    expect(Successful(250)).toBeTrue();
});

it('highest', function () {
    expect(Successful(299)).toBeTrue();
});

it('higher', function () {
    expect(Successful(300)).toBeFalse();
});
