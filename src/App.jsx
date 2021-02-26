import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Container from './Container';
import Content from './Content';

// all the logic is passed in this file

function App(props) {
  const pageWidth = useRef(); // width of page

  const prevPageWidth = useRef(); // width of page before changing resolution

  const componentWidth = useRef(); // width of color component

  const [left, setLeft] = useState(); // left state

  const [percentWidth, setPercentWidth] = useState(); // percent width of carousel

  const [startingX, setStartingX] = useState(); // starting x coordinate of click/touch

  const [carouselWidth, setCarouselWidth] = useState(); // width of carousel in pixels

  const [distance, setDistance] = useState(0); // distance between starting and current x coordinate

  const [shouldIUseAnim, setShouldIUseAnim] = useState(); // defines if app should use animation

  const [componentsOnPage, setComponentsOnPage] = useState(1); // amount of components on page

  const [mouseIsClicked, setMouseIsCLicked] = useState(false); // shows if mouse is clicked

  const [leftOn100Percents, setLeftOn100Percents] = useState(0); // is used in animation 100%

  const appProps = props;

  useEffect(() => { // we set a timer
    // eslint-disable-next-line no-use-before-define
    const timer = setInterval(() => setResolution(
      componentWidth.current.getBoundingClientRect().width, pageWidth.current.getBoundingClientRect().width,
    ), 50);
    return () => clearInterval(timer);
  }, [leftOn100Percents]);

  useEffect(() => {
    prevPageWidth.current = carouselWidth;
  });

  const setResolution = (componentWidthProp, pageWidthProp) => { // function that controls resolution
    const oldResolutionWidth = prevPageWidth.current;
    const amountOfPages = Math.round(pageWidthProp / componentWidthProp);
    const propLen = appProps.CONTENT.length;
    // if resolution width is changed we set carousel width and components on page
    if (componentWidthProp !== oldResolutionWidth) {
      setCarouselWidth(componentWidthProp);
      setPercentWidth(() => {
        if (pageWidthProp < 500) return propLen * 100;
        if (pageWidthProp < 1200) return (propLen / 2) * 100;
        return (propLen / 3) * 100;
      });
      setComponentsOnPage(amountOfPages);
      if (oldResolutionWidth !== undefined) { // if our app hasn't just mounted we change left, distance, 100% distance
        setShouldIUseAnim(false);
        let changed = (leftOn100Percents / oldResolutionWidth) * componentWidthProp;
        if (-changed > (propLen - amountOfPages) * componentWidthProp) changed += componentWidthProp;
        setLeft(changed);
        setDistance(changed);
        setLeftOn100Percents(changed);
      }
    }
  };

  const touchStart = (event) => { // this function runs on touch
    setLeft(leftOn100Percents);
    setDistance(leftOn100Percents);
    setStartingX(event.touches[0].clientX);
    setShouldIUseAnim(false);
  };

  const touchMove = (event) => { // this function runs on touch swipe
    const currentDistance = event.touches[0].clientX - startingX;
    const propLen = appProps.CONTENT.length;
    if (currentDistance < 0 ? -(distance + currentDistance) <= carouselWidth * (propLen - componentsOnPage)
      : distance <= -currentDistance) {
      setLeft(distance + currentDistance);
    }
  };

  const touchEnd = () => { // this function runs on end of touch
    setDistance(left);
    setShouldIUseAnim(true);
    const a = Math.round(-left / carouselWidth);
    setLeftOn100Percents(-a * carouselWidth);
  };

  const mouseStart = (event) => { // this function runs on click
    setLeft(leftOn100Percents);
    setDistance(leftOn100Percents);
    setStartingX(event.clientX);
    setShouldIUseAnim(false);
    setMouseIsCLicked(true);
  };

  const mouseMove = (event) => { // this function runs on mouse swipe
    if (mouseIsClicked === true) {
      const currentDistance = event.clientX - startingX;
      const propLen = appProps.CONTENT.length;
      if (currentDistance < 0 ? -(distance + currentDistance) <= carouselWidth * (propLen - componentsOnPage)
        : distance <= -currentDistance) {
        setLeft(distance + currentDistance);
      }
    }
  };

  const mouseEnd = () => { // this function runs on end of mouse touch
    setDistance(left);
    setShouldIUseAnim(true);
    const a = Math.round(-left / carouselWidth);
    setLeftOn100Percents(-a * carouselWidth);
    setMouseIsCLicked(false);
  };

  return (
    <Container
      pageWidth={pageWidth}
      left={left}
      width={percentWidth}
      shouldIUseAnim={shouldIUseAnim}
      leftOn100Percents={leftOn100Percents}
      grid={appProps.CONTENT.length}
      touchStart={touchStart}
      touchMove={touchMove}
      touchEnd={touchEnd}
      mouseStart={mouseStart}
      mouseMove={mouseMove}
      mouseEnd={mouseEnd}
    >
      <Content CONTENT={appProps.CONTENT} componentWidth={componentWidth} />
    </Container>
  );
}

export default App;
