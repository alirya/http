import {LowerParameters} from '@alirya/number/boolean/lower.js';
import {GreaterParameters} from '@alirya/number/boolean/greater.js';
/**
 * check if {@param code} is part of Successful http status code (2xx)
 *
 * @param code
 */
export default function Successful (code : number) : boolean {

    return GreaterParameters(code, 200, true) && LowerParameters(code, 300, false);
}
