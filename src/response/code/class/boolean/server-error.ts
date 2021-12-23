import Lower from "@dikac/t-number/boolean/lower-parameters";
import Greater from "@dikac/t-number/boolean/greater-parameters";
/**
 * check if {@param code} is part of server error http status code (5xx)
 *
 * @param code
 */
export default function ServerError(code : number) : boolean {

    return Greater(code, 500, true) && Lower(code, 600, false);
}
