import Path from '../path';

type Infer<Type> = Type extends Path<infer As> ? As : never;

export default Infer;
