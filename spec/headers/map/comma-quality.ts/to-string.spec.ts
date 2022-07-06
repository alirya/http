import CommaQualityValue from '../../../../dist/headers/map/comma-quality.js';

it('basic', () => {

    const map = new CommaQualityValue();
    map.set('text/html', 1);
    map.set('application/html', 0.5);

    expect(map.toString()).toBe('text/html;q=1,application/html;q=0.5');

});

it('decimal', () => {

    const map = new CommaQualityValue();
    map.set('text/html', 1);
    map.set('application/html', 0.5);
    map.set('application/exe', 1 / 3);

    expect(map.toString()).toBe('text/html;q=1,application/html;q=0.5,application/exe;q=0.33');

});
