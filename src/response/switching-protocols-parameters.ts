import Response from "./response";
import SwitchingProtocolsParameter from "./switching-protocols-parameter";

export default function SwitchingProtocolsParameters() : Response<101, string, {}, undefined>;

export default function SwitchingProtocolsParameters<
    Message extends string
>(
    message : Message,
) : Response<101, Message, {}, undefined>;


export default function SwitchingProtocolsParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
>(
    message : Message,
    headers : Headers,
) : Response<
    101,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    undefined
>;


export default function SwitchingProtocolsParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body
>(
    message : Message,
    headers : Headers,
    body : Body
) : Response<
    101,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
>;


export default function SwitchingProtocolsParameters<
    Message extends string,
    Headers extends Record<string, string>,
    Body
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<101> {

    return SwitchingProtocolsParameter({message, headers, body});
}
