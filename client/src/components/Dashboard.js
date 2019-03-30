import React from 'react'
import { Link } from 'react-router-dom'
import SurveyList from './surveys/SurveyList'

const Dashboard = () => {
    return(
        <div>
            <SurveyList />
            <div className='fixed-action-btn'>
                <a className='btn-floating btn-large red'>
                    <Link to='/surveys/new'>
                        <i className='material-icons'>add</i>
                    </Link>
                    
                </a>

            </div>
        </div>
    )
}
export default Dashboard