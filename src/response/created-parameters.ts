import Response from "./response";
import CreatedParameter from "./created-parameter";
//
// /**
//  * standard message
//  */
// export default function CreatedParameters() : Response<201, string, {}, undefined>;
//
// /**
//  * custom message
//  */
// export default function CreatedParameters<
//     Message extends string
// >(
//     message : Message,
// ) : Response<201, Message, {}, undefined>;
//
// /**
//  * optional custom message with header
//  */
// export default function CreatedParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
// >(
//     message : Message,
//     headers : Headers,
// ) : Response<
//     201,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     undefined
// >;

//
// export default function CreatedParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
//     Body = undefined
// >(
//     message ?: Message,
//     headers ?: Headers,
//     body ?: Body
// ) : Response<
//     201,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     Body
// >;


export default function CreatedParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message : Message,
    headers : Headers,
    body ?: Body
) : Response<
    201,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return CreatedParameter({message, headers, body}) as Response as Response<
        201,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}
