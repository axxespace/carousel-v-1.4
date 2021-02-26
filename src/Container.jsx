import React from 'react';
import styled, { css, keyframes } from 'styled-components';

// content container file

// following function returns dynamical animation
const animation = (left, leftOn100Percents, shouldIUseAnimation) => {
  if (shouldIUseAnimation === true) {
    return css`${
      keyframes`
        100%{
          left: ${leftOn100Percents}px;
        }`
    }`;
  } return null;
};
// styled component, that contains all color components
const ElementStyle = styled.div.attrs((props) => ({
  style: {
    left: `${props.left}px`,
    width: `${props.width}%`,
    gridTemplateColumns: `repeat(${props.grid}, 1fr)`,
  },
}))`
  position: absolute;
  display: grid;
  height: 100%;
  animation-name: ${(props) => animation(props.left, props.leftOn100Percents, props.shouldIUseAnim)};
  animation-duration: 1s;
  animation-fill-mode: forwards;
  transition-timing-function: cubic-bezier(.17,.67,.83,.67);
`;

function Container(props) {
  const containerProps = props;
  return (
    <div id="frame">
      <div id="carousel" ref={containerProps.pageWidth}>
        <ElementStyle
          left={containerProps.left}
          width={containerProps.width}
          shouldIUseAnim={containerProps.shouldIUseAnim}
          leftOn100Percents={containerProps.leftOn100Percents}
          grid={containerProps.grid}
          onTouchStart={containerProps.touchStart}
          onTouchMove={containerProps.touchMove}
          onTouchEnd={containerProps.touchEnd}
          onMouseDown={containerProps.mouseStart}
          onMouseMove={containerProps.mouseMove}
          onMouseUp={containerProps.mouseEnd}
        >
          {containerProps.children}
        </ElementStyle>
      </div>
    </div>
  );
}

export default Container;
