import React from 'react';
import Textbox from './Textbox.js';

class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: true,
            bg_color: "lightblue",
            header_text: "can be clicked"
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState(prevState => ({
            visible: !prevState.visible
        }));
    }
    render() {
        const container_style = {
            backgroundColor: this.state.bg_color,
            padding: "6px",
            textAlign: "center",
            fontSize: "20px",
            outline: "0px solid transparent"
        }
        const core_style = {
            fontSize: "16px",
            textAlign: "left",
            outline: "0px solid transparent",
            paddingLeft: "12px",
            paddingRight: "12px"
            
        }

        let elems;
        if(this.state.visible){
            elems = <div style={core_style}>
                <Textbox />
                <Textbox />
            </div>;
        } else {
            elems = <div />;
        }
        return (
            <div spellcheck="false" style={container_style}>
                <div contentEditable={"plaintext-only"} suppressContentEditableWarning={true} 
                onClick={this.handleClick} style={{cursor: "pointer",outline: "0px solid transparent"}}>
                    {this.state.header_text}
                </div>
                {elems}
            </div>
        )
    }
}

export default Dropdown;
