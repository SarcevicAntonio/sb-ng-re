import { moduleMetadata } from '@storybook/angular';
import { LibComponent, LibModule } from 'projects/lib/src/public-api';

export default {
  title: 'Example',
  component: LibComponent,
  decorators: [
    moduleMetadata({
      imports: [LibModule],
    }),
  ],
};

export const FormLayout = () => ({
  template: /* HTML */ `
    <lib-parent>
      <lib-child> </lib-child>
    </lib-parent>
  `,
});
