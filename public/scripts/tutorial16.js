/**
 * Created by ruslan on 04.08.16.
 */
var CommentForm = React.createClass({
  getInitialState: function(){
    return {author: '', text: ''};
  },
  handleAuthorChange: function (e) {
    this.setState({author: e.target.value});
  },
  handleTextChange: function(e){
    this.setState({text: e.target.value});
  },
  render: function(){
    return (
      <form className="commentForm" action="">
        <input type="text" placeholder="Yout name" value={this.state.author} onChange={this.handleAuthorChange} />
        <input type="text" placeholder="Say" value={this.state.text} onChange={this.handleTextChange} />
        <input type="submit" value="POST"/>
      </form>
    );
  }
});
