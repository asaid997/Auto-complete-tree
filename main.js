const renderer = new Renderer()
const tree = new Tree()

const words = ["Artifacts","Aliens","Apple","Apple mac","Apple macbook pro","Apple sucks","Are we in the matrix?","Microsoft","Microsoft windows","Microsoft windows vista sucks","Master Band","Matrix"]

tree.addWord("Artists")
tree.addWords(words)

const inputEle = $("#predict-input")
const predictionsEle = $('#predictions-container')

$(document).on('click',() => predictionsEle.empty())
$("#predict-input").on('input', () => predict())
$(document).on('click','.words',function() { choosePrediction($(this)) })




function predict(){
    predictionsEle.empty()

    const word = inputEle.val()

    const predicition = tree.predictWord(word)
    if (predicition && predicition.predictionWords.length)
        renderer.showWords(tree.predictWord(word), word)
}
function choosePrediction(element){
    const userInput = element.find('.user-input').html()
    const prediction = element.find('.prediction').html()

    const word = `${userInput.slice(1)}${prediction}`
    inputEle.empty().val(word)
    predictionsEle.empty()
}