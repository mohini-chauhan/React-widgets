import styled from 'styled-components';

export const StrengthBarContainer = styled.article`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: ${(props) => props.background};
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  gap: 10px;
`;

export const BarContainer = styled.section`
  position: relative;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  padding: 0;
`;

export const BarCenter = styled.section`
  width: 50%;
  height: 50%;
  position: absolute;
  padding: 0;
  top: 0;
  left: 25%;
  background: ${(props) => props.background};
`;

export const BarLeft = styled.section`
  position: absolute;
  left: 0;
  width: 50%;
  height: 100%;
  background: ${(props) => props.background};
  transform: skew(20deg, 0deg);
  padding: 0;
  border-radius: 5px 0px 5px 6px;
`;
export const BarRight = styled.section`
  position: absolute;
  right: 0;
  width: 50%;
  height: 100%;
  background: ${(props) => props.background};
  transform: skew(-20deg, 0deg);
  border-radius: 0px 5px 6px 5px;
  padding: 0;
`;

export const Title = styled.h4`
  color: white;
  margin: 10px auto;
  font-weight: 200;
`;
