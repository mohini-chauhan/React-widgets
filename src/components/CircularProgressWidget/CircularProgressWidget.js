import React, { useState } from 'react';

import {
  StyledCircularContainer,
  DashedCircularContainer,
  CircularProgressWrapper,
  ProgressCountContainer,
  StyledSlider,
} from './CircularProgressWidget.style';
import 'react-circular-progressbar/dist/styles.css';

import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';

const CircularProgressWidget = ({
  height = '200px',
  width = '200px',
  circularBarColor = 'white',
  widgetBackGroundColor = '#315c6d',
  sliderTopColor = 'cyan',
  sliderBottomColor = 'white',
  sliderMax = 10,
  slideMin = 0,
  sliderStep = 1,
  onSliderChange,
}) => {
  const [sliderValue, setSliderValue] = useState(slideMin);
  const [progessPercentage, setProgessPercentage] = useState(0);
  const ChangeSlider = (e) => {
    setSliderValue(e.target.value);
    let per = (e.target.value - slideMin) * (100 / (sliderMax - slideMin));
    setProgessPercentage(per);
    if (typeof onSliderChange === 'function') onSliderChange(e.target.value);
  };
  return (
    <StyledCircularContainer
      width={width}
      height={height}
      background={widgetBackGroundColor}
      data-testid='circularContainer'
    >
      <DashedCircularContainer data-testid='dashedCircularContainer'>
        <CircularProgressbarWithChildren
          value={progessPercentage}
          strokeWidth={3}
          styles={buildStyles({
            strokeLinecap: 'butt',
            pathColor: circularBarColor,
            trailColor: widgetBackGroundColor,
          })}
        >
          <CircularProgressWrapper data-testid='circularProgressContainer'>
            <ProgressCountContainer data-testid='progressCount'>
              {sliderValue}
            </ProgressCountContainer>
          </CircularProgressWrapper>
        </CircularProgressbarWithChildren>
      </DashedCircularContainer>

      <StyledSlider
        type='range'
        value={sliderValue}
        min={slideMin}
        max={sliderMax}
        step={sliderStep}
        topColor={sliderTopColor}
        bottomColor={sliderBottomColor}
        onChange={ChangeSlider}
        progress={progessPercentage}
        data-testid='slider'
      />
    </StyledCircularContainer>
  );
};

export default CircularProgressWidget;
