import React from "react";
import './form.css';
import { Step} from './step';


export class DynamicForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentStep: 0,
            data: props.data,
            inputVal: [],
            val: ''
        };    
    }

    _next = () => {
        let currentStep = this.state.currentStep;
        currentStep = currentStep >= 2 ? 2: currentStep + 1;
        this.setState({
          currentStep: currentStep,
          val:  ''
        });
        this.state.inputVal.splice(currentStep-1, 1, this.state.val);
      }

    _prev = () => {
        let currentStep = this.state.currentStep
        currentStep = currentStep < 1 ? 0: currentStep - 1;
        console.log(this.state.inputVal);
        this.setState({
          currentStep: currentStep,
          val: ''
        })
      }

    nextButton(){
        let currentStep = this.state.currentStep;
        if(currentStep <2){
          return (
            <button 
              className="btn btn-primary float-right" 
              type="button" onClick={this._next}>
            Next
            </button>        
          )
        }
        return null;
    }

    previousButton() {
        let currentStep = this.state.currentStep;
        if(currentStep !==0){
          return (
            <button 
              className="btn btn-secondary" 
              type="button" onClick={this._prev}>
            Previous
            </button>
          )
        }
        return null;
    }

    handleChange = (event) => {
        const {value} = event.target
        this.setState({
            val : value
        })    
    }

    handleSubmit = event => {
        event.preventDefault()
        
        this.state.inputVal.length >= 2 ? this.state.inputVal.splice(2, 1, this.state.val)
       : this.state.inputVal.push(this.state.val);
        alert(`These are your answers:  ${this.state.inputVal}` )
      }

    render() {
        let title = this.props.data.title || "Dynamic Form";
        let item = this.props.data.questions[this.state.currentStep];
        return (
           <div>
                <h6> {title} </h6>
                <p>Step {this.state.currentStep +1} </p> 
                <Step
                    id = {item.id}
                    questionType = {item.question_type}
                    itempPrompt = {item.prompt}
                    isRequired = {item.is_required}
                    min = {item.min_char_length}
                    currentStep = {this.state.currentStep}
                    handleChange={this.handleChange}
                    value = {this.state.val}
                    handleSubmit = {this.handleSubmit}
                />
                {this.previousButton()}
                {this.nextButton()}
            </div>

        );
    }
}

