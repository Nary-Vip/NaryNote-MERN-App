import React from 'react'
import Notesdisplay from './Notesdisplay'

function Home() {

    return (
        <div>
            <div className="container mx-3">
                <h1>Add Your Notes</h1>
                <form>
                    <div className="form-group my-3">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                <h2>Your existing notes</h2>
                <Notesdisplay/>
            </div>
        </div>
    )
}

export default Home