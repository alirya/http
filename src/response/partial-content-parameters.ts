import Response from "./response";
import PartialContentParameter from "./partial-content-parameter";
//
// /**
//  * standard message
//  */
// export default function PartialContentParameters() : Response<206, string, {}, undefined>;
//
// /**
//  * custom message
//  */
// export default function PartialContentParameters<
//     Message extends string
// >(
//     message : Message,
// ) : Response<206, Message, {}, undefined>;
//
// /**
//  * optional custom message with header
//  */
// export default function PartialContentParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
// >(
//     message : Message,
//     headers : Headers,
// ) : Response<
//     206,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     undefined
// >;

//
// export default function PartialContentParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
//     Body = undefined
// >(
//     message ?: Message,
//     headers ?: Headers,
//     body ?: Body
// ) : Response<
//     206,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     Body
// >;


export default function PartialContentParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message : Message,
    headers : Headers,
    body ?: Body
) : Response<
    206,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return PartialContentParameter({message, headers, body}) as Response as Response<
        206,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}
