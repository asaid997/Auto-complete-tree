class Node{
    constructor(x){
        this.info = x
        this.children = {}
        this.endOfWord = false
    }

    getInfo = () => this.info
    getChildren = () => this.children
    setEndOfWord = () => this.endOfWord = true
    getEndOfWord = () => this.endOfWord
    addChild = x => this.children.push(new Node(x))
}

class Tree{
    constructor(){
        this.head = new Node('')
    }

    _addWord(word,node){
        if(word.length == 0){
            node.setEndOfWord()
            return
        }
        const letter = word[0]

        const children = node.getChildren()
        children[letter] ? {} : children[letter] = new Node(letter)

        this._addWord(word.slice(1),children[letter])
    }
    addWord = word => this._addWord(word,this.head)

    _print(node){
        if(!node) return ''
        const nodeLetter = node.getInfo()

        if(node.getEndOfWord()) return `${nodeLetter} - `
        let word = ""

        const children = node.getChildren()
        Object.keys(children).forEach(letter => word += `${nodeLetter}${this._print(children[letter])}`)
        return word
    }
    _print2(node,word){
        if(!node) return ''
        const nodeLetter = node.getInfo()

        const children = node.getChildren()

        if(node.getEndOfWord()) 
            if(Object.keys(children).length > 0)
                nodeLetter = `${nodeLetter} - `


        let word = ""

        Object.keys(children).forEach(letter => word += `${nodeLetter}${this._print(children[letter])}`)
        return word
    }
    // print = () => this._print(this.head) 
    print = () => this._print2(this.head,"") 
}

const tree = new Tree()
tree.addWord("wala")
tree.addWord("wooool")
tree.addWord("batron")
tree.addWord("baku")
tree.addWord("batronios")
console.log(tree.print())