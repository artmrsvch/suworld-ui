import styled from 'styled-components';
import { Color, xs } from '../ui';

type TitleProps = {
  fontSize?: string;
};

export const Title = styled.h1<TitleProps>`
  font-size: ${props => props.fontSize || '38px'};
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
