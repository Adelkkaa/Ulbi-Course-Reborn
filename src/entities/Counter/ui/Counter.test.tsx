import { userEvent } from '@storybook/testing-library';
import { screen } from '@testing-library/react';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { Counter } from './Counter';

describe('getCounter', () => {
    test('should return counter value', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });

        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });

    test('increment', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });

        const incrementBtn = screen.getByTestId('increment-btn');

        userEvent.click(incrementBtn);

        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
    });

    test('decrement', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });

        const decrementBtn = screen.getByTestId('decrement-btn');

        userEvent.click(decrementBtn);

        expect(screen.getByTestId('value-title')).toHaveTextContent('9');
    });
});
