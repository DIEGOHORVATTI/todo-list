import GloablStyle from 'styles/global-style'
import { MemoryRouter } from 'react-router'
import { Provider } from 'react-redux'
import { store } from 'store'

export const decorators = [
  (Story) => (
    <MemoryRouter initialEntries={['/']}>
      <Provider store={store}>
        <GloablStyle />
        <Story />
      </Provider>
    </MemoryRouter>
  )
]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: 'fullscreen',
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}