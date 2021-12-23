import Response from "./response";
import SwitchingProtocolParameter from "./switching-protocol-parameter";
//
// /**
//  * standard message
//  */
// export default function SwitchingProtocolParameters() : Response<101, string, {}, undefined>;
//
// /**
//  * custom message
//  */
// export default function SwitchingProtocolParameters<
//     Message extends string
// >(
//     message : Message,
// ) : Response<101, Message, {}, undefined>;
//
// /**
//  * optional custom message with header
//  */
// export default function SwitchingProtocolParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
// >(
//     message : Message,
//     headers : Headers,
// ) : Response<
//     101,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     undefined
// >;

//
// export default function SwitchingProtocolParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
//     Body = undefined
// >(
//     message ?: Message,
//     headers ?: Headers,
//     body ?: Body
// ) : Response<
//     101,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     Body
// >;


export default function SwitchingProtocolParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message : Message,
    headers : Headers,
    body ?: Body
) : Response<
    101,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return SwitchingProtocolParameter({message, headers, body}) as Response as Response<
        101,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}
