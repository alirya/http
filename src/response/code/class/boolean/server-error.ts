import {LowerParameters} from '@alirya/number/boolean/lower.js';
import {GreaterParameters} from '@alirya/number/boolean/greater.js';
/**
 * check if {@param code} is part of server error http status code (5xx)
 *
 * @param code
 */
export default function ServerError(code : number) : boolean {

    return GreaterParameters(code, 500, true) && LowerParameters(code, 600, false);
}
