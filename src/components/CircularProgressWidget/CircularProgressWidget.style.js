import styled from 'styled-components';

export const StyledCircularContainer = styled.section`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: ${(props) => props.background};

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 30px;
  flex-direction: column;
  gap: 30px;
`;
export const DashedCircularContainer = styled.section`
  border-radius: 50%;
  border: 2px dashed hsl(195deg 13% 56% / 61%);
  margin: auto;
  padding: 20px;
`;
export const CircularProgressWrapper = styled.section`
  background: #80969d45;
  padding: 20px;
  border-radius: 50%;
  height: 69%;
  width: 69%;
`;
export const ProgressCountContainer = styled.section`
  display: flex;
  padding: 0;
  justify-content: center;
  align-items: center;
  color: white;
  border-radius: 50%;
  background: #00ffff96;
  height: 100%;
  width: 100%;
`;
export const StyledSlider = styled.input`
  width: 200px;
  &[type='range'] {
    -webkit-appearance: none;
    height: 7px;
    background: ${(props) => props.bottomColor};
    background-image: linear-gradient(
      ${(props) => props.topColor},
      ${(props) => props.topColor}
    );
    border-radius: 5px;
    background-size: ${(props) => props.progress}% 100%;
    background-repeat: no-repeat;
    &::-webkit-slider-runnable-track {
      -webkit-appearance: none;
      background: transparent;
      box-shadow: none;
      border: none;
    }
    &::-moz-range-track {
      -webkit-appearance: none;
      box-shadow: none;
      border: none;
      background: transparent;
    }
    &::-ms-track {
      -webkit-appearance: none;
      box-shadow: none;
      border: none;
      background: transparent;
    }
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      height: 15px;
      width: 15px;
      border-radius: 50%;
      border: 3px solid ${(props) => props.bottomColor};
      background: ${(props) => props.topColor};
      cursor: ew-resize;
      box-shadow: 0 0 2px 0 #555;
      transition: background 0.3s ease-in-out;
    }
    &::-moz-range-thumb {
      -webkit-appearance: none;
      height: 15px;
      width: 15px;
      border-radius: 50%;
      border: 3px solid ${(props) => props.bottomColor};
      background: ${(props) => props.topColor};
      cursor: ew-resize;
      box-shadow: 0 0 2px 0 #555;
      transition: background 0.3s ease-in-out;
    }
    &::-ms-thumb {
      -webkit-appearance: none;
      height: 15px;
      width: 15px;
      border-radius: 50%;
      border: 3px solid ${(props) => props.bottomColor};
      background: ${(props) => props.topColor};
      cursor: ew-resize;
      box-shadow: 0 0 2px 0 #555;
      transition: background 0.3s ease-in-out;
    }
  }
`;
