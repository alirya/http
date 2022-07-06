import Class from '../class.js';
import ClientError from './client-error.js';
import ServerError from './server-error.js';
import Successful from './successful.js';
import Informational from './informational.js';
import Redirection from './redirection.js';

/**
 * check if {@param code} is part of {@param status} http status code class
 *
 * @param code
 * @param status
 */

export default function ClassCode(code : number, status : Class) : boolean {

    switch (status) {
        case Class.SUCCESSFUL : return Successful(code);
        case Class.CLIENT_ERROR : return ClientError(code);
        case Class.SERVER_ERROR : return ServerError(code);
        case Class.INFORMATIONAL: return Informational(code);
        case Class.REDIRECTION : return Redirection(code);
    }
}
