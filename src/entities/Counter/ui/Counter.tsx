import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui';
import { useCounterActions } from '../model/slice/counterSlice';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
    const { t } = useTranslation();
    const counterValue = useCounterValue();
    const { decrement, increment } = useCounterActions();

    const incrementFn = () => {
        increment();
    };

    const decrementFn = () => {
        decrement();
    };
    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button
                data-testid="increment-btn"
                onClick={incrementFn}
            >
                {t('increment')}
            </Button>
            <Button
                data-testid="decrement-btn"
                onClick={decrementFn}
            >
                {t('decrement')}
            </Button>
        </div>
    );
};
