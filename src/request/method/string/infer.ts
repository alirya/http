import Method from '../method.js';

type Infer<Type> = Type extends Method<infer As> ? As : never;

export default Infer;
