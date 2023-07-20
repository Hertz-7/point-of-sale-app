
import './home.css';
import OptionCard from '../../components/optioncard/card';
import Cartcard from '../../components/cartcard/cartcard';
import { useEffect, useState, } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
function Home() {
  const [option,setOption]  = useState([
    {
      title: "Option 1",
      info: "This is option 1",
      price: 500
    },
    {
      title: "Option 2",
      info: "This is option 2",
      price: 500
    },
    {
      title: "Option 3",
      info: "This is option 3",
      price: 500
    },
    {
      title: "Option 4",
      info: "This is option 4",
      price: 500
    },
    {
      title: "Option 5",
      info: "This is option 5",
      price: 500
    },
    {
      title: "Option 6",
      info: "This is option 6",
      price: 500
    },
    {
      title: "Option 7",
      info: "This is option 7",
      price: 500
    }
  ]);
  const [show, setShow] = useState(false);
  
  const [showrm, setShowrm] = useState(false);
  const [price, setPrice] = useState(0);
  const [name, setName] = useState('');
  const [info, setInfo] = useState('');
  const [namerm, setNamerm] = useState('');
  const [nameerror, setNameerror] = useState(false);
  const [infoerror, setInfoerror] = useState(false);
  const [priceerror, setPriceerror] = useState(false);
  const [nameerrorrm, setNameerrorrm] = useState(false);
  const navigate = useNavigate();
  const handlenamerm = (e) => {
    setNamerm(e.target.value);
  }
  const handleprice = (e) => {
    setPrice(e.target.value);
  }
  const handlename = (e) => {
    setName(e.target.value);
  }
  const handleinfo = (e) => {
    setInfo(e.target.value);
  }

  useEffect(() => {
    if (localStorage.getItem('token')===null) 
      navigate('/');

  },[]);

  const handleClose = () => 
  {
    setInfoerror(false);
    setNameerror(false);
    setPriceerror(false);
    setNameerrorrm(false);
    setShow(false)
  };
  const handleShow = () => setShow(true);

  const handleCloserm = () => setShowrm(false);
  const handleShowrm = () => setShowrm(true);

  const handleRemove = (e) => {
    if (namerm === '') {
      setNameerrorrm(true);
    }else {
      setOption(option.filter((ele) =>  
      (ele.title.toLowerCase()  !== namerm.toLowerCase())
      ));
      setNameerrorrm(false);
      setNamerm('');
      setShowrm(false);
  }

  }

  const handleAdd = () => {
    if(name === '' || info === '' || price === 0) {
      if(name === '' ) {
        setNameerror(true);
      }if(info === '') {
        setInfoerror(true);
      }if(price === 0 ||  price === '' ) {
        setPriceerror(true);
      }
    }
    else {
      setOption([...option, {title: name, info: info, price: price}]);
      setInfoerror(false);
      setNameerror(false);
      setPriceerror(false);
      setName('');
      setInfo('');
      setPrice();
      setShow(false);
    };

  }
  useEffect(() => {
  }, [option]);

  return (
    <div className="home">
        

        <Modal show={show} onHide={handleClose} className='modal'>
          <Modal.Header closeButton>
            <Modal.Title>Add new item</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form >
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Item name</Form.Label>
                <Form.Control
                  className='addinput'
                  type="text"
                  placeholder="Item name"
                  onChange={handlename}
                  autoFocus
                />
                { nameerror?<p className='error'>*please enter name</p>:null}
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Item description</Form.Label>
                <Form.Control
                  onChange={handleinfo}
                  className='addinput'
                  type="text"
                  placeholder="Description"
                />
                {infoerror?<p className='error'>*please enter description</p>:null}
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  onChange={handleprice}
                  className='addinput'
                  type="number"
                  placeholder="Rs."

                />
                {priceerror?<p className='error'>*please enter price</p>:null}
              </Form.Group>
              
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="secondary" onClick={handleAdd} >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={showrm} onHide={handleCloserm} className='modal'>
          <Modal.Header closeButton>
            <Modal.Title>remove a item</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
                <Form.Label>Item name</Form.Label>
                <Form.Control
                  className='addinput'
                  type="text"
                  placeholder="Item name"
                  onChange={handlenamerm}
                  autoFocus
              
                />
                { nameerrorrm?<p className='error'>*please enter name</p>:null}
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloserm}>
              Close
            </Button>
            <Button variant="secondary" onClick={handleRemove}  >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        <div class="row-100 d-flex">
          <div class="col-8">
              <Button variant='secondary' className='addbtn' onClick={handleShow}>
              Add Item
              </Button>
              <Button variant='secondary' className='addbtn' onClick={handleShowrm}>
              Remove Item
              </Button>
            <div className='option-cards d-flex'>
              
                {option.map((item) => {
                  return (
                    <OptionCard title={item.title} info={item.info} price={item.price} />
                  )
                })}
            </div>
          </div>
          <div class="col-3">
            <Cartcard/>
          </div>
        
        </div>
      
    </div>
  );
}

export default Home;
