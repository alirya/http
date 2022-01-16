import CommaQualityValueFromString from '../../../../dist/headers/map/comma-quality-from-string';

it('basic', () => {

    const a = 1;

    const map = CommaQualityValueFromString('text/html;q=1,application/html;q=0.5');

    expect(map.get('text/html')).toBe(1);
    expect(map.get('application/html')).toBe(0.5);

});

it('space', () => {

    const map = CommaQualityValueFromString('text/html; q=1, application/html; q=0.5 ');

    expect(map.get('text/html')).toBe(1);
    expect(map.get('application/html')).toBe(0.5);

});

it('decimal', () => {

    const map = CommaQualityValueFromString('text/html; q= 1, application/html; q=0.5,application/exe; q=0.33 ');

    expect(map.get('text/html')).toBe(1);
    expect(map.get('application/html')).toBe(0.5);
    expect(map.get('application/exe')).toBe(0.33);

});
