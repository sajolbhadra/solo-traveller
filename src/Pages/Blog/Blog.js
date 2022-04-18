import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <h2 className='text-center'>Blog</h2>
            <div className='blog-container'>
                <div className='blog'>
                    <h3>Difference between authorization and authentication</h3>
                    <p>authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to.
                    </p>
                </div>
                <div className='blog'>
                    <h3>Why are you using firebase? What other options do you have to implement authentication?</h3>
                    <div>
                    Firebase Authentication makes it easier to get your users signed-in without having to understand the complexities behind implementing your own authentication system.
                    For Developer and Investors it is very easy to use with less modification and extra effort.
                    <br/>
                    There are several options to use for authentication.
                    Such as -
                    <ol>
                        <li>Password-based authentication. Passwords are the most common methods of authentication.</li>
                        <li>Sign in With third party site like facebook, github, twitter etc.</li>
                    </ol>
                    </div>
                </div>
                <div className='blog'>
                    <h3>What other services does firebase provide other than authentication</h3>
                    <div>
                        Firebase provide different service other than authentication such as -
                        <ol>
                            <li>Hosting Web Site</li>
                            <li>Hosting Function on the Cloud</li>
                            <li>Database</li>
                            <li>Machine Learning and Analysis</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;