import {
  BarContainer,
  BarLeft,
  BarRight,
  BarCenter,
} from './StrengthBar.style';

const Bar = ({ height, width, background, onClick, ...props }) => (
  <BarContainer height={height} width={width} {...props}>
    <BarCenter background={background} {...props} onClick={onClick} />
    <BarLeft background={background} {...props} onClick={onClick} />
    <BarRight background={background} {...props} onClick={onClick} />
  </BarContainer>
);

export default Bar;
