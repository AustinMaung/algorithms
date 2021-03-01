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
        let elems;
        if(this.state.visible){
            elems = <div>can become not seen</div>;
        } else {
            elems = <div />;
        }
        return (
            <div>
                <div onClick={this.handleClick}> can be clicked</div>
                {elems}
            </div>
        )
    }
}

export default Dropdown;
