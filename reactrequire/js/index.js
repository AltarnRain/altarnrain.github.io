"use strict";
/**
 * Application entry point. Define require configuration here.
 */
requirejs.config({
    baseUrl: '',
    // Serve paths from node_modules
    paths: {
        "react": "./node_modules/react/umd/react.development",
        "react-dom": "./node_modules/react-dom/umd/react-dom.development"
    }
});
// Require the Start module and fire off the application from there.
requirejs(["js/Start"], (module) => {
    module.Start();
});
//# sourceMappingURL=index.js.map