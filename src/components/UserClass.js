import React from "react";



class UserClass extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userInfo: {
                name: "dummy",
                location: "default",
               
            },
     
        };
        // console.log("child constructor called");
}
async componentDidMount() {
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    this.setState({
        userInfo:json,
    })
    console.log(json);
}
    render()
     
    {   
        const { name,location,avatar_url} = this.state.userInfo;
        // const {name,Location} = this.props;
       
         return (

            
        <div className="User-card">
            {/* <h1>count: {count}</h1>
            <button onClick={() =>{
               this.setState({
                 count: this.state.count +1
               });


            }}>count Increase</button> */}


            <img src={avatar_url} />
            <h2>Name: {name}</h2>
            <h2>Location: {location}</h2>
            <h2>contact Us : ankitkumarsingh@gmail.com</h2>


        </div>
    )
    }
}
export default UserClass;