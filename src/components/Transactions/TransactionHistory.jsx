import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
    return(
        <table className={css.transaction_history}>
            <thead className={css.head}>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody className={css.body}>
                {items.map(({ id, type, amount, currency }) => (
                    <tr key={id} className={css.tr}>
                        <td className={css.td}>{type}</td>
                        <td className={css.td}>{amount}</td>
                        <td className={css.td}>{currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        }),
    ),
};