/**
 * Created by ruslan on 04.08.16.
 */
var Comment = React.createClass({
  render: function(){
    var md = new Remarkable();
    return (
<div className="comment">
<h2 className="commentAuthor">
  {this.props.author}
  </h2>
  {md.render(this.props.children.toString())}
</div>
    );

  }
});
