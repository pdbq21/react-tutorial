/**
 * Created by ruslan on 04.08.16.
 */
var CommentBox = React.createClass(
  {
  render: function(){

    return(
<div className="commentBox">
<h1>Comment</h1>
  <CommentList date={this.props.date} />
  <CommentForm />
</div>
    );
  }
  }
);
