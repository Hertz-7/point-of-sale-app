import { PDFViewer } from "@react-pdf/renderer";
import Receipt from "./receipt";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

function Receiptpage() {
    const items = useSelector(state => state);
    const cart = items.cart; 

    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('token')===null) 
        navigate('/');

    },[]);

  return (
    <div style={{ width: '100%', height: '100vh' }}>
    <PDFViewer style={{ width: '60%', height: '100%' }}>
    <Receipt Cart={cart} />
    </PDFViewer>
    </div> 
  );
}

export default Receiptpage;



