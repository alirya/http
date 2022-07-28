import {FailedDependencyParameters, FailedDependencyParameter} from '../../../dist/response/failed-dependency';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('empty', function() {

    it('parameter', function() {

        let response = FailedDependencyParameter();

        let string : string;
        let number : number;
        let undef : undefined;
        let unknown : unknown;

        // @ts-expect-error
        string = response.headers.etag;

        // @ts-expect-error
        string = response.body;
        undef = response.body;
        unknown = response.body;

        number = response.code;
        string = response.message;

    });

    it('parameters', function() {

        let response = FailedDependencyParameters();


        let string : string;
        let number : number;
        let undef : undefined;
        let unknown : unknown;

        // @ts-expect-error
        string = response.headers.etag;

        // @ts-expect-error
        string = response.body;
        undef = response.body;
        unknown = response.body;

        number = response.code;
        string = response.message;

    });

});


describe('header', function() {

    it('parameter', function() {

        let response = FailedDependencyParameter({
            headers:{etag:'etag data'}
        });

        let string : string;
        let number : number;
        let undef : undefined;
        let unknown : unknown;

        string = response.headers.etag;

        // @ts-expect-error
        string = response.body;
        // @ts-expect-error
        undef = response.body;
        unknown = response.body;

        number = response.code;
        string = response.message;

    });

    it('parameters', function() {

        let response = FailedDependencyParameters(undefined, {etag:'etag data'});


        let string : string;
        let number : number;
        let undef : undefined;
        let unknown : unknown;

        string = response.headers.etag;

        // @ts-expect-error
        string = response.body;
        undef = response.body;
        unknown = response.body;

        number = response.code;
        string = response.message;

    });

});

describe('message', function() {

    it('parameter', function() {

        let response = FailedDependencyParameter({
            message: 'etag data'
        });

        let string : string;
        let number : number;
        let undef : undefined;
        let unknown : unknown;

        // @ts-expect-error
        string = response.headers.etag;

        // @ts-expect-error
        string = response.body;
        // @ts-expect-error
        undef = response.body;
        unknown = response.body;

        number = response.code;
        string = response.message;

    });

    it('parameters', function() {

        let response = FailedDependencyParameters(undefined,{},'etag data');

        let string : string;
        let number : number;
        let undef : undefined;
        let unknown : unknown;

        // @ts-expect-error
        string = response.headers.etag;

        // @ts-expect-error
        string = response.body;
        undef = response.body;
        unknown = response.body;

        number = response.code;
        string = response.message;

    });

});

describe('body', function() {

    it('parameter', function() {

        let response = FailedDependencyParameter({
            body:'data',
        });

        let record : Record<string, string>;
        let string : string;
        let number : number;
        let undef : undefined;
        let unknown : unknown;

        // @ts-expect-error
        string = response.headers.etag;

        // @ts-expect-error
        number = response.headers;
        // @ts-expect-error
        string = response.headers;
        // @ts-expect-error
        undef = response.headers;
        record = response.headers;

        string = response.body;
        unknown = response.body;

        number = response.code;
        string = response.message;
    });

    it('parameters', function() {

        let response = FailedDependencyParameters('data', undefined);

        let record : Record<string, string>;
        let string : string;
        let number : number;
        let undef : undefined;
        let unknown : unknown;

        // @ts-expect-error
        string = response.headers.etag;

        // @ts-expect-error
        number = response.headers;
        // @ts-expect-error
        string = response.headers;
        // @ts-expect-error
        undef = response.headers;
        record = response.headers;

        string = response.body;
        unknown = response.body;

        number = response.code;
        string = response.message;

    });

});

