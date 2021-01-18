import React, { useEffect, useState } from 'react'
import { gql, useLazyQuery } from '@apollo/client';

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
  const [getActivityInfo, {loading, error, data}] = useLazyQuery(GET_ACTIVITY);
  const [oldActivityId, setOldActivityId] = useState(null)

  useEffect(() => {
    if (id !== oldActivityId) {
      setOldActivityId(id)
      getActivityInfo({variables: {id}})
    }
  },[id, oldActivityId, getActivityInfo])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error...</p>
  if (!data?.Activity) return <p>No activity selected.</p>


  const titleInfo = ['name', 'description', 'category', '__typename', 'supportTarget'] // Set which information will be removed from dropdown sections.
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