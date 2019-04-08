import React from "react";
import './form.css';

export class Step extends React.Component {
    validateQuestionType= () => {
      /* Todo validate questionType e.g text, radio etc.. */
    }
    render() {
      return(
        <React.Fragment>
        <form onSubmit={this.props.handleSubmit}>
        <div className="form-group">
          <label>{this.props.itempPrompt}</label>
          <input
            className="form-control"
            id= {this.props.id}
            name= {this.props.id}
            type="text"
            maxLength = {this.props.min}
            required = {this.props.isRequired}
            value={this.props.inputVal} 
            onChange={this.props.handleChange}
          />
        </div>
        {this.props.currentStep === 2 ? (
         <button className="btn btn-success float-right">Submit</button>
        ) : (
        null
        )}
        </form>
        </React.Fragment>
      )
    }
  }