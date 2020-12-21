class Node {
    constructor(x) {
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

class Tree {
    constructor() {
        this.head = new Node('')
    }

    _addWord(word, node) {
        if (word.length == 0) {
            node.setEndOfWord()
            return
        }
        const letter = word[0].toLowerCase()

        const children = node.getChildren()
        children[letter] ? {} : children[letter] = new Node(letter)

        this._addWord(word.slice(1), children[letter])
    }
    addWord = word => this._addWord(word, this.head)


    _predictWord(node, arr, word) {
        if (!node) return
        word += node.getInfo()

        if (node.getEndOfWord()) arr.push(`${word[0].toUpperCase()}${word.slice(1)}`)

        const children = node.getChildren()
        Object.keys(children).forEach(letter => this._predictWord(children[letter], arr, word))
    }
    _findWord(node, wordToFind) {
        for(let char of wordToFind.toLowerCase().split("")){
            const child = node.getChildren()[char]
            if(child)
                node = child
            else
                return false
        }
        return node
    }
    predictWord(word) {
        if (word !== "" && word !== " ") {
            const predictionWords = []
            const nodeToStart = this._findWord(this.head, word)
            if (nodeToStart) {
                const children = nodeToStart.getChildren()
                Object.keys(children).forEach(letter => this._predictWord(children[letter], predictionWords, word))
            }
            return { words: predictionWords }
        }
    }

    _print(node, word) {
        if (!node) return
        word += node.getInfo()
        if (node.getEndOfWord()) console.log(word)
        const children = node.getChildren()
        Object.keys(children).forEach(letter => this._print(children[letter], word))
    }
    print = () => this._print(this.head, "")
}