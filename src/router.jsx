import React from 'react'
import { Router as ReachRouter } from '@reach/router'

import App from './App.jsx'
import PageNotFound from './container/page-not-found'
import TrainingA from './component/training'
import PickTraining from './container/pick-training'

const Router = () => (
  <ReachRouter>
    <App path="/">
      <PickTraining path="/" />
      <TrainingA path="/day/:training" />
      <PageNotFound default />
    </App>
  </ReachRouter>
)

export default Router
