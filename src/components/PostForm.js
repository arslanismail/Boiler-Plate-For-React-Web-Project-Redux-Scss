import React, { Component } from 'react';
import propTypes from 'prop-types';
import {connect} from 'react-redux';
import {createPosts} from '../actions/postsAction'

class PostForm extends Component {
 
    constructor(props){
        super(props);
        this.state={
            title:'',
            body:''
        }
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit(e){
        e.preventDefault();
        const post={
            title:this.state.title,
            body:this.state.body
        }
        this.props.createPosts(post);
        
    }
    
    render() {
        return (
            <div>
                <h1>Add a post</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                    <label>Title : </label><br/>
                    <input onChange={this.onChange} name="title" type="text" value={this.state.title} />
                    </div>
                    <br/>
                    <div>
                    <label>Body : </label><br/>
                    <textarea onChange={this.onChange} name="body" type="text"value={this.state.body} />
                    </div>
                    <br/>

                    <button type="submit">Submit</button>
                </form>
            </div>
        )
  }
}

PostForm.propTypes={
    createPosts:propTypes.func.isRequired
}
export default connect(null,{createPosts})(PostForm);
