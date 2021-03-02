import Dropdown from './Dropdown.js'

function Navbar() {
  return(
    <div id="Navbar" style={{backgroundColor:"lightblue",minHeight:"20px",width:"100%",
    padding:"15px",margin:"0"}}>navbar</div>
  );
}
function Toolbar() {
  return(
    <div style={{backgroundColor:"lightgrey",minHeight:"40px",width:"100%",
    padding:"15px",margin:"0"}}>toolbar</div>
  );
}
function Page() {
  return(
    <div style={{backgroundColor:"beige",minHeight:"100vh",maxWidth:"700px",
    display: "block",marginLeft: "auto",marginRight: "auto",padding:"2%",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 4px 8px 0 rgba(0, 0, 0, 0.19)"}}>
      {/* <p style={{marginTop:"0"}}> */}

      {/* </p> */}
      <Dropdown />
      <Dropdown />
    </div>
  );
}


function App() {
  return(
    <div style={{margin:"0"}}>
      <Navbar />
      <Toolbar />
      <Page />
    </div>

  );
}

export default App;
