/**
 * Created by ruslan on 04.08.16.
 */
var CommentList = React.createClass({
  render: function(){
    return (
      <div className="CommentList">
        <Comment authot='Peter Hunt'> THis one comment</Comment>
        <Comment author='Jordan Walke'>This is *author* comment</Comment>
    </div>
    );

  }
});
