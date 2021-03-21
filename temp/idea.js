insertTagsAtIndexes(){
    let total_indexes = [...this.bold_indexes]
    let unique_indexes = [...new Set(total_indexes)]
    unique_indexes.sort(function(a, b) {
        return a - b;
      });
    let store_subarrays = []
    let store_tags = []
    let combined_string = ""
    let bold_counter = 0
    let tag_first = false
    let container = this.text_ref.current
    let total_text = container.textContent  
    console.log(total_text)
    console.log(unique_indexes)
    let last_index = 0
    for(let i = 0; i < unique_indexes.length; i++){
        // console.log(to_be_removed[i])
        store_subarrays.push(total_text.substring(last_index,unique_indexes[i]))
        last_index = unique_indexes[i] 
        if(unique_indexes[i] == this.bold_indexes[bold_counter])
        {
            if(bold_counter % 2 == 0){
                store_tags.push("<b>")
            } else {
                store_tags.push("</b>")
            }
            bold_counter++
        }
    }
    if(unique_indexes[last_index] != total_text.length){
        store_subarrays.push(total_text.substring(last_index,total_text.length))
    }
    console.log(store_subarrays)
    console.log(store_tags)
    // recombining subarrays, essentially removing the indexes
    console.log(tag_first)
    let tag_counter = 0
    let sub_counter = 0
    for(let i = 0; i < store_subarrays.length + store_tags.length ; i++){
        if(tag_first){
            if( i % 2 == 0){
                combined_string += store_tags[tag_counter]
                tag_counter++
            } else{
                combined_string += store_subarrays[sub_counter]
                sub_counter++
            }
        } else {
            if( i % 2 == 0){
                combined_string += store_subarrays[sub_counter]
                sub_counter++
            } else {
                combined_string += store_tags[tag_counter]
                tag_counter++
            }
        }
    }
    console.log(combined_string)
    container.innerHTML = combined_string

}
fixTagIndexes(indexes,start,end){
    let store_array = indexes
    let to_be_removed = []
    let store_subarrays = []
    let combined_subarray = []
    let changed = false
    let removing_indexes = false
    // console.log("num of indexes")
    // console.log(indexes.length/2)
    if(indexes.length % 2 == 0){
        for(let i = 0; i <= (indexes.length/2); i+=2){
            let cur_start = i;
            let cur_end = i+1
            if(indexes[cur_start] < start && indexes[cur_end] > end)
            {
                //selection within another pair
                store_array.splice(cur_start + 1,0,start)
                store_array.splice(cur_start + 2,0,end)
                // console.log(store_array)
                changed = true
                break
            } else if(indexes[cur_start] > start && indexes[cur_end] < end){
                //selection encompasses another pair
                to_be_removed = [...to_be_removed,cur_start,cur_end]
                removing_indexes = true
            } else if(indexes[cur_start] > start && indexes[cur_start] < end && indexes[cur_end] > end) {
                //change out the start value
                end = store_array[cur_end]
                to_be_removed = [...to_be_removed,cur_start,cur_end]
                removing_indexes = true
            } else if(indexes[cur_start] < start && indexes[cur_end] > start && indexes[cur_end] < end){
                //change out the end value
                start = store_array[cur_start]
                to_be_removed = [...to_be_removed,cur_start,cur_end]
                removing_indexes = true
            } else if(indexes[cur_start] == start && indexes[cur_end] == end) {
                //remove selection if since their exactly matching
                to_be_removed = [...to_be_removed,cur_start,cur_end]
                changed = true
                removing_indexes = true  
            } else if(indexes[cur_start] == start) {
                if(indexes[cur_end] > end){
                    //remove selection partly
                    start = end
                    end = indexes[cur_end]
                    to_be_removed = [...to_be_removed,cur_start,cur_end]
                } else {
                    //extend selection
                    to_be_removed = [...to_be_removed,cur_start,cur_end]
                }
                removing_indexes = true
            } else if(indexes[cur_start] == end) {
                end = store_array[cur_end]
                to_be_removed = [...to_be_removed,cur_start,cur_end]
                removing_indexes = true
            } else if(indexes[cur_end] == start) {
                start = store_array[cur_start]
                to_be_removed = [...to_be_removed,cur_start,cur_end]
                removing_indexes = true
            } else if(indexes[cur_end] == end) {
                if(indexes[cur_start] < start){
                    end = start
                    start = indexes[cur_start]
                    to_be_removed = [...to_be_removed,cur_start,cur_end]
                } else {
                    to_be_removed = [...to_be_removed,cur_start,cur_end]
                }
                removing_indexes = true
            }
        }
        // console.log(to_be_removed.length)
        // console.log("removiing")
        if(removing_indexes){
            //forming subarrays around the indexes to be removed
            to_be_removed.sort()
            let last_index = 0
            for(let i = 0; i < to_be_removed.length; i++){
                // console.log(to_be_removed[i])
                store_subarrays.push(store_array.splice(last_index,0,to_be_removed[i] - 1))
                last_index = to_be_removed[i] + 1
            }
            //recombining subarrays, essentially removing the indexes
            for(let i = 0; i < store_subarrays.length; i++){
                combined_subarray.concat(store_subarrays[i])
            }
            store_array = [...combined_subarray]
        }
        if(changed == false){
            
            store_array = [...store_array,start,end]
        }
        // console.log(store_array) 
    } else {
        console.log("error uneven list")
    }
    return store_array
}


// class Dropdown extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             bg_color: "lightblue",
//             header_text: "can be clicked",
//             start_text: "",
//             body_text: "",
//             can_see: true,
//         }
//         this.text_ref = React.createRef();
//         this.wrapSelection = this.wrapSelection.bind(this);
//         this.handleClick = this.handleClick.bind(this);
//         this.bold_indexes = []
//         this.total_indexes = []
//     }
//     handleClick() {
//         this.setState(prevState => ({
//             visible: !prevState.visible
//         }));
//         // console.log("yo")
//         this.updateStartText("placeholder")
//     }

//     textChange = (e) =>{
//         // console.log(e.currentTarget.innerText)
//         // console.log(this.state.start_text)
//         this.setState({
//             body_text: e.currentTarget.textContent
//         });
//     }
//     updateStartText = (e) =>{
//         this.setState(prevState => ({
//             start_text: prevState.body_text
//         }));

//     }

//     wrapSelection(e) {
//         // console.log(e)
//         e.preventDefault()
//         // range.commonAncestorContainer.parentNode.nodeName == "STRONG"
//         // range.deleteContents()
//         // range.insertNode(store)
//         // range.surroundContents(newParent)
        
//         let selected_ele = this.text_ref.current
//         let sel = window.getSelection()
//         let range = sel.getRangeAt(0)
//         let bold = document.createElement("b")
//         let selected_text  = sel.toString()
//         if(selected_text.length > 0)
//         {
//             // let bold = document.createElement("STRONG");
//             let start = sel.getRangeAt(0).startOffset
//             let end = sel.getRangeAt(0).endOffset
//             let content = range.extractContents()
//             console.log(content.children)
//             bold.appendChild(content);
//             range.insertNode(bold);
//             // selected_ele.
            
//         } else {
//             console.log('no selection')
//             // console.log(selected_ele.innerHTML)
//         }
//     }

//     render() {
//         const container_style = {
//             backgroundColor: this.state.bg_color,
//             padding: "6px",
//             borderRadius: "10px",
//             textAlign: "center",
//             fontFamily: "helvetica",
//             fontSize: "20px",
//             outline: "0px solid transparent",
//             border: "2px solid black",
//         }
//         const core_style = {
//             fontSize: "16px",
//             textAlign: "left",
//             outline: "0px solid transparent",
//             margin: "2%",
//             fontFamily: "helvetica",
//             // visibility: this.state.can_see
//             // marginLeft:"2%",
//             // marginRight:"2%"
//         }
        

//         return (
//             <div spellCheck="false" style={container_style}>
//                 <div contentEditable={"plaintext-only"} suppressContentEditableWarning={true} 
//                 onClick={this.handleClick} style={{cursor: "pointer",outline: "0px solid transparent"}}>
//                     {this.state.header_text}
//                 </div>
//                 {
//                 this.state.visible
//                 ? (
//                     <div contentEditable={"plaintext-only"} suppressContentEditableWarning={true} style={core_style}
//                         onInput={this.textChange} onBlur={this.updateStartText} ref={this.text_ref}>
//                         {this.state.start_text}{"this is a test"}
//                     </div>
                    
//                 )
//                 : (
//                     null
//                 )
//                 }
//                 <div onMouseDown={this.wrapSelection}>click this</div>
//             </div>
            
//         )
//     }
// }