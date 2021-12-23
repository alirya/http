// import Response from "./response";
// import StandardClassParameters from "./standard-class-parameters";
// import StandardCode from "./message/record/strict";
// import Strict from "./code/codes/strict";
//
// export default function DefaultMessage<
//     Code extends keyof Strict,
//     Message extends string,
//     Body,
//     Headers extends Record<string, string>
// >(
//     response : Pick<Response<Code>, 'code'> & Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
// ) : Response<Code, Message, Headers, Body> {
//
//     return new StandardClassParameters(
//         response.code,
//         response.message || StandardCode(response.code),
//         response.headers || {},
//         response.body
//     ) as Response<Code, Message, Headers, Body>;
// }
