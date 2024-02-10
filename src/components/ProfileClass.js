import React from "react";
import ProfileUserClass from "./ProfileUserClass";
//  functional Components
// const ProfileClass = () => {
//     return (
//         <div>
//             Profile
//         </div>
//     )
// }

// class based components
class ProfileClass extends React.Component {
    // usestate in class components 
    constructor(props) {
        super(props);
        //create state 
        this.state = {
            // count: 0,
            // count2:0,
            userInfo: {
                name: "",
                // location: "",
                bio:"",
            }
        };
        // console.log("constructor");
    }
    // Class based components has life cycle
    // just like we use UseEffect to call api and call after rendering component 
    // similarly here first constructor is call then render() is called then componentDidMount is called 
    
    async componentDidMount() {
        // API calls 
        const data = await fetch("https://api.github.com/users/priyanshics20");
        const json = await data.json();
        this.setState({
            userInfo: json,
        })
        // console.log("componentDidMount");   
    }

    //after dom updated it will called 
    componentDidUpdate() {
        // console.log("componentDidUpdate");
    }

    //it will be called just before unmount (if we go to another page then just before api is unmounted it is called )
    componentWillUnmount() {
        // console.log("componentWillUnmount");
    }

    render() {
        // console.log("render");
        // destructuring state 
        // const { count } = this.state;
        // const { count2 } = this.state;
        const {userInfo} = this.state;
        return (
            <>
                {userInfo.name === "" ? null : (
                    <div className="profile-class-container">
                        <div className="profile-container">
                            <h1 className="profile-title">About Me</h1>
                            <ProfileUserClass data={userInfo} />
                        </div>
                    </div>
                    
                )}
            </>
        )
    }
}


/**
 * output -
 * constructor
 * render 
 * componentDidMount
 * API call
 * 
 * Dom render
 * componentDidUpdate
 * componentWillUnmount
 */
export default ProfileClass;