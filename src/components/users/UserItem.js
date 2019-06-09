import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const UserItem = ({ user: { login, avatar_url, html_url } }) => {

        return (
            <div>
                <div className="card text-center">
                    <img 
                        alt={login}
                        src={avatar_url} 
                        className="round-img" 
                        style={{ width: '60px'}}
                    />
                    <h3>{login}</h3>
                    <div>
                        <Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>
                            More
                        </Link>
                    </div>
                </div>
            </div>
        )
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired,
}

export default UserItem
