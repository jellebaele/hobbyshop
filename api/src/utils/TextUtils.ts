import * as DOMPurify from 'dompurify';

export default class TextUtils {
  public static sanitize(text: string) {
    return DOMPurify.sanitize(text);
  }
}
