import Response from "./response";
import SeeOtherParameter from "./see-other-parameter";
//
// /**
//  * standard message
//  */
// export default function SeeOtherParameters() : Response<303, string, {}, undefined>;
//
// /**
//  * custom message
//  */
// export default function SeeOtherParameters<
//     Message extends string
// >(
//     message : Message,
// ) : Response<303, Message, {}, undefined>;
//
// /**
//  * optional custom message with header
//  */
// export default function SeeOtherParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
// >(
//     message : Message,
//     headers : Headers,
// ) : Response<
//     303,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     undefined
// >;

//
// export default function SeeOtherParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
//     Body = undefined
// >(
//     message ?: Message,
//     headers ?: Headers,
//     body ?: Body
// ) : Response<
//     303,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     Body
// >;


export default function SeeOtherParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message : Message,
    headers : Headers,
    body ?: Body
) : Response<
    303,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return SeeOtherParameter({message, headers, body}) as Response as Response<
        303,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}
