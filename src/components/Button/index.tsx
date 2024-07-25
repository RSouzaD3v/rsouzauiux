// Button.tsx
import React from 'react';
import { StyledButton } from './Button.styles';
import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = ({ text, onClick, styled }) => {
    return (
        <StyledButton 
            onClick={onClick} 
            bgcolor={styled?.bgcolor} 
            color={styled?.color} 
            borderRadius={styled?.borderRadius} 
            padding={styled?.padding}
            hoverEvent={styled?.hoverEvent}
        >
            {text}
        </StyledButton>
    );
}

export default Button;
