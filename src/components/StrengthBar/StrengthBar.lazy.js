import React, { lazy, Suspense } from 'react';

const LazyStrengthBar = lazy(() => import('./StrengthBar'));

const StrengthBar = props => (
  <Suspense fallback={null}>
    <LazyStrengthBar {...props} />
  </Suspense>
);

export default StrengthBar;
