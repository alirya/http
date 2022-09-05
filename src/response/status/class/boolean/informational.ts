import {LowerParameters} from '@alirya/number/boolean/lower';
import {GreaterParameters} from '@alirya/number/boolean/greater';
/**
 * check if {@param status} is part of informational http status status (1xx)
 *
 * @param status
 */
export default function Informational(status : number) : boolean {

    return GreaterParameters(status, 100, true) && LowerParameters(status, 200, false);
}
