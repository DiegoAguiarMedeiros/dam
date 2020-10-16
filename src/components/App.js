import React from 'react';
import Post from './Post';
import Head from './Head';
import About from './About';
import 'bootstrap/dist/css/bootstrap.min.css';
export default class App extends React.Component {
    render() {
        return (
            <div className="bg-secondary text-white">
                <Head />
                <About />
                <h1>hello world</h1>
                <Post title='teste post 1' />
                <Post title='teste post 2' />
                <Post title='teste post 3' />
            </div>
        );
    }
} 