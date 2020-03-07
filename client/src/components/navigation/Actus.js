import React, { Component } from 'react'

import { connect } from 'react-redux';
//on importe les fonctions dont on a besoin
import { fetchPostsList } from '../actions';


class Actus extends Component {

    componentDidMount(){
        // on appelle la foncton fetchPost dans componentDidMount
        
        this.props.fetchPostsList();
    }


    renderPosts() {
        return this.props.posts.map( post => {
            return (
                <div className="item" key={post}>
                    <i className="large middle aligned icon user" />
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                        <UserHeader userId={post.userId}/>
                    </div>
                </div>
            )
        } )
    }

    render(){
        return(
            <div>
                <h2>Les actus du jour</h2>
                <div>
                    {this.renderPosts()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts : state.posts
    }
}

// ne pas oublier de mettre en 2dn argument la fonction que l'on souhaite utiliser dans connect  : export default connect(null, { fetchPosts })(PostList);
export default connect(mapStateToProps, { fetchPostsAndUsers })(Actus);