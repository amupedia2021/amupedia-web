import styled from 'styled-components';

export const StyledHeader = styled.div`
  position: relative;
  z-index: auto;
  width: 100%;
  height: 500px;
  background-color: ${(props) => props.backgroundConfig.backgroundColor};
  background-image: ${(props) => props.backgroundConfig.backgroundImage};
`;

export const IconsDiv = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: transparent;
  overflow: hidden;
`;
export const IconContainer = styled.div`
  position: absolute;
  display: block;
  background-color: white;
  bottom: -150px;
  left: ${(props) => props.iconConfig.left};
  width: ${(props) => props.iconConfig.width};
  height: ${(props) => props.iconConfig.height};
  animation: animate 15s linear infinite;
  animation-duration: ${(props) => props.iconConfig.animationDuration};
  animation-delay: ${(props) => props.iconConfig.animationDelay};

  @keyframes animate {
    0% {
      opacity: 1;
      border-radius: 0%;
      transform: translateY(0deg) rotate(0deg);
    }
    100% {
      opacity: 0;
      border-radius: 50%;
      transform: translateY(-600px) rotate(720deg);
    }
  }
`;
