import StatusType from '../status.js';
import Number from '@alirya/number/boolean/number.js';

export default function Status(status: StatusType|object) : status is StatusType {

    return Number((status as StatusType).status);
}

export {Status as IsStatus};