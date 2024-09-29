import {HashRouter} from 'react-router-dom';
const NewApp = (props) => {
  return  <HashRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
          <AppContainer />
      </Provider>
    </HashRouter>
 }