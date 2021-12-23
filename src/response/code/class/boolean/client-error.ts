import Lower from "@dikac/t-number/boolean/lower-parameters";
import Greater from "@dikac/t-number/boolean/greater-parameters";
/**
 * check if {@param code} is part of client error http status code (4xx)
 *
 * @param code
 */
export default function ClientError(code : number) : boolean {

    return Greater(code, 400, true) && Lower(code, 500, false);
}
