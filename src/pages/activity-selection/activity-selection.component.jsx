import React, {useState} from 'react'
import { gql, useQuery } from '@apollo/client';

import ActivityInfo from '../../components/activity-info/activity-info.component';
import CardList from '../../components/card-list/card-list.component';
import ActivityCart from '../../components/activity-cart/activity-cart.component';

import {ActivitySelectionPageContainer, ActivityInfoSection, ActivityListSection,GoalOverviewSection} from './activity-selection.styles'

const GET_ACTIVITIES = gql`
  {
    allActivity {
      _id
      name
      category
      description
    }
  }
`

const ActivitySelectionPage = () => {
  const [info, setInfo] = useState(false);
  const [infoId, setInfoId] = useState('');
  const {loading, error, data } = useQuery(GET_ACTIVITIES);
  // console.log(data);

  // iterate through all selected goals.
  // fetch all activities that are associated with current goal.
  
  // list fetched activities

  const toggleInfo = (activityId) => {
    setInfoId(activityId);
    setInfo(true);
  };



  return (
    <ActivitySelectionPageContainer>
      <GoalOverviewSection>
        <ActivityCart />
      </GoalOverviewSection>
      <ActivityListSection info={info}>
        {
          loading ? (
            <p>Spinner..</p>
          ) : error ? (
            <p>error</p>
          ) : (
            <CardList toggleInfo={toggleInfo} cards={data.allActivity} />
          )
        }
      </ActivityListSection>
      <ActivityInfoSection info={info}>
        <button type='button' onClick={() => setInfo(false)} >Close the info</button>
        <ActivityInfo id={infoId} />
      </ActivityInfoSection>
    </ActivitySelectionPageContainer>
  )
}

export default ActivitySelectionPage
