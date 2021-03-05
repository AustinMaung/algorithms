import React from 'react';

class Dropdown extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text: "bob"
        }
    }
    render() {
        const container_style = {
            backgroundColor: "white",
            padding: "6px",
            // margin: "6px",
            marginTop: "12px",
            marginBottom: "12px",
            // borderRadius: "10px",
            border: "2px solid black",
            fontSize: "16px",
            outline: "0px solid transparent"
        }
        return(
            <div contentEditable={"plaintext-only"} suppressContentEditableWarning={true} style={container_style}>
                {this.state.text}
            </div>
        )
    }
}    

export default Dropdown;