import {UpgradeRequiredParameters, UpgradeRequiredParameter} from '../../../dist/response/upgrade-required.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('empty', function() {

    it('parameter', function() {

        const response = UpgradeRequiredParameter();

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

        number = response.status;
        string = response.message;

    });

    it('parameters', function() {

        const response = UpgradeRequiredParameters();


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

        number = response.status;
        string = response.message;

    });

});


describe('header', function() {

    it('parameter', function() {

        const response = UpgradeRequiredParameter({
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

        number = response.status;
        string = response.message;

    });

    it('parameters', function() {

        const response = UpgradeRequiredParameters(undefined, {etag:'etag data'});


        let string : string;
        let number : number;
        let undef : undefined;
        let unknown : unknown;

        string = response.headers.etag;

        // @ts-expect-error
        string = response.body;
        undef = response.body;
        unknown = response.body;

        number = response.status;
        string = response.message;

    });

});

describe('message', function() {

    it('parameter', function() {

        const response = UpgradeRequiredParameter({
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

        number = response.status;
        string = response.message;

    });

    it('parameters', function() {

        const response = UpgradeRequiredParameters(undefined,{},'etag data');

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

        number = response.status;
        string = response.message;

    });

});

describe('body', function() {

    it('parameter', function() {

        const response = UpgradeRequiredParameter({
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

        number = response.status;
        string = response.message;
    });

    it('parameters', function() {

        const response = UpgradeRequiredParameters('data', undefined);

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

        number = response.status;
        string = response.message;

    });

});

