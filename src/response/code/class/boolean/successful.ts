import Lower from "@dikac/t-number/boolean/lower-parameters";
import Greater from "@dikac/t-number/boolean/greater-parameters";
/**
 * check if {@param code} is part of Successful http status code (2xx)
 *
 * @param code
 */
export default function Successful (code : number) : boolean {

    return Greater(code, 200, true) && Lower(code, 300, false);
}
