
class clickCopy {
    action( id ) {
        const copyText = document.getElementById(id)
        copyText.select()                            
        document.execCommand('copy')
    }
}
export default clickCopy