import React from 'react'



import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function FormExample() {

    const Header = () => {
        return (
            <div>
                <div className='flex'>
    
                </div>
                <div className='ml-7 mt-6 flex gap-6 pl-6'>
                    <svg class="animate-bounce w-6 h-6 bg-black rounded-full">
                    </svg>
                    <svg class="animate-bounce w-6 h-6 bg-white rounded-full">
                    </svg>
                    <svg class="animate-bounce w-6 h-6 bg-black rounded-full">
                    </svg>
                    <svg class="animate-bounce w-6 h-6 bg-white rounded-full">
                    </svg>
                    <svg class="animate-bounce w-6 h-6 bg-black rounded-full">
                    </svg>
                    <svg class="animate-bounce w-6 h-6 bg-white rounded-full">
                    </svg>
                    <svg class="animate-bounce w-6 h-6 bg-black rounded-full">
                    </svg>
                    
                </div>
                <div className='flex gap-6 pl-6 justify-end'>
                    <svg class="animate-bounce w-6 h-6 bg-black rounded-full">
                    </svg>
                    <svg class="animate-bounce w-6 h-6 bg-white rounded-full">
                    </svg>
                    <svg class="animate-bounce w-6 h-6 bg-black rounded-full">
                    </svg>
                    <svg class="animate-bounce w-6 h-6 bg-white rounded-full">
                    </svg>
                    <svg class="animate-bounce w-6 h-6 bg-black rounded-full">
                    </svg>
                    <svg class="animate-bounce w-6 h-6 bg-white rounded-full">
                    </svg>
                    <svg class="animate-bounce w-6 h-6 bg-black rounded-full">
                    </svg>
                    
                </div>
                
            </div>
        )
    }
    
  return (
  
   <div className=''>
    <Header />
    <Navbar className="flex bg-body-tertiary justify-center gap-24">
      <Form inline>
        <InputGroup>
          <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
          <Form.Control
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      </Form>
      <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>
    </Navbar>
    </div>

  );
}

export default FormExample;
 


