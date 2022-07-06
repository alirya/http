import ServerError from '../../../../../dist/response/code/class/boolean/server-error.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});



it('lower', function () {
    expect(ServerError(499)).toBeFalse();
});

it('lowest', function () {
    expect(ServerError(500)).toBeTrue();
});

it('middle', function () {
    expect(ServerError(550)).toBeTrue();
});

it('highest', function () {
    expect(ServerError(599)).toBeTrue();
});

it('higher', function () {
    expect(ServerError(600)).toBeFalse();
});
