import userEvent from '@testing-library/user-event';
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

    test('increment', async () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });

        const incrementBtn = screen.getByTestId('increment-btn');

        await userEvent.click(incrementBtn);

        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
    });

    test('decrement', async () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });

        const decrementBtn = screen.getByTestId('decrement-btn');

        await userEvent.click(decrementBtn);

        expect(screen.getByTestId('value-title')).toHaveTextContent('9');
    });
});
