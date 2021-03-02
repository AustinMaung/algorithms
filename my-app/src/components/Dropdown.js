import React from 'react';

class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: true
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
            backgroundColor: "lightblue",
            margin: "6px",
            padding: "6px",
            borderRadius: "10px",
            border: "2px solid black",
            textAlign: "center",
            fontSize: "20px",
            outline: "0px solid transparent"
            
        }
        const core_style = {
            fontSize: "16px",
            textAlign: "left"
        }

        let elems;
        if(this.state.visible){
            elems = <div style={core_style}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
            culpa qui officia deserunt mollit anim id est laborum.
            </div>;
        } else {
            elems = <div />;
        }
        return (
            <div contentEditable={"plaintext-only"} suppressContentEditableWarning={true} spellcheck="false" style={container_style}>
                <div onClick={this.handleClick} style={{cursor: "pointer"}}> can be clicked</div>
                {elems}
            </div>
        )
    }
}

export default Dropdown;
