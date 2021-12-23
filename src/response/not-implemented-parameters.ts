import Response from "./response";
import NotImplementedParameter from "./not-implemented-parameter";
//
// /**
//  * standard message
//  */
// export default function NotImplementedParameters() : Response<501, string, {}, undefined>;
//
// /**
//  * custom message
//  */
// export default function NotImplementedParameters<
//     Message extends string
// >(
//     message : Message,
// ) : Response<501, Message, {}, undefined>;
//
// /**
//  * optional custom message with header
//  */
// export default function NotImplementedParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
// >(
//     message : Message,
//     headers : Headers,
// ) : Response<
//     501,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     undefined
// >;

//
// export default function NotImplementedParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
//     Body = undefined
// >(
//     message ?: Message,
//     headers ?: Headers,
//     body ?: Body
// ) : Response<
//     501,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     Body
// >;


export default function NotImplementedParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message : Message,
    headers : Headers,
    body ?: Body
) : Response<
    501,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return NotImplementedParameter({message, headers, body}) as Response as Response<
        501,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}
