import React, { useLayoutEffect, useRef } from 'react';

let gridAutoRows = 1;

export default function Masonry(props) {
  let container = useRef();

  // Hack for now, you need a Vertical above your component
  // https://medium.com/@andybarefoot/a-masonry-style-layout-using-css-grid-8c663d355ebb
  useLayoutEffect(() => {
    container.current.childNodes.forEach(item => {
      let span = Math.ceil(
        (item.childNodes[0].getBoundingClientRect().height + props.gap) /
          (gridAutoRows + props.gap)
      );

      item.style.gridRowEnd = `span ${span}`;
    });
  }, [props.gap, props.children]);

  return (
    <div
      ref={container}
      style={{
        display: 'grid',
        gap: props.gap,
        gridTemplateColumns: `repeat(auto-fill, minmax(${props.cardWidth}px, 1fr))`,
        gridAutoRows,
        width: props.width,
        height: props.height,
        marginTop: props.marginTop,
        marginBottom: props.marginBottom,
        marginLeft: props.marginLeft,
        marginRight: props.marginRight,
      }}
    >
      {typeof props.children === 'function' ? props.children() : props.children}
    </div>
  );
}
Masonry.defaultProps = {
  gap: 10,
  cardWidth: 300,
  width: '100%',
  height: '100%',
  marginTop: 0,
  marginBottom: 0,
  marginLeft: 0,
  marginRight: 0,
};
