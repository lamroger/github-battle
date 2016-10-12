var React = require('react');

function puke (object) {
  return <pre>{JSON.stringify(object, null, '')}</pre>
}

function ConfirmBattle (props) {
  return props.isLoading === true
    ? <p> LOADING </p>
    : <div> ConfirmBattle! {puke(props)} </div>
}

module.exports = ConfirmBattle;