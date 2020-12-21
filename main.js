const tree = new Tree()
tree.addWord("Artifacts")
tree.addWord("Aliens")
tree.addWord("Apple")
tree.addWord("Apple mac")
tree.addWord("Apple macbook pro")
tree.addWord("Apple sucks")
tree.addWord("Are we in the matrix?")
tree.addWord("Microsoft")
tree.addWord("Microsoft windows")
tree.addWord("Microsoft windows vista sucks")
tree.addWord("Master Band")
tree.addWord("Matrix")

const renderer = new Renderer()

$("#predict-input").on('input', function() {
    $('#predictions-container').empty()

    const word = $("#predict-input").val()

    const predicition = tree.predictWord(word)
    if (predicition.words.length)
        renderer.showWords(tree.predictWord(word), word)
});