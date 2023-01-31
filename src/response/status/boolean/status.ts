import Status from '../status';
import Number from '@alirya/number/boolean/number';

export default function Status(status: Status|object) : status is Status {

    return Number((status as Status).status);
}

export const IsStatus = Status;