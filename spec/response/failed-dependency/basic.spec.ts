import FailedDependency from '../../../dist/response/failed-dependency-parameter';
import Standard from '../../../dist/response/message/string/strict';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data', function() {

    it('header', function() {

        let response = FailedDependency({
            body:'data',
            headers:{etag:'etag data'}
        });

        expect(response.headers.etag).toBe('etag data');
        expect(response.body).toBe('data');
        expect(response.code).toBe(424);
        expect(response.message).toBe(Standard(424));

    });

    it('header', function() {

        let response = FailedDependency({
            body:'data'
        });

        expect(response.headers).toEqual({});
        expect(response.body).toBe('data');
        expect(response.code).toBe(424);
        expect(response.message).toBe(Standard(424));

    });
});


