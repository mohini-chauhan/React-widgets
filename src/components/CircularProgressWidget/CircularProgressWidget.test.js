import React from 'react';
import ReactDOM from 'react-dom';
import CircularProgressWidget from './CircularProgressWidget';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { within } from '@testing-library/dom';

describe('<CircularProgressWidget/>', () => {
  let onSliderChange = jest.fn();
  const defaultPassedProps = {
    widgetBackGroundColor: 'hsl(197deg 38% 31%)',
    sliderTopColor: 'cyan',
    sliderBottomColor: 'white',
  };

  test('should display the circular progress bar correctly', () => {
    render(
      <CircularProgressWidget
        onSliderChange={onSliderChange}
        {...defaultPassedProps}
      />
    );
    expect(screen.getByTestId('dashedCircularContainer')).toBeInTheDocument();
    expect(screen.getByTestId('circularProgressContainer')).toBeInTheDocument();
    expect(screen.getByTestId('slider', { value: '0' })).toBeInTheDocument();
  });

  test('should updated and display progress value in UI correctly', async () => {
    render(
      <CircularProgressWidget
        onSliderChange={onSliderChange}
        {...defaultPassedProps}
      />
    );
    expect(screen.getByTestId('progressCount')).toBeInTheDocument();
    fireEvent.change(screen.getByTestId('slider'), { target: { value: '5' } });
    await waitFor(() => {
      expect(onSliderChange).toHaveBeenCalled();
      expect(
        within(screen.getByTestId('progressCount')).getByText('5')
      ).toBeInTheDocument();
    });
  });

  test('should modify UI based on passed props', () => {
    const modifiedProps = {
      ...defaultPassedProps,
      widgetBackGroundColor: 'red',
      sliderTopColor: 'green',
      sliderBottomColor: 'yellow',
    };
    render(
      <CircularProgressWidget
        onSliderChange={onSliderChange}
        {...modifiedProps}
      />
    );
    expect(screen.getByTestId('circularContainer')).toBeInTheDocument();
    expect(screen.getByTestId('circularContainer')).toHaveStyle({
      backGround: 'red',
    });
    expect(screen.getByTestId('slider')).toHaveStyle(
      'background: yellow; background-image: linearGradient(green, green);'
    );
  });
});
