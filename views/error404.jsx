const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page! Here is some fire instead!</p>
          <div>
            <img src="/images/fire.jpg" alt="Fire" />
            <div>
              photo by <a href="AUTHOR_LINK">Tirza Vandijk</a> on <a href="UNSPLASH_LINK">Unsplash</a>
            </div>
          </div>
          </main>
      </Def>
    )
  }
  

module.exports = error404
