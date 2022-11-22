import React, {Component} from 'react';
import { connect } from 'react-redux';
// import { addStarred } from '../actions/index.js';
import StarredButton from './StarredButton.js';

class Latest extends Component {
    state = {
        data:{}
    }

    componentDidMount() {
        this.getData();
    }
    getData = () => {
        fetch('https://gnews.io/api/v3/topics/world?token=990d9071ebb8b5c6202a5b355abf617f')
        .then(data => data.json())
        .then(data => this.setState({data}))
    };

    render() {
        return (
            <div id="news">
                <ol>
                {Object.keys(this.state.data).length && this.state.data.articles.map((article, i) => 
                {return(
                    <li key={i}>
                    <div className="article">
                        <a href={article.url}>{article.title}</a>
                        <p>{article.description}</p>
                        <p>{article.source.name}</p>
                        <StarredButton currentArticle={article} />
                    </div>
                    </li>
                )})}
                </ol>
                <button className="more">show more</button>
            </div>
        )
    }
}

export default connect()(Latest);