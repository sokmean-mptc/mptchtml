class servay {
    constructor() {
        let obj = document.querySelector("#servay")
        obj = obj ? obj.getAttribute("data") : '{"type":null,"id":null,"auth":null}'
        obj = JSON.parse(obj)
        this.init = {
            auth: obj.auth,
            base: {
                type: obj.type,
                id: obj.id,
                useful: null,
                feedback: null
            },
            info: this.info()
        }
    }
    useful(args) {
        this.init = {
            auth: this.init.auth,
            base: {
                type: this.init.base.type,
                id: this.init.base.id,
                useful: args,
                feedback: this.init.base.feedback
            },
            info: this.info()
        };
        document.querySelector("#servay-useful").remove();
    }
    submit(args) {
        this.init = {
            auth: this.init.auth,
            base: {
                type: this.init.base.type,
                id: this.init.base.id,
                useful: this.init.base.useful,
                feedback: args
            },
            info: this.info()
        }

        // $.ajax({
        //     action: '',
        //     type: 'POST',
        //     data: '',
        //     url: '',
        //     success(data) {
        //         document.querySelector("#servay-submit").remove();
        //     }
        // })
        
        document.querySelector("#servay-submit").remove();
        console.log(this.init)

    }
    get init() {
        return this._init;
    }
    set init(args) {
        this._init = {
            auth: args.auth,
            base: {
                type: args.base.type,
                id: args.base.id,
                useful : args.base.useful,
                feedback: args.base.feedback
            },
            info: this.info()
        }
    }

    
    info() {
        return {
            time: new Date(),
            timestamp: new Date().getTime(),
            window : {
                width: document.documentElement.clientWidth,
                height: document.documentElement.clientHeight
            },
            screen : {
                width: screen.width,
                height: screen.height,
                availWidth: screen.availWidth,
                availHeight: screen.availHeight,
                colorDepth: screen.colorDepth,
                pixelDepth: screen.pixelDepth
            },
            location : {
                href: window.location.href,
                pathname: window.location.pathname
            },
            navigator : {
                appName: navigator.appName,
                appCodeName: navigator.appCodeName,
                platform: navigator.platform
            }
        }
    }

}

export default servay;