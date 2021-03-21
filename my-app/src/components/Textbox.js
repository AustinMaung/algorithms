import React from 'react';

class Dropdown extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            start: "",
            text: "",
            // visible: true,
            visibility: "visible"
            
        }
        // this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange = (e) =>{
        console.log(e.currentTarget.innerText)
        console.log(this.state.start)
        this.setState({
            text: e.currentTarget.innerText
        });
    }
    update = (e) =>{
        console.log(e.currentTarget.innerText)
        this.setState(prevState => ({
            start: prevState.text
        }));

    }
    render() {
        const container_style = {
<<<<<<< HEAD
            // backgroundColor: "white",

            // padding: "6px",
=======
            backgroundColor: "white",
            padding: "6px",
            // margin: "6px",
            marginTop: "12px",
            marginBottom: "12px",
>>>>>>> 608c753d514d382e6324906017d304c7b6db1e3b
            // borderRadius: "10px",
            // border: "2px solid black",
            // fontSize: "16px",
            visbility: this.state.visibility,
            outline: "0px solid transparent"
        }
        return(
            <div contentEditable={"plaintext-only"} suppressContentEditableWarning={true} style={container_style}
             onInput={this.handleChange} onBlur={this.update}>
                {this.start}
            </div>
        )
    }
}    

export default Dropdown;