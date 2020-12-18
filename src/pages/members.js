import React from 'react';
import MembersList from '../components/MembersList'

import {DashboardLayout} from '../components/Layout';

const MembersPage = () => {
  return (
    <DashboardLayout>
      <MembersList />
    </DashboardLayout>
  )
}

export default MembersPage;