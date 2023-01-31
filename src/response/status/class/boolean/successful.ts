import {LowerParameters} from '@alirya/number/boolean/lower';
import {GreaterParameters} from '@alirya/number/boolean/greater';
/**
 * check if {@param status} is part of Successful http status status (2xx)
 *
 * @param status
 */
export default function Successful (status : number) : boolean {

    return GreaterParameters(status, 200, true) && LowerParameters(status, 300, false);
}
