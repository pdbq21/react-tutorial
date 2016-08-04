/**
 * Created by ruslan on 04.08.16.
 */
var CommentForm = React.createClass({
getInitialState: function(){
  return {author: '', text: ''};
},
  handleAuthorChange: function(e){
  this.setState({author: e.target.value});
  },
  handleTextChange: function (e) {
    this.setState({text: e.target.value});
  },
handleSubmit: function(e){
e.preventDefault();
  var author = this.state.author.trim();
  var text =this.state.text.trim();
  if (!text || !author){
    return;
  }
  this.setState({author: '', text: ''});
},
  render: function(){

    return (
      <form className="commentForm" onSubmit={this.handleSubmit} action="">
        <input type="text" placeholder="Your name" onChange={this.handleAuthorChange} />
        <input type="text" placeholder="Say" onChange={this.handleTextChange} />
        <input type="submit" value="POST" />
      </form>
    );
  }
});
