import Status from '../status';

type Infer<Type> = Type extends Status<infer As> ? As : never;

export default Infer;
