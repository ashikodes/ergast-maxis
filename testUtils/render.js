import { render } from '@testing-library/react';
import { makeStore } from '../redux/store';

import { RouterContext } from 'next/dist/shared/lib/router-context';
import { Provider } from 'react-redux';

function getWrapper(contexts) {
  function Wrapper({ children }) {
    return (
      <RouterContext.Provider value={contexts.router}>
        <Provider store={contexts.store}>{children}</Provider>
      </RouterContext.Provider>
    );
  }
  return { ...contexts, wrapper: Wrapper };
}

function testRender(
  ui,
  { store = makeStore(), testRouterOptions: router = {} } = {}
) {
  const contexts = { store, router };
  const { wrapper } = getWrapper(contexts);
  return render(ui, { wrapper });
}

export default testRender;
