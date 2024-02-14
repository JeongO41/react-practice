import TabButton from "./TabButton";
import {useState} from "react";
import {EXAMPLES} from "../data";
import Section from "./Section";
export default function Examples() {

    const [selectedTopic, setSelectedTopic] = useState(null);
    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton);
        console.log(selectedTopic);
    }

    let tabContent = <p>Please select a topic.</p> ;
    if(selectedTopic){
        tabContent = <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
                    <code>
                        {EXAMPLES[selectedTopic].code}
                    </code>
                </pre>
        </div>
    }

    return (
        <Section title='Examples' id='examples' >
            <menu>
                <TabButton
                    onClick={() => handleSelect('components')}
                    isSelected={ selectedTopic === 'components'}
                >
                    Components
                </TabButton>
                <TabButton
                    onClick={() => handleSelect('jsx')}
                    isSelected={ selectedTopic === 'jsx'}
                >
                    JSX
                </TabButton>
                <TabButton
                    onClick={() => handleSelect('props')}
                    isSelected={ selectedTopic === 'props'}
                >
                    Props
                </TabButton>
                <TabButton
                    onClick={() => handleSelect('state')}
                    isSelected={ selectedTopic === 'state'}
                >
                    State
                </TabButton>
            </menu>
            {tabContent}
        </Section>
    )
}
