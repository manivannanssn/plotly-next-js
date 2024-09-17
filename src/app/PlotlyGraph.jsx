'use client';

import React from 'react';
import Plotly from './Plotly';
import Plot from 'react-plotly.js';
import { Card, CardContent } from '@mui/material';
// import Plot from 'react-plotly.js';

const PlotlyGraph = ({ plotData = {} }) => {
  const { layout, data } = plotData;
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <Card style={{ height: '100%', width: '100%' }}>
        <CardContent style={{ height: '100%', width: '100%' }}>
          <Plotly
            data={data}
            layout={{ ...layout, autosize: true }}
            config={{
              responsive: true,
              displayModeBar: true,
              //  modeBarButtonsToRemove: ['toImage','sendDataToCloud'],
              modeBarButtonsToRemove: ['sendDataToCloud', 'pan2d', 'select2d', 'lasso2d'],
              displaylogo: false,
            }}
          />
          {/* <Plot
            data={data}
            layout={{
              ...layout,
              autosize: true,

              margin: {
                pad: 16,
                // l: 50,
                // r: 50,
                // b: 100,
                // t: 100,
              },
            }}
            // layout={{ ...layout, autosize: true }}
            config={{
              responsive: true,
              displayModeBar: true,
              //  modeBarButtonsToRemove: ['toImage','sendDataToCloud'],
              modeBarButtonsToRemove: ['sendDataToCloud', 'pan2d', 'select2d', 'lasso2d'],
              displaylogo: false,
            }}
          /> */}
        </CardContent>
      </Card>
    </div>
  );
};

export default PlotlyGraph;
