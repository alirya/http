import Method from "../method";

type Infer<Type> = Type extends Method<infer As> ? As : never;

export default Infer;
