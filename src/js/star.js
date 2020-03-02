class star {
    constructor () {
        this._status = false
        let rating = document.querySelectorAll('.star')
    
        for( let element of rating) {
            let reference = element.dataset.reference
            let parent = document.querySelector('#'+reference)
            parent.setAttribute('style', 'display:none')

            let star = element.dataset.star
            let font = element.dataset.font
            let node = ''
            for( let i = 0; i < star; i++ ) {
                    node += `<ul><li><span onClick="feedback.get_star(this)" data-reference="${reference}" data-star="${i+1}">${font}</span>`
            }
            for(let i = star; i > 0; i-- ) {
                node += `</li></ul>`
            }
            element.innerHTML = node
        }
    }

    get_star(args) {
        let reference = args.dataset.reference
        let parent = document.querySelector('#'+reference)
        parent.value = args.dataset.star

        let node = args.parentElement
        for(let i = 0; i < args.dataset.star; i++ ) {
            node.setAttribute('class', 'selected')
            node = node.parentElement.parentElement
        }

        for(let element of args.parentElement.querySelectorAll('li')){
            element.removeAttribute('class')
        }
        this.star_select = true
    }
    get star_select() {
        return this._star_select;
    }
    set star_select(args) {
        this._star_select = args
    }
}
export default star