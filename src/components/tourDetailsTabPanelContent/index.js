import React from 'react';
import { tabPanelInfo } from '../../constants/tourDetailsTabPanel';
import './index.scss';

const TabPanelContent = () => (
  <div className="tabPanel__info">
    {tabPanelInfo.map((el) => (
      <div className="infoBlock">
        <div className="infoBlockLabel">{el.label}</div>
        <div className="infoBlockValue">{el.value}</div>
      </div>
    ))}
  </div>

);

export default TabPanelContent;
