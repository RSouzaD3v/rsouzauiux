// Button.styles.ts
import styled from 'styled-components';
import { darken } from 'polished';

interface StyledButtonProps {
    bgcolor?: string;
    color?: string;
    borderRadius?: string;
    padding?: string | number;
    hoverEvent?: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
    background-color: ${({ bgcolor }) => bgcolor || '#007bff'};
    color: ${({ color }) => color || 'white'};
    border-radius: ${({ borderRadius }) => borderRadius || '5px'};
    padding: ${({ padding }) => (typeof padding === 'number' ? `${padding}px` : padding) || '10px'};
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;

    ${({ hoverEvent, bgcolor }) => 
      hoverEvent && 
      `&:hover {
          background-color: ${bgcolor ? darken(0.1, bgcolor) : darken(0.1, '#007bff')};
      }`
    }
`;
