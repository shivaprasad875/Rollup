import React from 'react'

const Sections = () => {
  return (
    <div>
        <div id='section1'>
           <div id='section1-box'>
              <h2 id='section1-head'>rollup.js</h2>
              <h1 id='heading'>The JavaScript module bundler</h1>
              <p id='section1-para'>Compile small pieces of code into something larger and more complex</p>
               <button id='btn1'>Get started</button>
               <button id='btn2'>View on Github</button>
           </div>
           <div id='section1-box1'>
                 <img src="https://rollupjs.org/rollup-logo.svg" alt="" />
           </div>
        </div>
        <div id='section2'>
             <div id='section2-block'>
                 <div id='border-radius'>
                    {/* <span ><FaEarthAfrica /></span> */}
                 <h1>The web , Node...</h1>
                 <p>Rollup supports many output formats: ES modules, CommonJS, UMD, SystemJS and more. Bundle not only for the web but for many other platforms as well.</p>
                 <h3>See all format </h3>
                 </div>
                 <div id='border-radius'>\
                    {/* <span><FaTree /></span> */}
                 <h1>Tree-shaking</h1>
                 <p>Superior dead code elimination based on deep execution path analysis with the tool that bought tree-shaking to the JavaScript world.</p>
                 <h3>Learn about tree-shaking-</h3>
                 </div>
                 <div id='border-radius'>
                     <h1>Code spliting without overhead</h1>
                     <p>Split code based on differnent entry points and dynamic imports by just
                     using the import mechanism of the output format instead of custumer loader code
                     </p>
                     <h3>How to use code spliting</h3>
                 </div>
                 <div id='border-radius'>
                    {/* <span><BsPlugin /></span> */}
                     <h1>Powerful plugins</h1>
                     <p>
                       An easy to learn plugin API that allows you to 
                      implement powerfull code injections and 
                      transformations with little code. Adopted by vite 
                      and WMR.
                     </p>
                      <h3>Learn how to write plugins-</h3>
                      </div>
                      <div id='border-radius'>
                        
                     <h1>Handles your special needs</h1>
                     <p>
                      Rollup is not opinionated. many configuration
                      options and a rich plugin interface make it the 
                     ideal bundler for special build flows and higher 
                     level tooling 
                        </p>
                     <h3>See all option-</h3>
                     </div>
                     <div id='border-radius'>
                        {/* <span><SiVite /></span> */}
                     <h1>The bundler behind Vite</h1>
                         <p>
                           Developing for the web? vite pre-configures 
                         rollup for you with sensible defaults and 
                         powefull plugins while giving you an insanly 
                         fast development server.
                          </p>
                         <h3>Check out Vite-</h3>
                      </div>
             </div>
             <div id='footer'>
               <h2>Realesed under the MIT License.</h2>
               <p>Copy&Copy 2015-present Rollup comtributers</p>
             </div>
        </div>
    </div>
  )
}

export default Sections
