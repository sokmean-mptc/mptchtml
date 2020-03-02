import star from "./star";

class feedback extends star {
    constructor () {
        super()
    }
    submit(args) {
        // let xhttp = new XMLHttpRequest();
        // xhttp.onreadystatechange = function() {
        //     console.log(this.responseText)
        // }
        // xhttp.open("GET", "index.html", true);
        // xhttp.send();
        let input = args.dataset.validation
        input = JSON.parse(input)
        let val = document.getElementsByName(input.input_name)
        for( let i of val ) {
            if(i.checked){
                this.tabUncheck(args)
                break
            }
        }
        val[0].focus()
        args.nextElementSibling.setAttribute('style','display:block')
    }
    tabCheckStar(args) {
        if(!super.star_select) {
            args.nextElementSibling.setAttribute('style','display:block')
            return false
        }else{
            this.tabUncheck(args)
        }
    }
    tabUncheck(args) {
        
        document.getElementById(args.dataset.current).setAttribute('class', 'hide')
        document.getElementById(args.dataset.next).setAttribute('class', 'active')
    }
}
export default feedback