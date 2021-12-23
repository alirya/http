import Headers from "../headers";

type Infer<Data> = Data extends Headers<infer As> ? As : never;

export default Infer;
