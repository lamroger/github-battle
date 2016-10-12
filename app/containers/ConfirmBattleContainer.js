var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle')

var ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      isLoading: true,
      playersInfo: []
    }
  },
  componentDidMount: function () {
    var query = this.props.location.query;
    // Fetch info from githup then update state
  },
  render: function () {
    return (
      <ConfirmBattle
        isLoading={this.state.isLoading}
        playerInfos={this.state.playersInfo} />
    );
  }
});

module.exports = ConfirmBattleContainer;