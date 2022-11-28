class QueryJs{
    #el = null
    constructor(el){
        if(!el) return this
        if(typeof el === "string"){
            this.#el = document.querySelector(el)
        }
        if(el instanceof HTMLElement){
            this.#el = el
        }
        return this
    }
    query(string){
        if(!string) return this
        this.#el = document.querySelector(string)
        return this
    }
    queryAll(string){
        if(!string) return this
        this.#el = Array.from(document.querySelectorAll(string))
        return this
    }
    className(string){
        if(!string) return this
        this.#el = Array.from(document.getElementsByTagName(string))
        return this
    }
    tagName(string){
        if(!string) return this
        this.#el = Array.from(document.getElementsByTagName(string))
        return this
    }
    id(string){
        if(!string) return this
        this.#el = document.getElementById(string)
        return this
    }
    attr(att,value){
        if(typeof att !== "string") return this
        if(typeof value === "string"){
            this.queryAll(`[${att}=${value}]`)
        }else{
            this.queryAll(`[${att}]`)
        }
        return this
    }
    get(index){
        if(typeof index === "number") return Array.isArray(this.#el)&&index<this.#el.length ? this.#el[index] : this.#el;
        return this.#el;
    }
}
window.Q = new QueryJs();