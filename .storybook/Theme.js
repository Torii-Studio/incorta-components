import { create } from '@storybook/theming';
import logoStaging from '../assets/logo.png';

export default create({
  base: 'light',
  brandTitle: 'INCORTA',
  brandUrl: 'https://incorta.com',
  brandImage: logoStaging,
  appContentBg: '#f7f7f7',
  fontBase: 'Roboto'
});
