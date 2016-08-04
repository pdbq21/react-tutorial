/**
 * Created by ruslan on 04.08.16.
 */
var CommentForm = React.createClass({

  render: function(){

    return (
      <form className="commentForm" action="">
        <input type="text" placeholder="Your name" />
        <input type="text" placeholder="Say " />
        <input type="submit" value="POST" />
      </form>
    );
  }
});
