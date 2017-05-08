import React from 'react';
import { findIndex } from 'lodash';
import TextEditor from 'js/components/TextEditor';
import { themes, fontSizes } from 'js/components/TextEditor/options';
import { Row, Col, Card } from 'antd';
import pseudo from 'pseudo-js';
import axios from 'axios';
import './styles.scss';

export default class Editor extends React.Component {

  constructor(props) {
    super(props);

    var text = 'lista es [1, 2, 3, 4]\n\npor cada valor en lista {\n\tsi valor igual 2 {\n\t\tmostrar(2)\n\t} sino si valor > 2 {\n\t\tmostrar(valor)\n\t}\n}';
    this.state = {
      text: text,
      javascript: pseudo.compileToJS(text),
      ast: JSON.stringify(pseudo.compileToSyntaxTree(text), null, '\t')
    }
    this.handleChangeTheme = this.handleChangeTheme.bind(this);
    this.handleChangeFontSize = this.handleChangeFontSize.bind(this);
  }

  componentDidMount() {
    const { fetchLessons, lessons } = this.props;
    !lessons.exercises ? fetchLessons(1) : null;
  }

  handleChangeTheme(theme) {
    this.props.changeTextEditorTheme(theme);
  }

  handleChangeFontSize(fontSize) {
    this.props.changeFontSize(fontSize);
  }

  handleChangeText = (text) => {
    var javascript = pseudo.compileToJS(text);
    var ast = JSON.stringify(pseudo.compileToSyntaxTree(text), null, '\t');
    const object = { text: text}
    
    axios({
      method: 'post', 
      url: 'http://localhost:8000/pseudocode', 
      data: object, 
    })
      .then( ({ data }) => {
        console.log(data);
      })
    ;

    this.setState((previousState) => {
      return {
        text,
        javascript,
        ast
      } 
    });
  }

  getNextExercise = () => {
    const { exercises } = this.props.lessons[0];
    const index = findIndex(exercises, (e) => e.done === false);
    return index > -1 ? exercises[index] : null;
  };

  render() {
    const exercise = this.props.lessons[0]
      ? this.getNextExercise()
      : null;
    return (
      <Row className="editorContainer">
        <Col span={6}>
          <Card className="card" title="Introduction" bordered={false}>
            {exercise ?
              <div>
                <h3>{exercise.title}</h3>
                <p>{exercise ? exercise.description : 'Possible exercise'}</p>
                <div className='instructions'>
                  <p>{exercise.instructions}</p>
                </div>
              </div>
              : <p>Possible exercise</p>
            }
          </Card>
        </Col>
        <Col span={9}>
          <TextEditor className="editor" theme="chrome" mode="text" height='80vh' showGutter={false} value={this.state.text} onChange={this.handleChangeText} />
        </Col>
        <Col span={9}>
          <TextEditor className="editor" readOnly={true} mode="json" height='39vh' value={this.state.ast} />
          <TextEditor className="editor" readOnly={true} mode="javascript" height='39vh' value={this.state.javascript} />
        </Col>
      </Row>
    );
  }
}
