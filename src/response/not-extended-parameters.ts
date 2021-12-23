import Response from "./response";
import NotExtendedParameter from "./not-extended-parameter";
//
// /**
//  * standard message
//  */
// export default function NotExtendedParameters() : Response<510, string, {}, undefined>;
//
// /**
//  * custom message
//  */
// export default function NotExtendedParameters<
//     Message extends string
// >(
//     message : Message,
// ) : Response<510, Message, {}, undefined>;
//
// /**
//  * optional custom message with header
//  */
// export default function NotExtendedParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
// >(
//     message : Message,
//     headers : Headers,
// ) : Response<
//     510,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     undefined
// >;

//
// export default function NotExtendedParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
//     Body = undefined
// >(
//     message ?: Message,
//     headers ?: Headers,
//     body ?: Body
// ) : Response<
//     510,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     Body
// >;


export default function NotExtendedParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message : Message,
    headers : Headers,
    body ?: Body
) : Response<
    510,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return NotExtendedParameter({message, headers, body}) as Response as Response<
        510,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}
