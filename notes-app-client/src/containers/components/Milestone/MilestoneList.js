import { React, useState } from 'react';
import MilestoneListItem from './MilestoneListItem';
import './style.css';

export default function MilestoneList(props) {
  const milestoneList = props.milestones.map((milestone, index) => {
    return (
      <div>
        <ul className='milestoneList' key={milestone.id}>
          <MilestoneListItem
            id={milestone.id}
            milestone={milestone.milestone}
            deadline={milestone.deadline}
            completed={milestone.completed}
          />
        </ul>
      </div>
    );
  });

  return <section>{milestoneList}</section>;
}
