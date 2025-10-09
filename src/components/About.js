import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component{
    constructor (props) {
        super(props);
    //  console.log("parents constructer called")
    };
    
  componentDidMount() {
    // console.log("parent didmount called")
  }
     render() {

        // console.log("parents render called")
         return (
        <div>
            <h1> About </h1>
            <div>
              LogedIn User
              <UserContext.Consumer>
                {({logedInUser}) => <h3 className="text-lg font-bold"> {logedInUser} </h3>}
              </UserContext.Consumer>
            </div>
            <h2> this is the namste react webseries </h2>
            <User  name={"ankit kumar(function)"} />
            <UserClass name= {"ankit kumar kumar singh(class)"} Location={"siwan ,jiradei, bihar"}/>
        </div>
     );
     }
      
};


export default About;