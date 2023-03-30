import React, { Component } from 'react';
import SubscribeSection from './SubscribeSection';
import FaqHeader from './FaqHeader';
import FaqContent from './FaqContent';

class Faq extends Component {
    render() {
        return (
            <>
            <div className="aboutPage">
                <FaqHeader/>
                <FaqContent/>
                </div>
                <SubscribeSection/>
            </>
        );
    }
}

export default Faq;