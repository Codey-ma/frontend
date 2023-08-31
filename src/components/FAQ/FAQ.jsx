import React, { useState } from 'react';
import styles from './FAQ.module.css';
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemState,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import data from '../../utils/accordion.jsx';
import downDropArrow from '../../assets/icons/downDropArrow.svg';
import rightDropArrow from '../../assets/icons/rightDropArrow.svg';

const FAQ = () => {
    // Have the button on right and change the color of the button when clicked
    // Background of accordion item should be white
    // Add a border to the accordion item which is active

    const [active, setActive] = useState(0);

    return (
        <div className={styles.faq}>
            <div className={styles.faq__heading}>
                FAQs
            </div>
            <div className={styles.faq__accordion}>
                <Accordion
                    allowMultipleExpanded={false}
                    preExpanded={[0]}
                    allowZeroExpanded={false}
                    className={styles.faq__accordion__container}
                >
                    {data.map((item) => (
                        <AccordionItem key={item.id} uuid={item.id} className={styles.faq__accordion__item__container + " " + (active === item.id ? styles.faq__accordion__item__container__active : "")}
                            onClick={() => setActive(item.id)}>

                            <AccordionItemHeading className={styles.faq__accordion__item__heading__container}>
                                <AccordionItemButton className={styles.faq__accordion__item__button}>
                                    <div className={styles.faq__accordion__item__heading}>
                                        {item.heading}
                                    </div>
                                    <AccordionItemState>
                                        {({ expanded }) => (
                                            <div className={styles.faq__accordion__item__button__icon}>
                                                {expanded ? <img src={downDropArrow} alt="downDropArrow" /> : <img src={rightDropArrow} alt="rightDropArrow" />}
                                            </div>
                                        )}
                                    </AccordionItemState>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel className={styles.faq__accordion__item__answer__container}>
                                <div className={styles.faq__accordion__item__answer}>
                                    {item.detail}
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    )
}

export default FAQ;

