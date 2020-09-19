import Response from "./response";
import StandardCode from "./message/message/standard";
import Standard from "./standard";

export default function Ok<Body, Headers extends Record<string, string>>
    (body : Body, header : Headers) : Response<200, string, Headers, Body>;
export default function Ok<Body>
    (body : Body) : Response<200, string, {}, Body>;
export default function Ok
    () : Response<200, string, {}, undefined>;
export default function Ok<
    Body,
    Headers extends Record<string, string>
>(
    body ?: Body,
    header ?: Headers
) : Response<200, string, Headers|{}, Body|undefined> {

    return new Standard(200, StandardCode(200), header ? header : {}, body);
}

