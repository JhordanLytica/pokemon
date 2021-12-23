import styled from 'styled-components';

interface AvatarProps {
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  text?: string;
  img?: string;
}

const AvatarStyle = styled.div<AvatarProps>`
  border-radius: 50%;
  background: ${props => props.img !== '' ? `url(${props.img})` : props.backgroundColor};
  background-size: ${props => 
    props.size === 'small' ? '20px' : 
    props.size === 'medium' ? '50px' : 
    props.size === 'large' ? '100px' : '20px' 
  };
  background-repeat: no-repeat;
  background-position: center;
  width: ${props => 
    props.size === 'small' ? '20px' : 
    props.size === 'medium' ? '50px' : 
    props.size === 'large' ? '100px' : '20px' 
  };
  height: ${props => 
    props.size === 'small' ? '20px' : 
    props.size === 'medium' ? '50px' : 
    props.size === 'large' ? '100px' : '20px' 
  };
  font-size: ${props => 
    props.size === 'small' ? '15px' : 
    props.size === 'medium' ? '40px' : 
    props.size === 'large' ? '90px' : '20px' 
  };
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Avatar = ({
  backgroundColor = '#2980B9',
  size = 'medium',
  text,
  img = '',
}: AvatarProps) => {
  return (
    <AvatarStyle
      backgroundColor={backgroundColor}
      size={size}
      img={img}
    >{text}</AvatarStyle>
  );
};
