

function Navbar() {
  return(
    <div id="Navbar" style={{backgroundColor:"lightblue",minHeight:"40px",width:"100%",margin:"0"}}>navbar</div>
  );
}
function Toolbar() {
  return(
    <div style={{backgroundColor:"lightgrey",minHeight:"60px",width:"100%",margin:"0"}}>toolbar</div>
  );
}
function Page() {
  return(
    <div contentEditable={true} style={{backgroundColor:"red",minHeight:"100vh",maxWidth:"800px",
    display: "block",marginLeft: "auto",marginRight: "auto"}}>
      <p style={{marginTop:"0"}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
         quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
         Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
         fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
        culpa qui officia deserunt mollit anim id est laborum.
      </p>
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
