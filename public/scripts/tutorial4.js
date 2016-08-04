/**
 * Created by ruslan on 04.08.16.
 */
var Comment = React.createClass(
  {
  render: function(){
    return(
<div className="comment">
  <h2 className="commentAuthor">
    {this.props.author}
  </h2>
  {this.props.children}
</div>

    );

  }
  }
);
