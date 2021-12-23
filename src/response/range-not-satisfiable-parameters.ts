import Response from "./response";
import RangeNotSatisfiableParameter from "./range-not-satisfiable-parameter";

export default function RangeNotSatisfiableParameters() : Response<416, string, {}, undefined>;

export default function RangeNotSatisfiableParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    416,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
>;

export default function RangeNotSatisfiableParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    416,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return RangeNotSatisfiableParameter({message, headers, body}) as Response as Response<
        416,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}
