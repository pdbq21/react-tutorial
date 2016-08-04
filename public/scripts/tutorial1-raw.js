/**
 * Created by ruslan on 04.08.16.
 */

var CommentBox = React.createClass(
  {
    displayName: 'CommentBox',
    render: function () {
      return (
        React.createElement('div', {className: 'commentBox'},
          'CommentBox'
        )
      );
    }
  }
);
ReactDOM.render(
  React.createElement(CommentBox, null),
  document.getElementsById('content')
);
