import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactMarkdown from "marked-react";
import './index.css';
import reportWebVitals from './reportWebVitals';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.org), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)\n",
    }
    this.Change();
    this.Change = this.Change.bind(this);
  }
  Change = async (event) => {
    this.setState({
      data: event.target.value,
    })
  }
  render() {
    return (
      <div className="App" >
        <div className="editor-header">
          <p>Text Editor</p>
          <textarea id="editor" value={this.state.data} onChange={this.Change}></textarea>
        </div>
        <div className="preview-header">
          <p>Text Previewer</p>
          <div id="preview"><ReactMarkdown>{this.state.data}</ReactMarkdown></div>
        </div>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
