// Custom Shiki theme built from the site's palette. Editor-grade coverage
// (TextMate scopes) but kept on-brand: a cool, blue-forward monochrome with
// two harmonizing accents (teal strings, periwinkle numbers). No off-palette
// greens/ambers, so it reads as part of the dark editorial system.
const shikiTheme = {
  name: 'zf-editorial',
  type: 'dark',
  bg: '#08090c',
  fg: '#cdd3dd',
  colors: {
    'editor.background': '#08090c',
    'editor.foreground': '#cdd3dd',
  },
  // Ordered general -> specific; more specific scopes win.
  tokenColors: [
    {
      scope: ['comment', 'punctuation.definition.comment', 'string.comment'],
      settings: { foreground: '#6b7280', fontStyle: 'italic' },
    },
    {
      scope: ['keyword', 'storage', 'storage.type', 'storage.modifier', 'keyword.control'],
      settings: { foreground: '#4c9aff' },
    },
    // Operators and punctuation stay quiet so keywords carry the emphasis.
    {
      scope: ['keyword.operator', 'punctuation', 'meta.brace', 'punctuation.separator', 'punctuation.terminator'],
      settings: { foreground: '#7c86a0' },
    },
    {
      scope: ['string', 'string.quoted', 'constant.character', 'string.template', 'meta.string'],
      settings: { foreground: '#7fc7c0' },
    },
    {
      scope: ['constant.numeric', 'constant.language', 'constant.language.boolean', 'keyword.constant'],
      settings: { foreground: '#a9b8ff' },
    },
    {
      scope: ['entity.name.function', 'support.function', 'meta.function-call.generic', 'meta.function-call'],
      settings: { foreground: '#7ab3ff' },
    },
    {
      scope: [
        'entity.name.class',
        'entity.name.type',
        'support.class',
        'support.type',
        'entity.other.inherited-class',
        'entity.name.function.decorator',
        'meta.decorator',
      ],
      settings: { foreground: '#9ecbff' },
    },
    {
      scope: ['variable.parameter', 'meta.function.parameters'],
      settings: { foreground: '#a7aeba' },
    },
    {
      scope: ['variable.language', 'variable.language.self', 'variable.language.special'],
      settings: { foreground: '#4c9aff', fontStyle: 'italic' },
    },
  ],
};

export default shikiTheme;
