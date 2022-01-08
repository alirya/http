import Method from "../method/enum/method";
import Route from "./route";
import RequestClass from "./request-class";

export default function Delete<Path extends string>(
    path : Path
) : Route<Method.DELETE, Path> {

    return new RequestClass(Method.DELETE, path);
}

