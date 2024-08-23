import React from "react"
class UserClass extends React.Component {
    constructor(props){
        super(props);
        this.state={
            count:0,
            count2:2
        }
    };

    componentDidMount(){
        console.log("user class component did mount is called");
    }

    render(){
        console.log("user class - render called")
        return (           
            <div>
                <h1>Count:{this.state.count} </h1>
                <button onClick={()=>
                this.setState({
                    count:this.state.count+1
                })
                }>Increase count</button>
            </div>
       )
    }
}

export default UserClass;