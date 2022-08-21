

export default function ContentType(type:string) : Record<'Content-Type', string> {

    return {
        'Content-Type' : type
    };
}