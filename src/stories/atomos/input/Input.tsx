import styled from 'styled-components';

interface InputProps {
  size?: 'small' | 'medium' | 'large';
  type?: 'text' | 'password' | 'search';
  placeholder?: string;
  label?: string;
  id?: string;
  onChange?: () => void;
  color?: string;
  borderColor?: string;
}

const InputStyle = styled.div<InputProps>`
  width: 100%;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: ${props => props.color};
  input {
    color: ${props => props.color};
    width: 100%;
    border: ${props => props.borderColor !== '' ? `1px solid ${props.borderColor}` : 'none'};
    border-radius: 5px;
    background-color: transparent;
    padding: ${props => 
      props.size === 'small' ? '5px' : 
      props.size === 'medium' ? '7px' : 
      props.size === 'large' ? '10px' : '20px' 
    };
    &:focus {
      outline: none;
      box-shadow: 0px 0px 2px gray;
    }
  }
`;

export const Input = ({
  size = 'medium',
  type = 'text',
  placeholder = 'default',
  label = 'default',
  id = 'default',
  color = '#000',
  borderColor = '',
  onChange = () => {},
}: InputProps) => {
  return (
    <InputStyle size={size} color={color} borderColor={borderColor}>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} placeholder={placeholder} onChange={onChange}  />
    </InputStyle>
  );
};
