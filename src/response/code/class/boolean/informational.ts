import {LowerParameters} from '@alirya/number/boolean/lower.js';
import {GreaterParameters} from '@alirya/number/boolean/greater.js';
/**
 * check if {@param code} is part of informational http status code (1xx)
 *
 * @param code
 */
export default function Informational(code : number) : boolean {

    return GreaterParameters(code, 100, true) && LowerParameters(code, 200, false);
}
