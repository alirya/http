import Response from "./response";
import BadGatewayParameter from "./bad-gateway-parameter";
//
// /**
//  * standard message
//  */
// export default function BadGatewayParameters() : Response<502, string, {}, undefined>;
//
// /**
//  * custom message
//  */
// export default function BadGatewayParameters<
//     Message extends string
// >(
//     message : Message,
// ) : Response<502, Message, {}, undefined>;
//
// /**
//  * optional custom message with header
//  */
// export default function BadGatewayParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
// >(
//     message : Message,
//     headers : Headers,
// ) : Response<
//     502,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     undefined
// >;

//
// export default function BadGatewayParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
//     Body = undefined
// >(
//     message ?: Message,
//     headers ?: Headers,
//     body ?: Body
// ) : Response<
//     502,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     Body
// >;


export default function BadGatewayParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message : Message,
    headers : Headers,
    body ?: Body
) : Response<
    502,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return BadGatewayParameter({message, headers, body}) as Response as Response<
        502,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}
