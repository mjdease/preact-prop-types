import preact, { options } from 'preact';
import PropTypes, { checkPropTypes } from 'prop-types';

import App from './App.jsx';

// Check prop-types on element creation.
const oldVnodeHook = options.vnode;
options.vnode = (vnode) => {
    const tag = vnode.nodeName;
    if (typeof tag === 'function' && tag.propTypes != null) {
        const componentName = tag.displayName || tag.name;
        checkPropTypes(tag.propTypes, vnode.attributes, 'prop', componentName);
    }
    if (oldVnodeHook) {
        oldVnodeHook(vnode);
    }
};

preact.render(<App />, document.querySelector('body'));
