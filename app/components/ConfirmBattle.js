var React = require('react');

function ConfirmBattle (props) {
  return props.isLoading === true
    ? <p> LOADING </p>
    : <p> ConfirmBattle! </p>
}

module.exports = ConfirmBattle;