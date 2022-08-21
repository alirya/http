import ContentType from './content-type';

const ContentTypeTextUtf8 : Record<'Content-Type', string> = Object.freeze(ContentType('text/plain; charset=UTF-8'));

export default ContentTypeTextUtf8;
