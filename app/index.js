var React = require('react');
var ReactDom = require('react-dom');

var USER_DATA = {
  name: 'Roger Lam',
  username: 'mrlamroger',
  imageUrl: 'https://avatars0.githubusercontent.com/u/601386?v=3&s=466'
}

var ProfilePic = React.createClass({
  render: function () {
    return (
      <img src={this.props.imageUrl} style={{height: 100, width: 100}} />
    )
  }
});

var ProfileLink = React.createClass({
  render: function () {
    return (
      <div>
        <a href={'https://www.github.com/' + this.props.username}>
          {this.props.username}
        </a>
      </div>
    )
  }
});

var ProfileName = React.createClass({
  render: function () {
    return (
      <div>{this.props.name}</div>
    )
  }
});

var Avatar = React.createClass({
  render: function () {
    return ( 
      <div>
        <ProfilePic imageUrl={this.props.user.imageUrl} />
        <ProfileName name={this.props.user.name} />
        <ProfileLink username={this.props.user.username} />
      </div>
    )
  }
});

ReactDom.render(
  <Avatar user={USER_DATA} />,
  document.getElementById('app')
);