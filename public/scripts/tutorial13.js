/**
 * Created by ruslan on 04.08.16.
 */
var CommentBox = React.createClass({
getInitialState: function(){
  return {date: []};

},
  componentDidMount: function(){
  $.ajax({
    url: this.props.url,
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
  render: function(){

    return (
<div className="commentBox">
  <h1>Comments</h1>
  <CommentList data={this.state.data}/>
  <CommentForm />
</div>
    );
  }
});
