import 'styled-components';
import { defaultTheme } from './';

declare module 'styled-components' {
	type ThemeType = typeof defaultTheme;

	export interface DefaultTheme extends ThemeType {}
}
