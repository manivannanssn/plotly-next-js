'use client';
import React, { useRef, forwardRef, useId, useState, useEffect, useImperativeHandle } from 'react';
import dynamic from 'next/dynamic';

const Plotly = dynamic(
  () =>
    import('plotly.js/dist/plotly.js').then(({ newPlot, purge }) => {
      const Plotly = forwardRef(({ id, className, data, layout, config, styles }, ref) => {
        const originId = useId();
        const realId = id || originId;
        const originRef = useRef(null);
        const [handle, setHandle] = useState(undefined);

        useEffect(() => {
          let instance;
          originRef.current &&
            newPlot(originRef?.current, data, layout, config).then((ref) => setHandle((instance = ref)));
          return () => {
            instance && purge(instance);
          };
        }, [data]);

        useImperativeHandle(ref, () => handle ?? originRef.current ?? document.createElement('div'), [handle]);

        return <div id={realId} ref={originRef} className={className} styles={styles}></div>;
      });
      Plotly.displayName = 'Plotly';
      return Plotly;
    }),
  { ssr: false }
);

export default Plotly;
