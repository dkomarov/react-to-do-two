const React = require('react')
const ReactDOM = require('react-dom')
require('./css/index.css')


// module require statements
// import TodoItem from './todoItem'
const TodoItem = require('./todoItem')

// Create component
const TodoComponent = React.createClass({
  getInitialState: function(){
    return {
      todos: ['wash up', 'eat some cheese', 'take a nap', 'buy flowers']
    }
  }, 
  onDelete: function(item){
    var updatedTodos = this.state.todos.filter(function(val, index){
      return item !== val;
    });
    this.setState({
      todos: updatedTodos
    });
  },
  // render method
  render: function(){
    var todos = this.state.todos;
    todos = todos.map(function(item, index){
      return(
        <TodoItem item={item} key={index} onDelete={this.onDelete}/>
      );
    }.bind(this));
    return(
      <div id='todo-list'>
        <p>The busiest people have the most leisure...</p>
        <p>{this.state.age}</p>
        <ul>{todos}</ul>
      </div>
    );
  } // render()
});


// insert component into html page
ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'))