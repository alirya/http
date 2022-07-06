import Redirection from '../../../../../dist/response/code/class/boolean/redirection.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});



it('lower', function () {
    expect(Redirection(299)).toBeFalse();
});

it('lowest', function () {
    expect(Redirection(300)).toBeTrue();
});

it('middle', function () {
    expect(Redirection(350)).toBeTrue();
});

it('highest', function () {
    expect(Redirection(399)).toBeTrue();
});

it('higher', function () {
    expect(Redirection(400)).toBeFalse();
});
