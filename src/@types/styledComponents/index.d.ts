import 'styled-components';
import { dark } from '../../themes';

declare module 'styled-components' {
	type ThemeType = typeof dark;

	export interface DefaultTheme extends ThemeType {}
}
