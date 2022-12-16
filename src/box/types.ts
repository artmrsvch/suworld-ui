import {CSSObject} from 'styled-components';
import {Breakpoints} from "./constant";

export type AlignItems = 'flex-start' | 'flex-end' | 'center' | 'baseline';
export type JustifyContent =
	| 'space-between'
	| 'space-evenly'
	| 'space-around'
	| 'center'
	| 'flex-end';

export type Responsive = {
	xs?: CSSObject;
	sm?: CSSObject;
	md?: CSSObject;
	lg?: CSSObject;
	xl?: CSSObject;
	customXl?: CSSObject;
	xxl?: CSSObject;
};

export type BreakpointsFlat = keyof typeof Breakpoints;

export type BoxProps = {
	column?: boolean;
	align?: AlignItems;
	justify?: JustifyContent;
	gap?: number;
	wrap?: boolean;
	padding?: string;
	margin?: string;
	border?: string;
	mt?: number;
	mb?: number;
	ml?: number;
	mr?: number;
	pt?: number;
	pb?: number;
	pl?: number;
	pr?: number;
	width?: string;
	height?: string;
	responsive?: Responsive;
}
