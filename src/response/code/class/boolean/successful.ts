import Lower from "@alirya/number/boolean/lower-parameters";
import Greater from "@alirya/number/boolean/greater-parameters";
/**
 * check if {@param code} is part of Successful http status code (2xx)
 *
 * @param code
 */
export default function Successful (code : number) : boolean {

    return Greater(code, 200, true) && Lower(code, 300, false);
}
