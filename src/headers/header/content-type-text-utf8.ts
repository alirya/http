import ContentType from './content-type.js';

const ContentTypeTextUtf8 : Record<'Content-Type', string> = Object.freeze(ContentType('text/plain; charset=UTF-8'));

export default ContentTypeTextUtf8;
