import Mark from "mark.js"

class match extends Mark{
    constructor() {
        super()
        let node = document.querySelectorAll('.match-search')
        
        for( let i of node ) {
            if( i.dataset.match ) {
                let instance = new Mark(i);
                instance.mark(i.dataset.match);
            }
        }
    }
}
export default match