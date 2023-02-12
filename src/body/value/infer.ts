import Body from '../body.js';

type Infer<Data> = Data extends Body<infer As> ? As : never;

export default Infer;
