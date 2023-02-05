import React, { useState } from 'react';
import { StrengthBarContainer, Title } from './StrengthBar.style';

import Bar from './Bar';
const barDetails = [
  {
    height: '30px',
    width: '75%',
    value: 5,
  },
  {
    height: '30px',
    width: '60%',
    value: 4,
  },
  {
    height: '30px',
    width: '45%',
    value: 3,
  },
  {
    height: '30px',
    width: '30%',
    value: 2,
  },
  {
    height: '30px',
    width: '12%',
    value: 1,
  },
];
const StrengthBar = ({
  height = '250px',
  width = '220px',
  widgetBackGroundColor = '#315c6d',
  focusBarColor = 'white',
  BarColor = '#819ca7',
  onBarChange,
}) => {
  const [active, setActive] = useState(0);
  const [strengtStatus, setStrengtStatus] = useState('low');
  const getBarBackGroundColor = (val) =>
    active >= val ? focusBarColor : BarColor;
  const handleBarClick = (e) => {
    const val = e.target.getAttribute('value');
    setActive(val);
    setStrengtStatus(val <= 2 ? 'low' : val <= 4 ? 'medium' : 'high');
    if (typeof onBarChange === 'function') onBarChange(val);
  };
  return (
    <StrengthBarContainer
      height={height}
      width={width}
      background={widgetBackGroundColor}
      data-testid='strengthBarContainer'
    >
      <Title data-testid='strengthStatus'>{strengtStatus}</Title>
      {barDetails.map((detail, index) => (
        <Bar
          height={detail.height}
          width={detail.width}
          background={getBarBackGroundColor(detail.value)}
          key={index}
          onClick={handleBarClick}
          value={detail.value}
          data-testid={`strengthBar-${detail.value}`}
        />
      ))}
    </StrengthBarContainer>
  );
};
StrengthBar.propTypes = {};

export default StrengthBar;
