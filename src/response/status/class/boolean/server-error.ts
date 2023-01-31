import {LowerParameters} from '@alirya/number/boolean/lower';
import {GreaterParameters} from '@alirya/number/boolean/greater';
/**
 * check if {@param status} is part of server error http status status (5xx)
 *
 * @param status
 */
export default function ServerError(status : number) : boolean {

    return GreaterParameters(status, 500, true) && LowerParameters(status, 600, false);
}
