import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      isFriendly: false, //unchecked at default
      gender: "",
      favColor: "blue"
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target
    //brackets remove parentheses. isFriendly is equal to checked, but it doesnt matter what checked is because checkboxes
    //are initialized as controlled by setting checked
    //brackets remove parantheses. Ex: firstName: {this.state.firstName}
    type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.firstName}
          name="firstName" //name property matches state
          placeholder="First Name"
          onChange={this.handleChange}
        />
        <br />
        <input
          type="text"
          value={this.state.lastName}
          name="lastName"
          placeholder="Last Name"
          onChange={this.handleChange}
        />
        <br />
        <textarea
          value={"Some default value"}
          onChange={this.handleChange}
        />
        <br />
        <label>
          <input
            // normal inputs are triggered to be controlled by setting value, while checkboxes are initialized as controlled by setting checked, regardless of their value property
            type="checkbox"
            name="isFriendly"
            checked={this.state.isFriendly}
            onChange={this.handleChange}
          /> Is friendly?
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="gender" //same name allows DOM to only choose one
            value="male"
            checked={this.state.gender === "male"} //this radio button is the selected one, if the gender is male
            onChange={this.handleChange}
          /> Male
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="gender" //same name allows dom to only choose one
            value="female"
            checked={this.state.gender === "female"}
            onChange={this.handleChange}
          /> Female
        </label>
        {/* Formik library does the form work for you */}
        <br />

        <label>Favorite Color:</label>
        <select
          name="favColor"
          value={this.state.favColor}
          onChange={this.handleChange}
        >
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
        </select>

        <h1>{this.state.firstName} {this.state.lastName}</h1>
        <h2>You are a {this.state.gender}</h2>
        <h2>Your favorite color is {this.state.favColor}</h2>
        {/* button found within form, when click will submit */}
        <button>Submit</button>
      </form>
    )
  }
}

export default App

/*
//html example, for and id are the same

<!DOCTYPE html>
<html>
  <body>

  <h1>The label element</h1>

  <p>Click on one of the text labels to toggle the related radio button:</p>

  <form action="/action_page.php">
    <label for="male">Male</label>
    <input type="radio" name="gender" id="male" value="male"><br>
    <label for="female">Female</label>
    <input type="radio" name="gender" id="female" value="female"><br>
    <label for="other">Other</label>
    <input type="radio" name="gender" id="other" value="other"><br><br>
    <input type="submit" value="Submit">
  </form>

  </body>
  </html>




*/