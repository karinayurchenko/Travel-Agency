import React from 'react';
import TourHeader from '../../components/tourDetailsHeader';
import TabPanel from '../../components/tourDetailsTabPanel';
import TabPanelContent from '../../components/tourDetailsTabPanelContent';
import './index.scss';

const TourDetails = () => {
  return(
  <div className='tourDetals__container'>
    <TourHeader />
    <TabPanel />
    <TabPanelContent />
  </div>
)};

export default TourDetails;
