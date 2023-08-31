import React, { useState } from 'react'
import styles from './OurEvents.module.css'
import rocket from '../../assets/images/rocket.png'
import rightProfile from '../../assets/images/rightProfile.png'
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemState,
} from 'react-accessible-accordion';
import events from '../../utils/events.jsx';
import minus from '../../assets/icons/minus.svg';
import plus from '../../assets/icons/plus.svg';
import dateToday from '../../assets/icons/dateToday.svg';

const OurEvents = () => {
    const [active, setActive] = useState(0);
    return (
        <div className={styles.ourEvents}>
            <div className={styles.ourEvents__title}>
                Our future <span>EVENTS</span>
            </div>
            <div className={styles.ourEvents__subtitle}>
                Our future events will be here !
            </div>
            <div className={styles.ourEvents__content}>
                <div className={styles.ourEvents__content__left}>
                    <div className={styles.ourEvents__main__image}>
                        <img src={rocket} alt="rocket" />
                    </div>
                </div>
                <div className={styles.ourEvents__content__right}>
                    <div className={styles.ourEvents__content__right__image}>
                        <img src={rightProfile} alt="rightProfile" />
                    </div>
                    <div className={styles.ourEvents__content__date}>
                        <div className={styles.ourEvents__content__date__icon}>
                            <img src={dateToday} alt="dateToday" />
                        </div>
                        <div className={styles.ourEvents__content__date__day}>
                            Thursday, 
                        </div>
                        <div className={styles.ourEvents__content__date__month}>
                            Aug 17
                        </div>
                    </div>
                    <Accordion
                        allowMultipleExpanded={false}
                        preExpanded={[0]}
                        allowZeroExpanded={false}
                        className={styles.accordion__container}
                    >
                        {events.map((item) => (
                            <AccordionItem key={item.id} uuid={item.id} className={styles.accordion__item__container}
                                onClick={() => setActive(item.id)}>
                                <AccordionItemHeading className={styles.accordion__item__heading__container}>
                                    <AccordionItemButton className={styles.accordion__item__button}>
                                        <div className={styles.accordion__item__heading + " " + (active === item.id ? styles.accordion__item__heading__active : "")}>
                                            {item.title}
                                        </div>
                                        <AccordionItemState>
                                            {({ expanded }) => (
                                                <div className={styles.accordion__item__button__icon}>
                                                    {expanded ? <img src={minus} alt="minus" /> : <img src={plus} alt="plus" />}
                                                </div>
                                            )}
                                        </AccordionItemState>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel className={styles.accordion__item__details__container}>
                                    <div className={styles.accordion__item__detail}>
                                        <div className={styles.accordion__item__detail__title}>
                                            Date:
                                        </div>
                                        <div className={styles.accordion__item__detail__value}>
                                            <span>{item.date}</span> <span>{item.time}</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={styles.accordion__item__detail__title}>
                                            Description:
                                        </div>
                                        <div className={styles.accordion__item__detail__value}>
                                            {item.description}
                                        </div>
                                    </div>
                                    <div className={styles.accordion__item__button_wrapper}>
                                        <button className={styles.accordion__item__detail__button}>
                                            Remind me
                                        </button>
                                    </div>
                                </AccordionItemPanel>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </div>
    )
}

export default OurEvents
