import Class from '../class.js';
import ClientError from './client-error.js';
import ServerError from './server-error.js';
import Successful from './successful.js';
import Informational from './informational.js';
import Redirection from './redirection.js';

/**
 * check if {@param status} is part of {@param status} http status status class
 *
 * @param status
 * @param type
 */

export default function ClassStatus(status : number, type : Class) : boolean {

    switch (type) {
        case Class.SUCCESSFUL : return Successful(status);
        case Class.CLIENT_ERROR : return ClientError(status);
        case Class.SERVER_ERROR : return ServerError(status);
        case Class.INFORMATIONAL: return Informational(status);
        case Class.REDIRECTION : return Redirection(status);
    }
}
