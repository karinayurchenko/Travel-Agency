import React, { useState } from 'react';
import cn from 'classnames';
import { tabPanel} from '../../constants/tourDetailsTabPanel';
import './index.scss';


const TabPanel = () => {
  const [activeTab, setActiveTab] = useState('general');


  return (
    <div className="tabPanel">
      <div className="tabPanel__header">
        <div className="tabPanel__inner">
          {tabPanel.map((el) => (
            <div className="tabPanelItem" onClick={() => setActiveTab(el.name)}>
              <div className="tabPanelItem__label">{el.label}</div>
              <div className={cn({ tabPanelItem__status: activeTab === el.name })} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabPanel;
