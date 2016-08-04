/**
 * Created by ruslan on 04.08.16.
 */
var CommentBox = React.createClass({
  getInitialState: function(){
return {date: []};
  },
  render: function () {
    return (
<div className="commentBox">
  <h1>Comments</h1>
<CommentList date={this.state.date} />
  <CommentForm />
</div>
    );
  }
});
