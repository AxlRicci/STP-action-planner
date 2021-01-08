import React, { useState } from 'react';

import { Tab, TabToggle, TabHeader, TabBody, TabTitle, TabOrderedList, TabUnorderedList, TabListItem, TabParagraph, TabLink, TabButton } from './activity-info-tab.styles';

const ActivityInfoTab = ({data, title}) => {
  const [isToggled, setToggled] = useState(false)
  
  const toggleTab = () => {
    setToggled(!isToggled);
  }

  // Display nested arrays.
  const stringItem = ['purpose'];
  const stringArray = ['requiredCommunications', 'availableEquipment', 'safetyAndSuccess', 'emergencyProcedures'];
  const objectArray = ['definitions', 'associatedActivities', 'resources', 'links'];
  const nestedObjectArray = ['process', 'expectedResults', 'expectedResults'];

  let tabBodyElements = null; // blank variable to hold the proper elements to render of the activity info section.
  
  // Apply the correct format and styling to the incoming data.
  switch(true) {
    case stringItem.includes(title):
      tabBodyElements = (
        <TabParagraph>{data}</TabParagraph>
      );
      break;
    case stringArray.includes(title):
      tabBodyElements = (
        <TabUnorderedList>
        {
          data.map(item => (
              <TabListItem key={item}>{item}</TabListItem>
          ))
        }
        </TabUnorderedList>
      );
      break;
    case objectArray.includes(title):
      tabBodyElements = (
        <TabUnorderedList>
          {
            data.map(({name, title, value}) => (
              <React.Fragment key={title || name}>
                {
                  value ? value.includes("http" || "www") ? (
                    <TabListItem key={title}>
                      <TabLink href={value} target="_blank" rel="noopener noreferrer">{title}</TabLink>
                    </TabListItem>
                  ) : (
                    <>
                      <TabListItem strong>{title || name}</TabListItem>
                      <TabUnorderedList>
                        <TabListItem>{value}</TabListItem>
                      </TabUnorderedList>
                    </>
                  ) : (
                    <TabListItem key={title || name}>{title || name}</TabListItem>
                  )
                }
              </React.Fragment>
            ))
          }
        </TabUnorderedList>
      );
      break;
    case nestedObjectArray.includes(title):
      tabBodyElements = (
        <TabOrderedList>
          {
            data.map(({title, additionalInfo}) => (
              <React.Fragment key={title}>
                <TabListItem>{title}</TabListItem>
                {
                  additionalInfo ? (
                    additionalInfo.map(addInfo => (
                      <TabUnorderedList key={addInfo}>
                        <TabListItem>{addInfo}</TabListItem>
                      </TabUnorderedList>
                    ))
                  ) : null
                }
              </ React.Fragment>
            ))
          }
        </TabOrderedList>
      );
      break;
    default:
      tabBodyElements = null;
  }

  return (
    <Tab>
      <TabHeader onClick={() => toggleTab()}>
        <TabToggle isToggled={isToggled} />
        <TabTitle>{title.split(/(?=[A-Z])/).join(' ')}</TabTitle>
      </TabHeader>
      <TabBody isToggled={isToggled}>
        {tabBodyElements}
      </TabBody>
    </Tab>
  )
}

export default ActivityInfoTab
