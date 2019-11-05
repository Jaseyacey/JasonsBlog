import React from 'react';
import register from 'register'; 

const RegisterPage = () => (
    <>
        <form onSubmit= {this.handleSubmitmit}>
            <div>
                <input
                    name="name"
                    placeholder="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                />
            </div>
            <div>
                <input
                    name="email"
                    placeholder="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                />
            </div>
            <div>
                <input
                    name="password"
                    placeholder="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                />
            </div>
            <button type="submit">
                Submit
            </button>
        </form>
    </>
);


export default RegisterPage;