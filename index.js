import * as components from './components'

const ComponentsLibrary = {
  // eslint-disable-next-line
  install(app, options = {}) {
    for (const componentName in components) {
      const component = components[componentName]
      app.component(component.name, component)
    }
  }
}

export default ComponentsLibrary