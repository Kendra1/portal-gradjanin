import * as React from 'react';
import {Builder, XmlEditor, Util} from "react-xml-editor";

const docSpec = {
    elements: {
        item: {
            attributes: {
                label: {
                    asker: Util.askString,
                    menu: [{
                        action: Util.deleteAttribute,
                        caption: 'Delete attribute',
                    }],
                },
                type: {
                    asker: Util.askPicklist([{
                        value: 'short', caption: 'short'
                    },{
                        value: 'medium', caption: 'medium',
                    }, 'long']),
                },
            },
            menu: [{
                action: Util.newElementChild('<child />'),
                caption: 'Append child <child />',
            },{
                action: Util.newAttribute({
                    name: 'label',
                    value: 'default value',
                }),
                caption: 'Add attribute @label',
                // hideIf: (xml, id) => {
                //     const element = Util.getXmlNode(xml, id);
                //     return element && element.$ && typeof element.$.label !== 'undefined';
                // },
            },{
                action: Util.deleteElement,
                caption: 'Delete this <item />',
            },{
                action: Util.newElementBefore('<item />'),
                caption: 'New <item /> before this',
            },{
                action: Util.newElementAfter('<item />'),
                caption: 'New <item /> after this',
            },{
                action: Util.duplicateElement,
                caption: 'Copy <item />',
            },{
                action: Util.moveElementUp,
                caption: 'Move <item /> up',
                // hideIf: (xml, id) => !Util.canMoveElementUp(xml, id),
            },{
                action: Util.moveElementDown,
                caption: 'Move <item /> down',
                // hideIf: (xml, id) => !Util.canMoveElementDown(xml, id),
            }]
        },
    }
};

const xml = '<list><item>text 1</item><item>text 2</item><!-- ABC --></list>';

export default class Dashboard extends React.Component {
    ref;

    constructor(props) {
        super(props);
        this.ref = React.createRef();
        this.onClickHarvest = this.onClickHarvest.bind(this);
        this.state = {
            xml: '',
        };
    }

    render() {
        return (
            <>
                <div>
                    <XmlEditor
                        docSpec={ docSpec }
                        ref={ this.ref }
                        xml={ xml }
                    />
                    <button onClick={ this.onClickHarvest }>
                        Harvest
                    </button>
                </div>
                <div>
                    <pre>
                        { this.state.xml }
                    </pre>
                </div>
            </>
        );
    }

    onClickHarvest() {
        if (this.ref.current) {
            const builder = new Builder({});
            const xml = this.ref.current.getXml();
            if (xml) {
                this.setState({
                    xml: builder.buildObject(xml),
                });
            }
        }
    }
}