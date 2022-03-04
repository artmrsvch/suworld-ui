import styled from 'styled-components';
import { Color, md, xs } from '../ui';

type TitleProps = {
  fontSize?: string;
};

interface TypographyProps {
  fontSize?: number;
  lineHeight?: number;
  color?: string;
  textDecoration?: string;
  fontWeight?: number;
  cursor?: string;
  hoverDecoration?: string;
  xsFontSize?: number;
  mdFontSize?: number;
}

export const Title = styled.h1<TitleProps>`
  font-size: ${(props) => props.fontSize || '38px'};
  color: ${Color.strongBlue};
  font-weight: 600;
  margin-bottom: 30px;
  @media screen and (max-width: ${xs}) {
    font-size: 28px;
    margin-bottom: 20px;
  }
`;

export const Subtitle = styled.h2`
  color: ${Color.strongBlue};
  font-weight: bold;
  font-size: 20px;
  @media screen and (max-width: ${xs}) {
    font-size: 18px;
  }
`;

export const H3 = styled.h3`
  color: ${Color.strongBlue};
  font-weight: bold;
  font-size: 16px;
`;

export const H4 = styled.h4`
  color: ${Color.strongBlue};
  font-weight: bold;
  font-size: 14px;
`;

export const Paragraph = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: ${Color.strongBlue};
`;
export const Prompt = styled.p`
  color: ${Color.silver};
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  @media screen and (max-width: ${xs}) {
    font-size: 12px;
    line-height: 14px;
    font-weight: normal;
  }
`;
export const Typography = styled.span<TypographyProps>(
  ({
    fontSize = 14,
    lineHeight,
    color = Color.strongBlue,
    textDecoration,
    fontWeight,
    cursor,
    hoverDecoration,
    xsFontSize,
    mdFontSize,
  }) => ({
    color,
    lineHeight: lineHeight ? `${lineHeight}px` : `${fontSize}px`,
    fontSize,
    fontWeight,
    textDecoration,
    cursor,
    ':hover': {
      textDecoration: hoverDecoration,
    },
    [`@media screen and (max-width: ${md})`]: {
      fontSize: mdFontSize,
    },
    [`@media screen and (max-width: ${xs})`]: {
      fontSize: xsFontSize,
    },
  })
);
