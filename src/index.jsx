import preact, { options } from 'preact';
import PropTypes from 'prop-types';
import 'preact/debug';

import App from './App.jsx';

// Env check required to exclude prop-types package from prod builds
if (process.env.NODE_ENV !== "production") {
  // Check prop-types on element creation.
  const oldVnodeHook = options.vnode;
  options.vnode = (vnode) => {
      const tag = vnode.nodeName;
      if (typeof tag === 'function' && tag.propTypes != null) {
          const componentName = tag.displayName || tag.name;
          PropTypes.checkPropTypes(tag.propTypes, vnode.attributes, 'prop', componentName);
      }
      if (oldVnodeHook) {
          oldVnodeHook(vnode);
      }
  };
}

preact.render(<App />, document.querySelector('body'));
