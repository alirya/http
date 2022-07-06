import Path from '../path.js';

type Infer<Type> = Type extends Path<infer As> ? As : never;

export default Infer;
