import React, { Component } from 'react';


class AboutPage extends Component {
    render () {
        return (
            <div className="wrapper">
                <h1>About this project</h1>

                <h3>Interesting features:</h3>
                <ul>
                    <li>
                        <h4>Completely modular structure</h4>
                        <p>Every module has encapsulated all what is needed for functioning: CSS(SCSS), Routes, Actions, Constants, Utils, Reducers, ... So, each module is easy to manipulate - delete, enable, disable, move, copy, ...</p>
                        <p><strong>Benefits</strong> - better maintainability, readability, organization, ...</p>
                    </li>
                    <li>
                        <h4>Lazy loading of the modules or even module parts</h4>
                        <p>Webpack and its dynamic import feature enables lazy loading. That means that each module will have separate build JS file. Separated file means it will not be loaded in browser if client does not need it. It will be loaded only if client needs it, like when client visits the route with module page.</p>
                        <p><strong>Biggest benefit</strong> is smaller initial build and faster first screen.</p>
                    </li>
                    <li>
                        <h4>Build hashing of modules/files</h4>
                        <p>Whenever file is changed, webpack will preserve unchanged files and file names and will change only affected files and filenames. This is possible due to the separating one big build file to many modules. Also, this logic is applied to all files: JS, CSS, Images, Fonts, SVGs, ICO, all.</p>
                        <p><strong>Benefits</strong> - easier deployment, preventing caching of deployed files (every built file has own hash in the name), faster builds and incremental builds during the development</p>
                    </li>
                    <li>
                        <h4>Image minification</h4>
                        <p>Each imported image (CSS or JSX/JS) will be minified and compressed with precise configuration. Also, the webpack will detect if image content is changed but not its name, and it will add to the build unique hash. This will prevent caching of old images on production. But, if image is not changes, the hash build will remain the same.</p>
                        <p><strong>Benefits</strong> - automatic image size minification, not worrying about images and various sources, also with unique hash in name there will be no problems with caching of old images.</p>
                    </li>
                    <li>
                        <h4>CSS Modules</h4>
                        <p>CSS modules are a safe way to use same class names in our source files, but in build time there would not be any conflicts.</p>
                        <p><strong>Benefits</strong> - even junior developers cannot make mistakes with same name CSS classes and cannot make a mess. Also, it is easier for anybody new to join the project. Potentially, performance and size of the build can be better, because of the webpack's tree shaking feature - it would not include code that is never used - imported.</p>
                    </li>
                    <li>
                        <h4>Lint rules and Aliases</h4>
                        <p>Included ESLint rules inside package.json, included .editorconfig file, included aliases for commonly used folders/files, included webpack.config.js in project root, so many popular IDEs will automatically use defined rules. Lint checker will be triggered on every build and even incremental builds and will warn about irregularities.</p>
                        <p><strong>Benefits</strong> - helping all team members having same code style and early detection and prevention of style errors.</p>
                    </li>
                </ul>
            </div>
        );
    }
}

export default AboutPage;
