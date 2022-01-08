import Method from "../method/enum/method";
import Route from "./route";
import RequestClass from "./request-class";

export default function Put<Path extends string>(
    path : Path
) : Route<Method.PUT, Path> {

    return new RequestClass(Method.PUT, path);
}

