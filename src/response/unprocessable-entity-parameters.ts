import Response from "./response";
import UnprocessableEntityParameter from "./unprocessable-entity-parameter";
//
// /**
//  * standard message
//  */
// export default function UnprocessableEntityParameters() : Response<422, string, {}, undefined>;
//
// /**
//  * custom message
//  */
// export default function UnprocessableEntityParameters<
//     Message extends string
// >(
//     message : Message,
// ) : Response<422, Message, {}, undefined>;
//
// /**
//  * optional custom message with header
//  */
// export default function UnprocessableEntityParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
// >(
//     message : Message,
//     headers : Headers,
// ) : Response<
//     422,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     undefined
// >;

//
// export default function UnprocessableEntityParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
//     Body = undefined
// >(
//     message ?: Message,
//     headers ?: Headers,
//     body ?: Body
// ) : Response<
//     422,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     Body
// >;


export default function UnprocessableEntityParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message : Message,
    headers : Headers,
    body ?: Body
) : Response<
    422,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return UnprocessableEntityParameter({message, headers, body}) as Response as Response<
        422,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}
