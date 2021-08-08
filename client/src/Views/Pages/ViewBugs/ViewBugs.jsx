import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getBugs} from '../../../Controllers/Redux/bugSlice';
import BugCard from '../../Components/BugCard/BugCard';
import BugView from '../../Components/BugView/BugView';

const ViewBugs = () => {
    const [displayBug, setDisplayBug] = useState({
        name:'',
        isDisplayed: false,
    });
    const dispatch = useDispatch();
    const {bugs} = useSelector(state => state);

    useEffect(() => {
        dispatch(getBugs())
    },[bugs.length < 1])

    function BugClicked(name){
        console.log(`Clicked ${name}`)
        setDisplayBug({
            name: name,
            isDisplayed: !displayBug.isDisplayed,
        })
    }

    return (
        <div className="page-container">
            {
                bugs.map((bug,key) => {
                    let {name,priority,version} = bug
                    return (
                        <BugCard key={key} props={{name,priority,version}} clicked={BugClicked}/>
                    )
                })
            }
            {
                displayBug.isDisplayed?'yes':'no'
            }
        </div>
    )
}

export default ViewBugs
