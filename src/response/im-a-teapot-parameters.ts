import Response from "./response";
import ImATeapotParameter from "./im-a-teapot-parameter";
//
// /**
//  * standard message
//  */
// export default function ImATeapotParameters() : Response<418, string, {}, undefined>;
//
// /**
//  * custom message
//  */
// export default function ImATeapotParameters<
//     Message extends string
// >(
//     message : Message,
// ) : Response<418, Message, {}, undefined>;
//
// /**
//  * optional custom message with header
//  */
// export default function ImATeapotParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
// >(
//     message : Message,
//     headers : Headers,
// ) : Response<
//     418,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     undefined
// >;

//
// export default function ImATeapotParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
//     Body = undefined
// >(
//     message ?: Message,
//     headers ?: Headers,
//     body ?: Body
// ) : Response<
//     418,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     Body
// >;


export default function ImATeapotParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message : Message,
    headers : Headers,
    body ?: Body
) : Response<
    418,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return ImATeapotParameter({message, headers, body}) as Response as Response<
        418,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}
