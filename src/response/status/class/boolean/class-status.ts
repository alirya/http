import Class from '../class';
import ClientError from './client-error';
import ServerError from './server-error';
import Successful from './successful';
import Informational from './informational';
import Redirection from './redirection';

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
