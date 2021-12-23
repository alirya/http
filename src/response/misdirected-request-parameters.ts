import Response from "./response";
import MisdirectedRequestParameter from "./misdirected-request-parameter";
//
// /**
//  * standard message
//  */
// export default function MisdirectedRequestParameters() : Response<421, string, {}, undefined>;
//
// /**
//  * custom message
//  */
// export default function MisdirectedRequestParameters<
//     Message extends string
// >(
//     message : Message,
// ) : Response<421, Message, {}, undefined>;
//
// /**
//  * optional custom message with header
//  */
// export default function MisdirectedRequestParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
// >(
//     message : Message,
//     headers : Headers,
// ) : Response<
//     421,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     undefined
// >;

//
// export default function MisdirectedRequestParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
//     Body = undefined
// >(
//     message ?: Message,
//     headers ?: Headers,
//     body ?: Body
// ) : Response<
//     421,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     Body
// >;


export default function MisdirectedRequestParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message : Message,
    headers : Headers,
    body ?: Body
) : Response<
    421,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return MisdirectedRequestParameter({message, headers, body}) as Response as Response<
        421,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}
