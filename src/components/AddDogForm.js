import React, { Component } from 'react'

class AddDogForm extends Component {
    state = {
        newDog: {
            name: "",
            breed: "",
            age: null
        },
    }

    render() {
        return (
            <form className="add-dog-form"
            // onSubmit={this.submitHandler}
            >
                <input
                    name="name"
                    type="text"
                    required
                    value={this.state.newDog.name}
                    placeholder="Name"
                // onChange={this.handleChange}
                />
                <input
                    name="breed"
                    type="text"
                    required
                    value={this.state.newDog.breed}
                    placeholder="Breed"
                // onChange={this.handleChange}
                />
                <input
                    name="age"
                    type="number"
                    required
                    value={this.state.newDog.age}
                    placeholder="Age"
                // onChange={this.handleChange}
                />

                <input type="submit"
                // value={this.props.submitLabel}
                />
            </form>
        )
    }
}

export default AddDogForm