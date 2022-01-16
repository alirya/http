import Class from '../class';
import ClientError from './client-error';
import ServerError from './server-error';
import Successful from './successful';
import Informational from './informational';
import Redirection from './redirection';

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
