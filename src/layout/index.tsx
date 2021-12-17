import React from 'react';
import { Title, Subtitle, Prompt } from '../typography';
import styled from 'styled-components';

interface PageProps {
  title?: string;
}
interface SectionProps {
  title?: string;
  subtitle?: string;
  isWithMark?: boolean;
  withoutPaddingBottom?: boolean;
  withoutPaddingTop?: boolean;
}

export const Page: React.FC<PageProps> = ({ title, children }) => (
  <div>
    {title && <Title>{title}</Title>}
    {children}
  </div>
);

const SectionContainer = styled.div<{
  withoutPaddingBottom?: boolean;
  withoutPaddingTop?: boolean;
}>`
  border-bottom: 1px solid #e2e8f0;

  ${({ withoutPaddingBottom, withoutPaddingTop }) => {
    if (withoutPaddingTop && withoutPaddingBottom) return 'padding: 0;';
    if (!withoutPaddingTop && withoutPaddingBottom) return 'padding-top: 30px;';
    if (withoutPaddingTop && !withoutPaddingBottom)
      return 'padding-bottom: 30px;';

    return 'padding: 30px 0;';
  }}
`;
const SectionTitle = styled(Subtitle)<{
  subtitle?: SectionProps['subtitle'];
  isWithMark?: SectionProps['isWithMark'];
}>`
  ${({ subtitle }) =>
    subtitle ? 'margin-bottom: 12px;' : 'margin-bottom: 20px;'}
  ${({ isWithMark }) =>
    isWithMark
      ? "&:before {   display: inline-block;   margin-right: 4px;   color: #ff4d4f;  font-size: 14px;  font-family: SimSun, sans-serif;   line-height: 1;   content: '*';  }"
      : ''}
`;
const SectionSubtitle = styled(Prompt)`
  margin-bottom: 20px;
`;

export const Section: React.FC<SectionProps> = ({
  title,
  children,
  subtitle,
  isWithMark,
  withoutPaddingBottom,
  withoutPaddingTop,
}) => (
  <SectionContainer
    withoutPaddingBottom={withoutPaddingBottom}
    withoutPaddingTop={withoutPaddingTop}
  >
    {title && (
      <SectionTitle subtitle={subtitle} isWithMark={isWithMark}>
        {title}
      </SectionTitle>
    )}
    {subtitle && <SectionSubtitle>{subtitle}</SectionSubtitle>}

    {children}
  </SectionContainer>
);
