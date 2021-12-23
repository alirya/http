import Response from "./response";
import BadRequestParameter from "./bad-request-parameter";
//
// /**
//  * standard message
//  */
// export default function BadRequestParameters() : Response<400, string, {}, undefined>;
//
// /**
//  * custom message
//  */
// export default function BadRequestParameters<
//     Message extends string
// >(
//     message : Message,
// ) : Response<400, Message, {}, undefined>;
//
// /**
//  * optional custom message with header
//  */
// export default function BadRequestParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
// >(
//     message : Message,
//     headers : Headers,
// ) : Response<
//     400,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     undefined
// >;

//
// export default function BadRequestParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
//     Body = undefined
// >(
//     message ?: Message,
//     headers ?: Headers,
//     body ?: Body
// ) : Response<
//     400,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     Body
// >;


export default function BadRequestParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message : Message,
    headers : Headers,
    body ?: Body
) : Response<
    400,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return BadRequestParameter({message, headers, body}) as Response as Response<
        400,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}
