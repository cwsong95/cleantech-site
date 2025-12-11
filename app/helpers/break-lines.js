import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/template';

/**
 * Inserts <br> tags after sentence-ending punctuation to improve readability.
 */
export default helper(function breakLines([text]) {
  if (!text) {
    return '';
  }

  const formatted = String(text)
    .replace(/([.?!])\s+/g, '$1<br />')
    .trim();

  return htmlSafe(formatted);
});
