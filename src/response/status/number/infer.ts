import Status from '../status.js';

type Infer<Type> = Type extends Status<infer As> ? As : never;

export default Infer;
