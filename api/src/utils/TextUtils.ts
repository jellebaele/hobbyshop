import { JSDOM } from 'jsdom';
import DOMPurify from 'dompurify';
const { window } = new JSDOM('');
// @ts-expect-error The typings are mistaken in DOMPurify library: https://github.com/cure53/DOMPurify/issues/437
const domPurify = DOMPurify(window);

export default class TextUtils {
  public static sanitize(text: string): string {
    return domPurify.sanitize(text);
  }

  public static sanitizeObject(object: object, exclude: string[] = []): object {
    let sanitizedObject: { [key: string]: any } = {};

    for (const [key, value] of Object.entries(object)) {
      sanitizedObject[key] = exclude.includes(key)
        ? value
        : domPurify.sanitize(value);
    }

    return sanitizedObject;
  }
}
