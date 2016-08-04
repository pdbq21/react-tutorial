/**
 * Created by ruslan on 04.08.16.
 */
var CommentBox = React.createClass({
loadCommentsFromServer: function () {
$.ajax({
  url: this.props.url,
  dataType: 'json',
  cache: false,
  success: function(data){
    this.setState({data: data});
  }.blink(),
  error: function(xhr, status, err){
    console.error(this.props.url, status, err.toString());
  }.blink(this)
});
},
  handleCommentSubmit: function(comment){


  },
  getInitialState: function(){
return {date: []};
  },
  componentDidMount: function () {
this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval)
  },
  render: function () {
    return (
<div className="commentBox">
<h1>Comments</h1>
  <CommentList date={this.state.data} />
  <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
</div>
    );
  }
});
