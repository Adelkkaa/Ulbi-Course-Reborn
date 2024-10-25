import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Currency } from '../../model/types/currency';
import { ListBox } from '@/shared/ui';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readOnly?: boolean;
}

const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = memo(({
    className, value, onChange, readOnly,
}: CurrencySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange]);

    return (
        <ListBox
            onChange={onChangeHandler}
            value={value}
            defaultValue={t('Укажите страну')}
            label={t('Укажите страну')}
            items={options}
            readonly={readOnly}
            direction="top right"
        />
    );
});
