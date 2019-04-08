import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Container, Row, Col } from 'reactstrap';

import { Header } from './component/Header';
import { DynamicForm} from './component/DynamicForm';


class App extends React.Component {
    render() {
        let mockData = {
                "title": "This is a title for the form Header",
                "questions": [
                    {
                        "id": 2447,
                        "question_type": "TextQuestion",
                        "prompt": "What is your first answer?",
                        "is_required": false,
                        "min_char_length": 15
                    },
                    {
                      "id": 2448,
                      "question_type": "TextQuestion",
                      "prompt": "What is your second answer?",
                      "is_required": true,
                      "min_char_length": 100
                    },
                    {
                      "id": 2500,
                      "question_type": "TextQuestion",
                      "prompt": "What is your third answer?",
                      "is_required": true,
                      "min_char_length": 1,
                    }
                ]
            }
        return (
            <Container>
            <Row>
              <Col xs={{ size: 10, order: 2, offset: 1 }}>
                <Header/>
              </Col>
            </Row>
            <Row>
              <Col xs={{ size: 10, order: 2, offset: 1 }}>
              <DynamicForm 
                    data = {mockData}
                    title= "Form"
                />
              </Col>
            </Row>
          </Container>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
