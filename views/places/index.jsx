const React = require('react')
const Def = require('./default')

function places () {}

module.exports = places

function index (data) {
    let placesFormatted = data.places.map((place) => {
      return (
        <div>
          <h2>{place.name}</h2>
          <img src={place.pic} alt={place.name}/>
        </div>
      )
    })
    return (
      <Def>
          <main>
              <h1>Places to Rant or Rave About</h1>
              {placesFormatted}
          </main>
      </Def>
  )
  }
  