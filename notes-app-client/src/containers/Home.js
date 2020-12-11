import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import './Home.css';

export default function Home() {
  const history = useHistory();
  const userId = localStorage.getItem('userId');

  return (
    <div className='Home'>
      <div className='lander'>
        <h1>Goal Tracker</h1>
        <p className='text-muted'>
          This is a goal tracker app. This is the Homepage
        </p>

        {userId ? (
          <div style={{ width: '14rem', margin: '0 auto' }}>
            <Button
              block
              size='md'
              type='submit'
              onClick={() => history.push('/default')}
            >
              View Dashboard
            </Button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
