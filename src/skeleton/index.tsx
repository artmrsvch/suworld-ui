import React from 'react';
import AntdSkeleton from 'antd/lib/skeleton/index';
import styled from 'styled-components';
import { md, sm, xs } from '../ui';

interface SkeletonProps {
  loading?: boolean;
  width: string;
  height: string;
  xsWidth?: string;
  smWidth?: string;
  mdWidth?: string;
  xsHeight?: string;
  smHeight?: string;
  mdHeight?: string;
  borderRadius?: string;
  skeletonLength?: number;
}

const { Button } = AntdSkeleton;

const calculateSize = (height?: string, width?: string) => {
  const result = [];

  if (width) result.push(`width: ${width}`);
  if (height) result.push(`height: ${height}`);

  return result.join(';');
};

const StyledSkeleton = styled(Button)<SkeletonProps>`
  .ant-skeleton-button {
    display: block;
    ${({ height, width }) => `width: ${width}; height: ${height}`};
    ${({ borderRadius }) => `border-radius: ${borderRadius}`};

    @media screen and (max-width: ${xs}) {
      ${({ xsHeight, xsWidth }) => calculateSize(xsHeight, xsWidth)}
    }

    @media screen and (max-width: ${sm}) {
      ${({ smHeight, smWidth }) => calculateSize(smHeight, smWidth)}
    }

    @media screen and (max-width: ${md}) {
      ${({ mdHeight, mdWidth }) => calculateSize(mdHeight, mdWidth)}
    }
  }
`;

export const Skeleton: React.FC<SkeletonProps> = ({
  children,
  skeletonLength,
  loading,
  ...rest
}) => {
  if (!loading)
    return !skeletonLength ? (
      <StyledSkeleton {...rest} />
    ) : (
      <>
        {new Array(skeletonLength).fill('').map((_, index) => (
          <StyledSkeleton key={index} {...rest} />
        ))}
      </>
    );

  return (children as React.ReactElement) || null;
};
