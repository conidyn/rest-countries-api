import { Currency, Language } from '../types';

type Props = {
    description: string
    value?: string | number | string[]
    currencies?: Currency[]
    languages?: Language[]
};

export const DetailsInfo = ({ description, value, currencies, languages }: Props) => {
    const $value = (
        <>
            {currencies && currencies.length > 0 && (
                <ul>
                    {currencies.map(({ code }, i) => <li key={`code-${i}`}>{code}</li>)}
                </ul>
            )}
            {languages && languages.length > 0 && (
                <ul>
                    {languages.map(({ name }, i) => <li key={`name-${i}`}>{name}</li>)}
                </ul>
            )}
            {Array.isArray(value)
                ? (
                    <ul>
                        {value.map((v, i) => <li key={`value-${i}`}>{v}</li>)}
                    </ul>
                ) : (
                    <p>{value}</p>
                )}
        </>
    )

    return (
        <li>
            <span>{description}: &nbsp;</span>
            {$value}
        </li>

    )
}