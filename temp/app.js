
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

