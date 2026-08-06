/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  // Classes toggled at runtime by the inline scripts. They do appear as string
  // literals in index.html, so the scanner finds them — safelisted anyway so a
  // future refactor of the JS can't silently drop them from the build.
  safelist: ['bg-paper/85', 'backdrop-blur-md', 'opacity-0', 'hidden', 'flex'],
  theme: {
    extend: {
      colors: {
        paper:  '#F2F7FC',
        raised: '#E3EDF7',
        ink:    '#14202B',
        muted:  '#3A5568',
        faint:  '#55738D',
        rule:   '#CEDEEC',
        accent: '#C2603F',
      },
      fontFamily: {
        serif: ['Newsreader', 'Iowan Old Style', 'Georgia', 'serif'],
        sans:  ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      maxWidth: { measure: '38rem' },
    },
  },
  plugins: [],
};
