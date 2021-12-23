import React from 'react';
import styled from 'styled-components';

interface SectionProps {
  backgroundColor?: string;
  width?: string;
  height?: string;
  shadow?: boolean;
  borderRadius?: string;
  display?: 'block' | 'none' | 'flex';
  alignItems?: 'center' | 'flex-end' | 'flex-start';
  justifyContent?: 'space-between' | 'center';
  position?: string;
  top?:  string;
  bottom?: string;
  left?: string;
  right?: string;
  margin?: string;
  padding?: string;
  children?: JSX.Element[] | JSX.Element;
}

const SectionStyle = styled.div<SectionProps>`
  border-radius: ${props => props.borderRadius};
  background: ${props => props.backgroundColor};
  width: ${props => props.width};
  height: ${props => props.height};
  box-shadow: ${props => props.shadow ? '10px 10px 10px -6px gray' : '' };
  display: ${props => props.display};
  align-items: ${props => props.alignItems};
  justify-content: ${props => props.justifyContent};
  position: ${props => props.position};
  top: ${props => props.top};
  bottom: ${props => props.bottom};
  left: ${props => props.left};
  right: ${props => props.right};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
`;

export const Section: React.FC<SectionProps> = ({
  backgroundColor = '#ffffff',
  width = '100%',
  height = '300px',
  borderRadius = '0px',
  shadow = false,
  display = 'block',
  alignItems,
  justifyContent,
  children,
  ...props
}) => {
  return (
    <SectionStyle
      backgroundColor={backgroundColor}
      width={width}
      height={height}
      borderRadius={borderRadius}
      shadow={shadow}
      display={display}
      alignItems={alignItems}
      justifyContent={justifyContent}
      {...props}
    >{children}</SectionStyle>
  );
};
