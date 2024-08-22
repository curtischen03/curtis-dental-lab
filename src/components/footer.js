import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='info' className='text-center text-lg-start text-muted' variant='dark'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' icon='gem'  variant='dark'/>
                Curtis Dental Laboratory Inc.
              </h6>
              <p style = {{color:'white'}}>
              Quality Assured
                <br></br>
                Fast and Affordable
                <br></br>
                In Business For Over 20 Years
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-2'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p style = {{color:'white'}}>
                <MDBIcon color='secondary' icon='home'  />
                3319 N San Gabriel Blvd, CA 91770, US
              </p>
              <p style = {{color:'white'}}>
                <MDBIcon color='secondary' icon='envelope'  />
                curtisdental@yahoo.com
              </p>
              <p style = {{color:'white'}}>
                <MDBIcon color='secondary' icon='phone'  /> Phone: + 626 280 6182
              </p>
              <p style = {{color:'white'}}>
                <MDBIcon color='secondary' icon='print' /> Fax: + 626 280 6182
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright:&nbsp;&nbsp;
        <a className='text-reset fw-bold' href='https://curtischen03.github.io/personal-website/'>
        Curtis Chen
        </a>
      </div>
    </MDBFooter>
  );
}