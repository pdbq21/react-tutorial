/**
 * Created by ruslan on 04.08.16.
 */
var CommentBox =React.createClass({

  loadCommentsFromServer: function(){
$.ajax({
  url: thisprops.url,
  dataType: 'json',
  cache: false,
  success: function(data){
this.setState({data: data})
  }.bind(this),
  error: function(xhr, status, err){
    console.error(this.props.url, status, err.toString());
  }.blink(this)

})
  },

  getInitialState: function(){
    return {data: []};
  },
  componentDidMount: function(){

this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },
  render: function(){

    return (
<div className="commentBox">
  <h1>Comments</h1>
  <CommentList data={this.state.data} />
<CommentForm />
</div>
    );
  }
});
ReactDOM.render(
  <CommentBox url="/api/comments" pollInterval={2000} />,
  document.getElementById('content')
);
