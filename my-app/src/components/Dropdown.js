import React, { useState } from 'react';
import ReactQuill, {Quill} from 'react-quill';
import {addStyles, EditableMathField} from 'react-mathquill';
// import mathQuillBlot from "quill-mathquill-blot";

// import "react-katex";
// import mathquill4quill from 'mathquill4quill';
import 'react-quill/dist/quill.snow.css'
// import 'mathquill4quill/mathquill4quill.css';

// import Textbox from './Textbox.js';

addStyles()
const Math = () => {
    const [latex, setLatex] = useState('\\frac{1}{\\sqrt{2}}\\cdot 2')
    const [text, setText] = useState('')

    return (
        <div>
            <EditableMathField 
            className="mathquill-example-field"
            latex={latex}

            onChange={(mathField) => {
                setLatex(mathField.latex())
                setText(mathField.text())
            }}
            mathquillDidMount={(mathField) => {
                setText(mathField.text())
            }}
            />
            {/* <p>{latex}</p> */}
        </div>
    )
}


const CustomButton = () => <span className="octicon octicon-star" >★</span>

/*
 * Event handler to be attached using Quill toolbar module
 * http://quilljs.com/docs/modules/toolbar/
 */
const BlockEmbed = Quill.import('blots/embed');

// class Test extends BlockEmbed {
//   static blotName = "Test"
//   static className = "embed-Test"
//   static tagName = "span"
//   static create(value) {
//     let node = super.create(value);
//     node.setAttribute('style', "text-decoration: underline;background-color : lightgreen;");
//     node.setAttribute('data-proc', value.value);
//     node.innerHTML = value;
//     // node.mathField = <Math />
//     return node;
//   }
// }
class Test extends BlockEmbed {
  static blotName = "Test"
  static className = "embed-Test"
  static tagName = "span"
  static create(content) {
    let node = super.create();
    node.setAttribute("contenteditable", false);

    var config = {
      spaceBehavesLikeTab: true,
    };

    let span = document.createElement("span");

    node.appendChild(span);
    console.log(node);


    this.MQ = MathQuill.getInterface(2); // eslint-disable-line
    node.mathField = this.MQ.MathField(span, config);

    node.mathField.latex(content);

    node.addEventListener("click", function() {
      node.mathField.focus();
    });

    return node;
  }
  static value(node) {
    return node.mathField.latex();
  }
  update(mutations, context) {
    console.log(mutations, context);
  }
}

Quill.register(Test, true);
// mathQuillBlot.register(Quill);
// Quill.register(Math, true)

function insertStar () {
  const cursorPosition = this.quill.getSelection().index
  // this.quill.insertEmbed(cursorPosition,"hr","null")
  // this.quill.insertEmbed(10, 'image', 'https://quilljs.com/images/cloud.png');
  // var cObj = {text : 'hellow world', value : 'value'};
  this.quill.insertText(cursorPosition, " ")
  this.quill.insertEmbed(cursorPosition,'Test',"x")
  this.quill.insertText(cursorPosition, " ")
  this.quill.setSelection(cursorPosition + 3)
  // this.quill.insertEmbed(cursorPosition, "mathQuill", "x");
}

/*
 * Custom toolbar component including insertStar button and dropdowns
 */

const CustomToolbar = () => (
  <div id="toolbar">
    <select className="ql-size"></select>
    <select className="ql-align"></select>
    <button className="ql-bold"></button>
    <button className="ql-italic"></button>
    <select className="ql-color" />
    <button className="ql-code-block"></button>
    <button className="ql-insertStar">
        <CustomButton />
    </button>
    {/* <button className="ql-mathQuill"></button> */}
  </div>
)

/*
 * Dropdown component with custom toolbar and content containers
 */
class Dropdown extends React.Component {
  constructor (props) {
    super(props)
    this.state = { editorHtml: '' }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (html) {
  	this.setState({ editorHtml: html });
  }

  render() {
    return (
      <div className="text-editor">
        <CustomToolbar />
        <ReactQuill
          defaultValue={this.state.editorHtml}
          onChange={this.handleChange}
          modules={Dropdown.modules}
        />
        {/* <Math /> */}
        <Math />
      </div>
    )
  }
}

/*
 * Quill modules to attach to editor
 * See http://quilljs.com/docs/modules/ for complete options
 */
Dropdown.modules = {
  toolbar: {
    container: "#toolbar",
    handlers: {
      "insertStar": insertStar,
    }
  }
}

/*
 * Quill editor formats
 * See http://quilljs.com/docs/formats/
 */
Dropdown.formats = [
  'header', 'font', 'size','align',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'color',
]


  

export default Dropdown;
