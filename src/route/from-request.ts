import Route from './route.js';
import InferMethod from '../request/method/string/infer.js';
import InferPath from '../request/path/path/infer.js';
import Request from '../request/request.js';

export type FromRequest<Type extends Request> = Route<InferMethod<Type>, InferPath<Type>>