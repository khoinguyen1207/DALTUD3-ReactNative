/* eslint-disable prettier/prettier */
export function formatCurrency(currency: number) {
    return Intl.NumberFormat('de-DE').format(currency);
}
