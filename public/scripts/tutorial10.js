/**
 * Created by ruslan on 04.08.16.
 */
var CommentList = React.createClass({
  render: function(){
var commentNodes = this.props.date.map(function (comment) {
  return (
<Comment author={comment.author} key={comment.id}>
  {comment.text}
  </Comment>
  );

});
    return (
<div className="commentList">
  {commentNodes}
</div>
    );
  }
});
