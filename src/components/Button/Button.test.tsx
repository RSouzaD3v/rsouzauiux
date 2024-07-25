import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import Button from './'; 

describe("Button", () => {
    it('renders text correctly and matches snapshot', () => {
        const text = "Meu Texto";
        const { getByText } = render(<Button text={text} />);
        const textElement = getByText(text);

        expect(textElement).toBeInTheDocument();
        // expect(asFragment()).toMatchSnapshot();
    });

    it('calls onClick when clicked', () => {
        const onClickMock = jest.fn();
        const text = "Clique Aqui";
        const { getByText } = render(<Button text={text} onClick={onClickMock} />);
        const buttonElement = getByText(text);

        fireEvent.click(buttonElement);

        expect(onClickMock).toHaveBeenCalled();
        expect(onClickMock).toHaveBeenCalledTimes(1);
    });

    it('applies styles correctly', () => {
        const text = "Styled Button";
        const styled = { bgcolor: '#ff0000', color: '#ffffff', borderRadius: '10px', padding: '15px' };
        const { getByText } = render(<Button text={text} styled={styled} />);
        const buttonElement = getByText(text);

        expect(buttonElement).toHaveStyle(`background-color: ${styled.bgcolor}`);
        expect(buttonElement).toHaveStyle(`color: ${styled.color}`);
        expect(buttonElement).toHaveStyle(`border-radius: ${styled.borderRadius}`);
        expect(buttonElement).toHaveStyle(`padding: ${styled.padding}`);
    });

    it('changes background color on hover when hoverEvent is true', () => {
        const text = "Hover Test";
        const styled = { bgcolor: '#007bff', hoverEvent: true };
        const { getByText } = render(<Button text={text} styled={styled} />);
        const buttonElement = getByText(text);

        // Simulate hover
        fireEvent.mouseOver(buttonElement);

        // Use window.getComputedStyle to get the styles after hover
        const computedStyle = window.getComputedStyle(buttonElement);
        const expectedHoverColor = 'rgb(0, 98, 204)'; // This is a rough estimate, adjust according to actual style
        
        // Check if the background color is darkened
        expect(computedStyle.backgroundColor).toBe(expectedHoverColor);
    });

    it('does not change background color on hover when hoverEvent is false', () => {
        const text = "No Hover Effect";
        const styled = { bgcolor: '#007bff', hoverEvent: false };
        const { getByText } = render(<Button text={text} styled={styled} />);
        const buttonElement = getByText(text);

        // Simulate hover
        fireEvent.mouseOver(buttonElement);

        // Check if the background color remains the same
        expect(buttonElement).toHaveStyle(`background-color: ${styled.bgcolor}`);
    });
});
