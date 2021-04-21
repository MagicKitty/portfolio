import * as d3 from 'd3';
import { useEffect } from 'react';
import './Background.css';

import ShortUniqueId from 'short-unique-id';

interface Props {
  texture: any;
  children: JSX.Element;
}

export default function Background(props: Props) {
  const backgroundId = new ShortUniqueId().randomUUID(6);

  useEffect(() => {
    const svg = d3
      .select('#background-' + backgroundId)
      .append('svg')
      .attr('width', '100%')
      .attr('height', '100%');
    svg.call(props.texture);
    svg
      .append('rect')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', '100%')
      .attr('height', '100%')
      .style('fill', props.texture.url());
  });

  return (
    <div
      id={`background-${backgroundId}`}
      style={{
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {props.children}
    </div>
  );
}
