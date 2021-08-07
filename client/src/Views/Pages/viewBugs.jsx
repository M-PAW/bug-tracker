import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getBugs} from '../../Controllers/Redux/bugSlice';

const viewBugs = () => {
    const dispatch = useDispatch();
    const {bugs} = useSelector(state => state);

    useEffect(() => {
        dispatch(getBugs())
    },[bugs.length < 1])

    return (
        <div className="page-container">
            {
                bugs.map((bug,key) => {
                    return (
                        
                    )
                })
            }
        </div>
    )
}

export default viewBugs
