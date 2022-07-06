import Route from './route.js';
import InferMethod from '../request/method/string/infer.js';
import InferPath from '../request/path/path/infer.js';
import Request from '../request/request.js';

export interface FromRequest<Type extends Request> extends Route<InferMethod<Type>, InferPath<Type>> {

}