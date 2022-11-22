import React from "react";
// import StarredItem from "./StarredItem.js";
import {useSelector} from 'react-redux'
export default function Starred(props) {
    const starredArticles = useSelector(state => {
        console.log('state', state)
        return state.starred.value
    })
          return (
            <div>
                <h2>Saved Articles</h2>
                {
                    starredArticles.map((article, i) => {
                        return (
                            <p key={i}>{article.title}</p>
                        )
                    })
                }
            </div>
        );
    }

// const mapStateToProps = state => {
//     return { articles: state.article }
// };

// export default connect(null, mapStateToProps)(Starred)
// export default Starred