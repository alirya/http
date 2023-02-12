// import Throwable from './throwable.js';
// import Response from '../response/response.js';
//
// export default class HttpError extends globalThis.Error implements Throwable {
//
//     httpCode: number;
//     body: unknown;
//
//     constructor(
//         response: Pick<Response, 'code'|'message'|'body'>,
//         public previous?: HttpError,
//     ) {
//         super(response.message);
//
//         this.httpCode = response.code;
//         this.body = response.body;
//     }
// }