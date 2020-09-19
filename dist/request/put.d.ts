import Request from "./request";
import Method from "./method/method/method";
export default function Put<Body, Path extends string, Headers extends Record<string, string>>(body: Body, path: Path, header: Headers): Request<Method.PUT, Path, Headers, Body>;
export default function Put<Body, Path extends string>(body: Body, path: Path): Request<Method.PUT, Path, {}, Body>;
