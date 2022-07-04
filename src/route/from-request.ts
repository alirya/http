import Route from './route';
import InferMethod from '../request/method/string/infer';
import InferPath from '../request/path/path/infer';
import Request from '../request/request';

export interface FromRequest<Type extends Request> extends Route<InferMethod<Type>, InferPath<Type>> {

}