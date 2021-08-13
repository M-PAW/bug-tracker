import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom';
import {getBugs} from '../../../Controllers/Redux/bugSlice';
import Card from '../../Components/Dashboard/Card';

const Dashboard = () => {
    const dispatch = useDispatch();
    const bugs = useSelector(state => state.bugs)
    const browserHistory = useHistory();
    let highCount = 0;
    let midCound = 0;
    let lowCount = 0;

    const filterBugs = (priority) => {
        return bugs.filter((bug) => {return bug.priority === priority})
    }

    const redirect = () => {
        browserHistory.push('/viewBugs');
    }

    useEffect(() => {
        dispatch(getBugs());

    },[bugs === undefined])
    console.log(`high: ${highCount}`);

    if ( bugs != undefined) {
        highCount = filterBugs(1);
        midCound = filterBugs(2);
        lowCount = filterBugs(3);
    }

    return (
        <div className="page-container">
            <Card priority="1" count={highCount.length} clickThrough={redirect} />
            <Card priority="2" count={midCound.length} clickThrough={redirect}/>
            <Card priority="3" count={lowCount.length} clickThrough={redirect}/>
        </div>
    )
}

export default Dashboard
