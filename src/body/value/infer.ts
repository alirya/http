import Body from '../body';

type Infer<Data> = Data extends Body<infer As> ? As : never;

export default Infer;
