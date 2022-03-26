import { Accordion } from 'react-bootstrap';
import Image from '../../images/image-1.jpg'
import './QuestionAnswer.css'

const QuestionAnswer = () => {
    return (
        <div className='qnaSection my-5'>
            <h2 className='text-center text-primary mt-5'>FAQ</h2>
            <p className='text-center mb-5'>Here you will find the Answers of your Questions.</p>
            <div className='row row-cols-1 row-cols-md-2'>
                <div className='col text-center text-md-start order-2 order-md-1'>
                    {/* accordion start  */}
                    <Accordion className='text-start' defaultActiveKey={['0']} alwaysOpen>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><strong>How React Works ?</strong></Accordion.Header>
                            <Accordion.Body>
                                <strong>React</strong> is a JavaScript library developed by Facebook that creates user interfaces in a predictable and efficient way using declarative code. To make a DOM (Document Object Modal) faster, React implements a virtual DOM which is basically a DOM tree representation in JS. When it needs to change the DOM, it uses the Virtual one. Then the virtual DOM tries to find to best way to update the browser's DOM. React DOM takes care of updating the DOM to match the React elements.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header><strong>Props vs State</strong></Accordion.Header>
                            <Accordion.Body>
                                <strong>Difference between Props and State :</strong>
                                <br />
                                <ul>
                                    <li>To pass data one component to another components, we use Props. State can't pass data to another components it passes data within the components only.</li>
                                    <li>Props are Immutable and States are Mutable</li>
                                    <li>We can use use Props with state and functional components. State is only used in state/class components.</li>
                                    <li>Props are read-only and State is read and write both.</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header><strong>How useState Works ?</strong></Accordion.Header>
                            <Accordion.Body>
                                <strong>useState</strong> is a Hook. You can declare state variables in functional components by using useState hook. useState returns a stateful value, and a function to update it. The state can be any type (object, array boolean). The state take the variable and the function updates the value of value of the state and then place the value in the state again. So, when we call the state we find the updated value which was done by useState.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                <div className='qnaImage col order-1 order-md-2'>
                    <img className='img-fluid rounded-3' src={Image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default QuestionAnswer;