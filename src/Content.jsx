import React from 'react';

// File of content
function Content(props) {
  const contentProps = props;
  return (
    <>
      {contentProps.CONTENT.map(
        (elem, a = 0) => (
          <div ref={contentProps.componentWidth} key={a}>
            {elem}
          </div>
        ),
      )}
    </>
  );
}

export default Content;
