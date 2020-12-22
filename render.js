class Renderer {
    constructor() {
        const source = $('#predictions-template').html()
        this.wordsTemplate = Handlebars.compile(source)
        this.predictionContainer = $('#predictions-container')
    }

    _handleBarAppender = (elementToAppendTo, Template, data) => {
        let newHTML = Template(data);
        elementToAppendTo.empty().append(newHTML);
    }

    showWords = words => this._handleBarAppender(this.predictionContainer, this.wordsTemplate, words)

}