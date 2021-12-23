import Response from "./response";
import LengthRequiredParameter from "./length-required-parameter";
//
// /**
//  * standard message
//  */
// export default function LengthRequiredParameters() : Response<411, string, {}, undefined>;
//
// /**
//  * custom message
//  */
// export default function LengthRequiredParameters<
//     Message extends string
// >(
//     message : Message,
// ) : Response<411, Message, {}, undefined>;
//
// /**
//  * optional custom message with header
//  */
// export default function LengthRequiredParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
// >(
//     message : Message,
//     headers : Headers,
// ) : Response<
//     411,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     undefined
// >;

//
// export default function LengthRequiredParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
//     Body = undefined
// >(
//     message ?: Message,
//     headers ?: Headers,
//     body ?: Body
// ) : Response<
//     411,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     Body
// >;


export default function LengthRequiredParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message : Message,
    headers : Headers,
    body ?: Body
) : Response<
    411,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return LengthRequiredParameter({message, headers, body}) as Response as Response<
        411,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}
