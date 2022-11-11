import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
    return( 
        <ul className={css.friend_list}>
            {friends.map(({id, isOnline, avatar, name}) => (
                <FriendListItem key={id}
                isOnline={isOnline}
                avatar={avatar}
                name={name}
                />
            ))}
        </ul>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        }),
    ),
};