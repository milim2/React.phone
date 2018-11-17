import React, {Component} from 'react';

class PhoneForm extends Component {
    state = {
        name: '',
        phone: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        // prevent page reloading
        e.preventDefault();
        
        // To pass the state value through onCreate
        this.props.onCreate(this.state);

        // init state
        this.setState({
            name: '',
            phone: ''
        });

    }

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                <label> Name :   </label> 
<input placeholder="Name"
       value = {this.state.name}
       onChange = {this.handleChange}
       name="name"
       />
      
        
        <label>  Phone : </label>
       <input placeholder="Phone"
       value = {this.state.phone}
       onChange = {this.handleChange}
       name="phone"
       />
       
      
       {/* <div>{this.state.name}{this.state.phone}</div>
             */}
        <button type="submit">Register</button>
            </form>
        );
    }

}

export default PhoneForm;