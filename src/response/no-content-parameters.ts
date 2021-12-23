import Response from "./response";
import NoContentParameter from "./no-content-parameter";
//
// /**
//  * standard message
//  */
// export default function NoContentParameters() : Response<204, string, {}, undefined>;
//
// /**
//  * custom message
//  */
// export default function NoContentParameters<
//     Message extends string
// >(
//     message : Message,
// ) : Response<204, Message, {}, undefined>;
//
// /**
//  * optional custom message with header
//  */
// export default function NoContentParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
// >(
//     message : Message,
//     headers : Headers,
// ) : Response<
//     204,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     undefined
// >;

//
// export default function NoContentParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
//     Body = undefined
// >(
//     message ?: Message,
//     headers ?: Headers,
//     body ?: Body
// ) : Response<
//     204,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     Body
// >;


export default function NoContentParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message : Message,
    headers : Headers,
    body ?: Body
) : Response<
    204,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return NoContentParameter({message, headers, body}) as Response as Response<
        204,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}
