import Response from "./response";
import NotFoundParameter from "./not-found-parameter";
//
// /**
//  * standard message
//  */
// export default function NotFoundParameters() : Response<404, string, {}, undefined>;
//
// /**
//  * custom message
//  */
// export default function NotFoundParameters<
//     Message extends string
// >(
//     message : Message,
// ) : Response<404, Message, {}, undefined>;
//
// /**
//  * optional custom message with header
//  */
// export default function NotFoundParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
// >(
//     message : Message,
//     headers : Headers,
// ) : Response<
//     404,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     undefined
// >;

//
// export default function NotFoundParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
//     Body = undefined
// >(
//     message ?: Message,
//     headers ?: Headers,
//     body ?: Body
// ) : Response<
//     404,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     Body
// >;


export default function NotFoundParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message : Message,
    headers : Headers,
    body ?: Body
) : Response<
    404,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return NotFoundParameter({message, headers, body}) as Response as Response<
        404,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}
