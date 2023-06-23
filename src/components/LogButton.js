import React from 'react'
import { FaUserMinus, FaUserPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useGalleryContext } from '../context/gallery_context'
import { useCartContext } from '../context/cart_context'
import { useUserContext } from '../context/user_context'

const LogButton = () => {
	// const {closeSidebar} = useGalleryContext();

  return <Wrapper className='log-btn-wrapper'>
		<button type='button' className='auth-btn'>
			Войти <FaUserPlus/>
		</button>
	</Wrapper>
}

const Wrapper = styled.div`
  display: grid;
  align-items: center;
  width: 110px;

   .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }
  }
`
export default LogButton
