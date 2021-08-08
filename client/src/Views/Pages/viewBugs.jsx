import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getBugs} from '../../Controllers/Redux/bugSlice';
import BugCard from '../Bug Card/BugCard';

const ViewBugs = () => {
    const dispatch = useDispatch();
    const {bugs} = useSelector(state => state);

    useEffect(() => {
        dispatch(getBugs())
    },[bugs.length < 1])

    return (
        <div className="page-container">
            {
                bugs.map((bug,key) => {
                    let {name,priority,version} = bug

                    return (
                        <BugCard key={key} props={{name,priority,version}} />
                    )
                })
            }
        </div>
    )
}

export default ViewBugs
