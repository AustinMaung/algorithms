import Dropdown from './Dropdown.js' 

function format(command, value) {
  console.log('yea')
  document.execCommand(command, false, value);
}

function Navbar() {
  return(
    <div id="Navbar" style={{backgroundColor:"lightblue",minHeight:"20px",width:"100%",
    padding:"15px",margin:"0"}}>
      navbar
      
      yep
    </div>
  );
}
function Toolbar() {
  return(
    <div style={{backgroundColor:"lightgrey",minHeight:"40px",width:"100%",
    padding:"15px",margin:"0"}}>
      <button onClick={format('bold')}>
        bold
      </button>
      <button onClick={format('italic')}>
        italic
      </button>
      {/* <a href="javascript:void(0)" onclick="format('bold')"><span class="fa fa-bold fa-fw">yo</span></a> */}
		  {/* <a href="javascript:void(0)" onclick="format('italic')"><span class="fa fa-italic fa-fw">bo</span></a> */}
    </div>
  );
}
function Page() {
  return(
    <div style={{backgroundColor:"white",minHeight:"100vh",maxWidth:"700px",
    display: "block",marginLeft: "auto",marginRight: "auto",padding: "2%",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 4px 8px 0 rgba(0, 0, 0, 0.19)"}}>
      {/* <p style={{marginTop:"0"}}> */}

      {/* </p> */}
      {/* <Dropdown /> */}
      <Dropdown />
    </div>
  );
}


function App() {
  return(
    <div style={{margin:"0"}}>
      <div style={{position:"sticky", top:"0"}}>
        <Navbar />
        <Toolbar />
      </div>
      <Page />
    </div>

  );
}

export default App;
