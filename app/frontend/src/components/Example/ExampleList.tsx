import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "Lapsi on allerginen timoteille, onko siihen olemassa siedätyshoitoa?",
        value: "Lapsi on allerginen timoteille, onko siihen olemassa siedätyshoitoa?"
    },
    { text: "Epilapsiakohtaus on kestänyt 20 minuuttia, mitä riskejä siihen liittyy?", value: "Epilapsiakohtaus on kestänyt 20 minuuttia, mitä riskejä siihen liittyy?" },
    { text: "Mies juo viikossa 30 tuopillista olutta, onko se liikaa?", value: "Mies juo viikossa 30 tuopillista olutta, onko se liikaa?" }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
