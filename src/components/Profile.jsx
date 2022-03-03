import PropTypes from "prop-types";
import {Fragment} from "react";

const Profile = ({name,about}) => {
    return(
        <Fragment >
            <div className="profile">
                <h2 > {name} </h2>
                <hr/>
                <h1 lang="en">{about}</h1>
            </div>
        </Fragment>
    )
}
Profile.propTypes = {
    name: PropTypes.string,
    about: PropTypes.string,
};
Profile.defaultProps = {
    name: "Имя",
};

export default Profile;