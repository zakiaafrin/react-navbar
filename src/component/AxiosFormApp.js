import React, { Component } from 'react';
import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com'
const initialState = {
    userId: 112,
    title: '',
    body: '',
    isSubmitted: false,
    error: false
}
class AxiosFormApp extends Component {
    state = { ...initialState }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submitHandler = (e) => {
        e.preventDefault()
        axios.post(`${BASE_URL}/posts`, {
            userId: this.state.userId,
            title: this.state.title,
            body: this.state.body
        })
            .then(res => {
                this.setState({
                    isSubmitted: true,
                    error: false
                })
                console.log(res)
            })
            .catch(err => {
                this.setState({
                    isSubmitted: false,
                    error: true
                })
            })
        console.log(this.state)
        this.formRef.reset();
        this.setState({ ...initialState })
    }

    render() {
        return (
            <div className='container'>
                <form onSubmit={this.submitHandler} ref={(ref) => this.formRef = ref}>
                    <div className="form-group">
                        <input
                            type='text'
                            className='form-control m-2'
                            name='title'
                            value={this.state.title}
                            placeholder='Enter Your Title'
                            onChange={this.changeHandler}
                        />
                        <textarea
                            type='text'
                            className='form-control m-2'
                            name='body'
                            value={this.state.body}
                            placeholder='Enter Your Text'
                            onChange={this.changeHandler}
                        />
                        <button type='submit' className='btn btn-success m-2'>Submit</button>
                        {this.state.isSubmitted && <p className='text-success'>Your data is Submitted successfully</p>}
                        {this.state.error && <p className='text-danger'>Error Occured</p>}
                    </div>
                </form>
            </div>
        );
    }
}

export default AxiosFormApp;

