import React, { useEffect, useState} from 'react'
import Axios from 'axios'
import {Table,Button,Modal,InputGroup,FormControl,} from 'react-bootstrap'

const Employee1=()=>{
    const [Emp,setEmp]=useState(null)
    const [Show, setShow]=useState(false)
    const [Sho,setSho]=useState(false)
    const [Cdata, setCdata]= useState('')
    const [Ldata, setLdata]=useState('')
    const [Ddata, setDdata]=useState('')
    const [Mdata, setMdata]=useState('')
    const [reloder, setreloder]=useState(null)
    const [Upd,setUpd]=useState(null)
    
    useEffect(()=>{
        const getEmp=async()=>{
            await Axios({
                method:'GET',
                url:"http://127.0.0.1:8000/Employee"
            }).then(response=>{
                console.log(response.data)
                setEmp(response.data)
            })
        }
        getEmp()

    },[reloder])
    const Added=async()=>{
        await Axios({
            method:'post',
            url:"http://127.0.0.1:8000/Employee/",
            data:{
                "FName":Cdata,
                "LName":Ldata,
                "Email":Ddata,
                "Mobile":Mdata

            }
        }).then(response=>{
            console.log(response.data)
            setreloder(response.data)
        })
    }
    const deleteEmp=async(ID)=>{
        await Axios({
            method:'DELETE',
            url:`http://127.0.0.1:8000/Employee/${ID}/`

        }).then(response=>{
            console.log(response)
            setreloder(response)
        })
    }

    const EditEmp=async(ID)=>{
        setUpd(ID)
        await Axios({
            method:'get',
            url:`http://127.0.0.1:8000/Employee/${ID}/`
        }).then(response=>{
            setCdata(response.data['FName'])
            setLdata(response.data['LName'])
            setDdata(response.data['Email'])
            setMdata(response.data['Mobile'])
            
        })
    }
    const Updated=async()=>{

        await Axios({
            method:"PUT",
            url:`http://127.0.0.1:8000/Employee/${Upd}/`,
            data:{
                "FName":Cdata,
                "LName":Ldata,
                "Email":Ddata,
                "Mobile":Mdata                
            }
        }).then(response=>{
            console.log(response)
            setreloder(response)
        })
    }
    
    const updated=()=>{
        setSho(false);
        Updated()

       
    }
    const multipleaction=()=>{
        setShow(false);
        Added();
    }
    return(
        <div>
            <h1 variant="center">Employee Information</h1>
            <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>   
                    <th>Mobile</th>   
                    <th>Option</th>              
                </tr>
            </thead>
            <tbody>

                 {
                        Emp !== null? (
                            <>
                                {
                                    Emp.map((d,i)=>(
                                        <tr key={i} >
                                            <td>{d.ID}</td>
                                            <td>{d.FName} {d.LName}</td>
                                            <td>{d.Email}</td>
                                            <td>{d.Mobile}</td>
                                            <td>
                                                <Button variant="danger" onClick={()=>deleteEmp(d.ID)}>Delete</Button>
                                                 <Button onClick={()=>setSho(true)|EditEmp(d.ID)} 
                                                 >Edit</Button>
                                                 <Modal show={Sho} onHide={()=>setSho(false)} >
                                                <Modal.Header closeButton>
                                                <Modal.Title>Edite Employee Details </Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    
                                                <InputGroup className="mb-3" >
                                                    <Button variant="outline-secondary" id="button-addon1" >
                                                    Frist Name
                                                    </Button>
                                                    <FormControl
                                                    aria-label="Example text with button addon"
                                                    aria="basic-addon1" value={Cdata} onChange={(e)=>setCdata(e.target.value)} 
                                                    />
                                                </InputGroup>
                                                <InputGroup className="mb-3">
                                                    <Button variant="outline-secondary" id="button-addon1">
                                                    Last Name
                                                    </Button>
                                                    <FormControl
                                                    aria-label="Example text with button addon"
                                                    aria="basic-addon1" value={Ldata} onChange={(e)=>setLdata(e.target.value)}
                                                    />
                                                </InputGroup>
                                                <InputGroup className="mb-3">
                                                    <Button variant="outline-secondary" id="button-addon1">
                                                    Email
                                                    </Button>
                                                    <FormControl
                                                    aria-label="Example text with button addon"
                                                    aria="basic-addon1" value={Ddata} onChange={(e)=>setDdata(e.target.value)}
                                                    />
                                                </InputGroup>
                                                <InputGroup className="mb-3">
                                                    <Button variant="outline-secondary" id="button-addon1">
                                                    Mobile
                                                    </Button>
                                                    <FormControl
                                                    aria-label="Example text with button addon"
                                                    aria="basic-addon1" value={Mdata} onChange={(e)=>setMdata(e.target.value)}
                                                    />
                                                </InputGroup>

                                                </Modal.Body>
                                                <Modal.Footer>
                                                <Button variant="info" onClick={()=>setSho(false)}>
                                                    Close
                                                </Button>
                                                <Button variant="success" onClick={updated} >
                                                    Save 
                                                </Button>
                                                </Modal.Footer>
                                            </Modal>
                                            </td>
                                            </tr>
                                    
                                    ))
                                }
                            </>      
                )
                 : (<div>
                    <h1>error </h1>
                    </div>)
            }
            </tbody>
            </Table>
          <>
      <Button variant="primary" onClick={()=>setShow(true)}>
        New Employee
      </Button>

      <Modal show={Show} onHide={()=>setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Enter Employee Details </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
        <InputGroup className="mb-3">
            <Button variant="outline-secondary" id="button-addon1">
            Frist Name
            </Button>
            <FormControl
            aria-label="Example text with button addon"
            aria="basic-addon1" onChange={(e)=>setCdata(e.target.value)} 
            />
        </InputGroup>
        <InputGroup className="mb-3">
            <Button variant="outline-secondary" id="button-addon1">
            Last Name
            </Button>
            <FormControl
            aria-label="Example text with button addon"
            aria="basic-addon1" onChange={(e)=>setLdata(e.target.value)}
            />
        </InputGroup>
        <InputGroup className="mb-3">
            <Button variant="outline-secondary" id="button-addon1">
            Email 
            </Button>
            <FormControl
            aria-label="Example text with button addon"
            aria="basic-addon1" onChange={(e)=>setDdata(e.target.value)}
            />
        </InputGroup>
        <InputGroup className="mb-3">
            <Button variant="outline-secondary" id="button-addon1">
            Mobile 
            </Button>
            <FormControl
            aria-label="Example text with button addon"
            aria="basic-addon1" onChange={(e)=>setMdata(e.target.value)}
            />
        </InputGroup>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="info" onClick={()=>setShow(false)}>
            Close
          </Button>
          <Button variant="success" onClick={multipleaction} >
            Save 
          </Button>
        </Modal.Footer>
      </Modal>
    </>
        </div>
    )
}
export default Employee1;