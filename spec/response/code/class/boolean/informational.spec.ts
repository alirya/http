import Informational from '../../../../../dist/response/status/class/boolean/informational.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});



it('lower', function () {
    expect(Informational(99)).toBeFalse();
});

it('lowest', function () {
    expect(Informational(100)).toBeTrue();
});

it('middle', function () {
    expect(Informational(150)).toBeTrue();
});

it('highest', function () {
    expect(Informational(199)).toBeTrue();
});

it('higher', function () {
    expect(Informational(200)).toBeFalse();
});
