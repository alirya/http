import Headers from '../headers.js';

type Infer<Data> = Data extends Headers<infer As> ? As : never;

export default Infer;
