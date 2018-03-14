import React, { Component } from 'react';
class AddProject extends Component {
  constructor(){
    super();
    this.state = {
      newProject: {}
    }
  }
  static defaultProps = {
    categories:  ['web developement', 'shopify', 'react native']
  }
  handleSubmit(e){
    if(this.refs.title.value === ''){
    alert('Title is Required');
  } else {
    this.setState({newProject:{
      title: this.refs.title.value,
      category: this.refs.category.value
    }}, function(){
    //console.log(this.state)
    this.props.addProject(this.state.newProject);
  });
}
  e.preventDefault();
  }
  render() {
  let categoryOption = this.props.categories.map(category=>{
    return <option key={category} value={category}>{category}</option>
  });
  return (
      <div className="AddProject">

    <h1>My Project</h1>
    <div>
<form onSubmit={this.handleSubmit.bind(this)}>
<div>
<label>Title</label>
<input type="text" ref="title" />
</div>
<div>
<label>Category</label>
<select ref="category">
{categoryOption}
</select>
</div>
<br />
<input type="submit" value="submit" />

</form>
</div>
      </div>
    );
  }
}

export default AddProject;
