import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/template';

const ICON_MARKUP = '<span class="eco-friendly-icon" aria-hidden="true"></span>';

const REPLACEMENTS = [
  { pattern: /친환경/g },
  { pattern: /eco-friendly/gi },
];

export default helper(function ecoFriendlyLabel([value]) {
  if (typeof value !== 'string' || value.includes('eco-friendly-icon')) {
    return value;
  }

  let transformed = value;
  let changed = false;

  for (const { pattern } of REPLACEMENTS) {
    const previous = transformed;
    transformed = transformed.replace(pattern, (match) => `${ICON_MARKUP}${match}`);
    if (transformed !== previous) {
      changed = true;
    }
  }

  return changed ? htmlSafe(transformed) : value;
});
