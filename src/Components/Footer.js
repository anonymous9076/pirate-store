import React, { useContext } from 'react'
import { FaInstagram,FaLinkedinIn,FaGithub } from "react-icons/fa";
import {
  MDBFooter,
  MDBContainer,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';
import { FilterDataContext } from '../Context/CreateContext'
import{Link } from 'react-router-dom'
import './Footer.css'
export default function Footer() {

    const {allData,handleFilterAll} = useContext(FilterDataContext)
    const getUniqueData = (data, name) => {
        let list = data.map((p) => p[name])
        if (name !== 'price') {
            list = ['ALL', ...new Set(list)]
            return list
        }
        return list
    }
    const categoryList = getUniqueData(allData, "category")
  return (
    <MDBFooter className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        <section className='mb-4 '>
        <Link to='https://www.instagram.com/__tushar__4369/'>
            <FaInstagram className='contact_icons mx-2'></FaInstagram>
            </Link>
            <Link to='https://www.linkedin.com/in/mr-tushar-903636280/'>
            <FaLinkedinIn className='contact_icons mx-2'></FaLinkedinIn>
            </Link>
            <Link to="https://github.com/anonymous9076">
            <FaGithub className='contact_icons mx-2'></FaGithub>
            </Link>
          
        </section>

        <section className=''>
          <form action=''>
          <MDBCol size="auto">
                <p className='pt-2'>
                  <strong>Subscribe for latest updates</strong>
                </p>
              </MDBCol>
            <MDBRow className='d-flex justify-content-center'>
            <MDBCol size="auto">
                <p className='pt-2'>
                  <strong>Email-address</strong>
                </p>
              </MDBCol>
              <MDBCol md='5' start>
               
                <MDBInput contrast type='email'  className='mb-4' />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color='light' type='submit' className='mb-4'>
                  Subscribe
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        <section className='mb-4'>
        <p>
               Your One-Stop Destination for Exclusive One Piece Anime Merchandise. Set sail on an adventure with our collection of authentic, high-quality products inspired by the beloved One Piece series."
            </p>
        </section>

        <section className=''>
          <MDBRow>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>yo</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                <Link style={{ textDecoration: 'none', color: 'white' }} to="/login" className='text-white'>
                    Login
                  </Link>
                </li>
                <li>
                <Link style={{ textDecoration: 'none', color: 'white' }} to="/signin" className='text-white'>
                    signin
                  </Link>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    career
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    become seller
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Categories</h5>

              <ul className='list-unstyled mb-0'>
              {categoryList.map((p)=>
                        <li onClick={(e)=>handleFilterAll(e,'category',p)} ><Link to='/sc' style={{textDecoration:'none', color:'white'}}>{p}</Link></li>
                        )}
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Overview</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <Link target='_blank' to='http://tushar1292.netlify.app' className='text-white'>
                    About
                    </Link>
                </li>
                <li>
                  <Link to='' className='text-white'>
                    Ai chat
                  </Link>
                </li>
                <li>
                  <Link to='' className='text-white'>
                    24/7 support
                  </Link>
                </li>
                <li>
                  <Link to='' className='text-white'>
                    help-line
                  </Link>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 id='contactme' className='text-uppercase'>Contact us</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    (+91)8264829755
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    tushar32234@gmail.com
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor:'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright:
        <a className='text-white' href='https://piratestore.netlify.app/'>
          piratestore.com
        </a>
      </div>
    </MDBFooter>
  );
}