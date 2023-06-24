import React from 'react'
import { FaUserMinus, FaUserPlus } from 'react-icons/fa'
import styled from 'styled-components'
import { useUserContext } from '../context/user_context'

const LogButton = () => {
	
  const {loginWithRedirect,logout, myUser} = useUserContext()

  return <Wrapper className='log-btn-wrapper'>
		{myUser ? <button type='button' className='auth-btn' onClick={() => logout ({returnTo:window.location.origin})}>
			Выйти <FaUserMinus/>
		</button> : <button type='button' className='auth-btn' onClick={loginWithRedirect}>
			Войти <FaUserPlus/>
		</button>}
		
		
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
    font-size: 1rem;
    cursor: pointer;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }
  }
`
export default LogButton
