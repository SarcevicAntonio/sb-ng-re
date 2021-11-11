Reproduction Repository for storybookjs/storybook Issue #15732

Angular 12 library with storybook: Cannot access 'component' before initialization #15732

https://github.com/storybookjs/storybook/issues/15732#issuecomment-966252511

- `npm i`
- `npm start`
- open browser on http://localhost:4200/ and it works.
- `npm run storybook`
- open browser on http://localhost:6006/ and it throws
  - `Unexpected error while loading ./stories/Example.stories.ts: ReferenceError: Cannot access 'LibComponent' before initialization` in console.
