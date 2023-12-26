import Response from '../response/response.js';
import HttpError from 'http-errors';
import OmitUndefined from '@axiona/object/omit-undefined.js';
import Pick from '@axiona/object/pick.js';

// export default function Create<ResponseType extends Pick<Response, 'code'|'message'|'body'>>(
//     response: ResponseType,
//     previous?: Error,
//     error: Callable<[ResponseType], Error> = ()=>new Error()
// ) : Throwable {
//
//     return Object.assign(error(response), {
//         httpCode:response.code,
//         message:response.message,
//         body:response.body,
//         previous
//     });
// }
export default function Create<ResponseType extends Pick<Response, 'status'|'message'|'body'>>(
    response: ResponseType,
    previous?: Error,
    // error: Callable<[ResponseType], Error> = ()=>new Error()
) : HttpError.HttpError {

    return Object.assign(
        HttpError(response.status, response.message/*, error*/),
        OmitUndefined(Pick.Parameters(response, 'body')),
        {previous}
    );

    // return Object.assign(error(response), {
    //     httpCode:response.code,
    //     message:response.message,
    //     body:response.body,
    //     previous
    // });
}
