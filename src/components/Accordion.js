import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const questions = [
  {
    question: 'What makes blockchain trustworthy?',
    answer: 'There are three sides to this answer. Firstly, nobody but the owner of the data can access it without permission. Thus, it is a safe way to protect data from third parties who should not see the information. Secondly, the data can be tracked at any time. It comes with a timestamp which indicates when the information was written on the blockchain and it is always available for fetching. '
  }, {
    question: 'Why Do You Want to Work at This Company?',
    answer: 'Fusce et imperdiet ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras ipsum erat, ullamcorper nec bibendum aliquam, commodo ac enim. In a aliquet enim, nec vehicula ligula. Aenean non magna sapien. Integer vel massa vulputate, varius nunc nec, malesuada arcu. '
  }, {
    question: 'What Are Your Greatest Strengths?',
    answer: 'Fusce et imperdiet ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras ipsum erat, ullamcorper nec bibendum aliquam, commodo ac enim. In a aliquet enim, nec vehicula ligula. Aenean non magna sapien. Integer vel massa vulputate, varius nunc nec, malesuada arcu. '
  }, {
    question: 'Can You Explain Why You Changed Career Paths?',
    answer: 'Fusce et imperdiet ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras ipsum erat, ullamcorper nec bibendum aliquam, commodo ac enim. In a aliquet enim, nec vehicula ligula. Aenean non magna sapien. Integer vel massa vulputate, varius nunc nec, malesuada arcu. '
  }
];


const Accordion = () => {

  const [accordion, setActiveAccordion] = useState(0);

  function toggleAccordion(index) {
    if (index === accordion) {
      setActiveAccordion(-1);
      return
    }
    setActiveAccordion(index);
  };

  return (
    <>
      <Container>
        <Row>
          <Col m={6}>
            <div>
              <span className="accordion__title">Frequently asked questions</span>
              <h1>Let's answer some of your questions</h1>
            </div>
            <div className="accordion__faq mt-4">
              {questions.map((item, index) =>
                <div key={index} onClick={() => toggleAccordion(index)}>
                  <div className="accordion__faq-heading">
                    <h3 className={accordion === index ? "active" : ""}>{item.question}</h3>
                    <div>
                      {accordion === index ?
                        <span className="verticle">-</span> : <span className="horizental">+</span>}
                    </div>
                  </div>
                  <div><p className={accordion === index ? "active" : "inactive"} >{item.answer}</p></div>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Accordion;
