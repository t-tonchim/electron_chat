import React from 'react';

const FORM_STYLE = {
  display: "flex"
};

const BUTTON_STYLE = {
  marginLeft: 10
};

export default class NewMessage extends React.Component {
  constructor(porps){
    super(porps);
    this.state = { message: "" };
  }

  handleOnChange(e){
    this.setState({ message: e.target.value });
  }

  handleOnSubmit(e){
    e.preventDefault()
    const { onMessagePost } = this.props;
    if(!onMessagePost || !this.state.message.length){
      return;
    }
    onMessagePost(this.state.message);
    this.setState({ message: "" });
  }

  render(){
    return (
      <form style={FORM_STYLE} onSubmit={::this.handleOnSubmit}>
        <input type="text" className="form-control" onChange={::this.handleOnChange} value={this.state.message} />
      <button className="btn btn-large btn-primary" style={BUTTON_STYLE}>POST</button>
      </form>
    );
  }
}
