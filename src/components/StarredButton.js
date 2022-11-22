import React from 'react';
import { useDispatch } from 'react-redux'
import { addStarred } from '../app/starredSlice';

export default function StarredButton(props) {

    // const starred = useSelector(state => state.starred.value)
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={() => dispatch(addStarred(props.currentArticle))}>Star</button>
        </div>
    );
}