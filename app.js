dragElement(document.getElementsByClassName("textbox")[0]);

function dragElement(elmnt) {
   var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
   if (document.getElementsByClassName("draggable")[0]) {
      // if present, the header is where you move the DIV from:
      console.log(elmnt)
      document.getElementsByClassName("draggable")[0].onmousedown = dragMouseDown;
   } else {
      // otherwise, move the DIV from anywhere inside the DIV:
      elmnt.onmousedown = dragMouseDown;
   }

   function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      console.log("in here")
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
   }

   function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
   }

   function closeDragElement() {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
   }
}
document.querySelector('div').addEventListener('keydown', function(event) {
   // Check for a backspace
   console.log("checking for backspace")
   if (event.which == 8) {
      console.log('yes backspace')
      s = window.getSelection();
      console.log(s)
      r = s.getRangeAt(0)
      console.log(r)
      console.log(r.startContainer.parentElement.parentElement)
      if(r.startContainer.parentElement.classList.contains('numer') || r.startContainer.parentElement.classList.contains('denom')){
         el = r.startContainer.parentElement.parentElement
      }
      else if(r.startContainer.parentElement.classList.contains('delete')){
         el = r.startContainer.parentElement.previousSibling
      }

      
      console.log(el)
      // console.log(child)
      // Check if the current element is the .label
      if (el.classList.contains('frac')) {
         console.log("in fraction")
         // Check if we are exactly at the end of the .label element
         if ((r.startOffset == r.endOffset && r.endOffset == 0) || (r.startContainer.parentElement.classList.contains('delete') && r.endOffset == 1)) {
            console.log("at the end of fraction")
            // prevent the default delete behavior
            event.preventDefault();
            if (el.classList.contains('highlight')) {
               // remove the element
               el.remove();
            } else {
               el.classList.add('highlight');
            }
            return;
         }
      }
   }
   event.target.querySelectorAll('span.frac.highlight').forEach(function(el) { el.classList.remove('highlight');})
});

