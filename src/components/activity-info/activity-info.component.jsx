import React from 'react'
import { gql, useQuery } from '@apollo/client';

import ActivityInfoTab from '../activity-info-tab/activity-info-tab.component';

import {ActivityInfoContainer, ActivityDescription, ActivityTitle, ActivityTargetContainer, ActivityTargetItem} from './activity-info.styles'

const GET_ACTIVITY = gql`
  query Activity($id: ID!) {
    Activity(id: $id) {
      name
      category
      supportTarget
      description
      purpose
      definitions {
        title
        value
      }
      process {
        title
        additionalInfo
      }
      resources {
        title
        value
      }
      requiredCommunications
      associatedActivities {
        _id
        name
      }
      availableEquipment
      links {
        title
        value
      }
      safetyAndSuccess
      emergencyProcedures
      expectedResults {
        title
        additionalInfo
      }
    }
  }
`

const ActivityInfo = ({id}) => {
  const {loading, error, data} = useQuery(GET_ACTIVITY, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>
  if (error) {
    console.log(error)
    return <p>Error..</p>
  }
  console.log(data);

  const titleInfo = ['name', 'description', 'category', '__typename', 'supportTarget'] // Set which information will be removed.
  const nonTitleInfo = Object.keys(data.Activity).reduce((result, currentItem) => {
    if (!titleInfo.includes(currentItem) && data.Activity[currentItem] !== null) {
        result.push(
          {
            title: currentItem,
            data: data.Activity[currentItem],
          }
        )
      }
    return result
  }, []);

  console.log(nonTitleInfo);

  return (
    <ActivityInfoContainer>
      <ActivityTitle>
        {data.Activity.name}
      </ActivityTitle>
      <ActivityTargetContainer>
        {
          data.Activity.supportTarget.map(item => (
            <ActivityTargetItem key={item}>{item}</ActivityTargetItem>
          ))
        }
      </ActivityTargetContainer>
      <ActivityDescription>
        {data.Activity.description}
      </ActivityDescription>
      {
        nonTitleInfo ? (
          nonTitleInfo.map(({title, data}) => (
            <ActivityInfoTab key={title} title={title} data={data} />
          ))
        ) : null
      }
    </ActivityInfoContainer>
  )
}

export default ActivityInfo