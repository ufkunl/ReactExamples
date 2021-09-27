import PropTypes from "prop-types";


function User(props) {
    if (!props.isLoggedIn) {
        return <div>Giriş Başarısız.</div>
    }

    return (
        <div>
            {
                props.name + ' ' + props.surname
            }
            <br/>
            {props.age}
            <br/>
            {
                props.friends.map((friend) => (
                    <div key={friend.id}>
                        {friend.id}-{friend.name}
                    </div>
                ))
            }
            {props.adress.title} {props.adress.zip}

        </div>
    );
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    age: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
    friends: PropTypes.array.isRequired,
    adress: PropTypes.shape({
        title: PropTypes.string,
        zip: PropTypes.number
    })
};

User.defaultProps = {
    isLoggedIn: false
}

export default User;