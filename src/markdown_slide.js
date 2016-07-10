/**
 * Created by mkononen on 09/07/16.
 */
import React from 'react';
import Slide from './slide';
import marked from 'marked';
import syntux from 'syntux';

import 'syntux/javascript';
import 'syntux/python';
import 'syntux/css';
import 'syntux/xml';

let renderer = new marked.Renderer();

renderer.code = (code, language) => {
    let lang = language.toLowerCase();
    code = syntux.highlight(lang, code, true).value;
    return '<pre><code class="hljs ' + lang + '">' + code + '</code></pre>'
};

marked.setOptions({
    renderer: renderer
});

class MarkdownSlide extends Slide {
    constructor(){
        super();
        this.rawMarkup.bind(this);
    }

    rawMarkup(){
        let markdown = marked(this.props.children.toString());
        return {__html: markdown};
    }

    render(){
        return(
            <section>
                <span
                    dangerouslySetInnerHTML={this.rawMarkup()}
                />
            </section>
        )
    }
}

export default MarkdownSlide;