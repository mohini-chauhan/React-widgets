import React, { lazy, Suspense } from 'react';

const LazyCircularProgressWidget = lazy(() => import('./CircularProgressWidget'));

const CircularProgressWidget = props => (
  <Suspense fallback={null}>
    <LazyCircularProgressWidget {...props} />
  </Suspense>
);

export default CircularProgressWidget;
