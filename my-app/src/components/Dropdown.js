import React from 'react';

import EditorJs from '@natterstefan/react-editor-js';
import Paragraph from '@editorjs/paragraph'
import List from '@editorjs/list'
import Table from '@editorjs/table'
import Embed from '@editorjs/embed'
import Header from '@editorjs/header'
import Marker from '@editorjs/marker'
import SimpleImage from '@editorjs/simple-image'
import ImageTool from '@editorjs/image'

// import { data } from "react-editor-js/data";

export const EDITOR_JS_TOOLS = {
  paragraph: {
    class: Paragraph,
    inlineToolbar: true
  },
  list: {
    class: List,
    inlineToolbar: true
  },
  table: {
    class: Table,
    inlineToolbar: true
  },
  embed: Embed,
  header: {
    class: Header,
    inlineToolbar: true
  },
  marker: Marker,
  
  // image: {
  //   class: ImageTool,
  //   config: {
  //     endpoints: {
  //       byFile: 'http://localhost:3000/uploadFile', // Your backend file uploader endpoint
  //       byUrl: 'http://localhost:3000/fetchUrl', // Your endpoint that provides uploading by Url
  //     }
  //   }
  // }
  
}

// class Dropdown extends React.Component{
//   editor = null
  
//   printStuff() 
//   {
    
//       editor.save().then((outputData) => {
//         console.log('Article data: ', outputData)
//       }).catch((error) => {
//         console.state.log('Saving failed: ', error)
//       });
//   }
//   render() {
    
//     return(
//       // 
//       <div>
//         <EditorJs 
//       tools={EDITOR_JS_TOOLS} 
//       editorInstance={editorInstance => {
//         // invoked once the editorInstance is ready
//         this.editor = editorInstance
//       }}
//       />
//         <button onClick={this.printStuff}>hello</button>
//       </div>
//     )
//   }
// }
class Dropdown extends React.Component {
  async onSave() {
    const outputData = await this.editorInstance.save();
    console.log("outputData", outputData);
  }

  render() {
    return (
      <>
        <button onClick={this.onSave.bind(this)} type="button">
          Save Content (check console output)
        </button>
        <EditorJs
          editorInstance={instance => (this.editorInstance = instance)}
          tools={EDITOR_JS_TOOLS}
          // data={data}
        />
      </>
    );
  }
}

export default Dropdown;