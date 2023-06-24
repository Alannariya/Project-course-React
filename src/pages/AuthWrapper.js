import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import styled from 'styled-components'

const AuthWrapper = ({children}) => {
	// eslint-disable-next-line
	const {isLoading, error} = useAuth0()
	if(isLoading){
		return ( 
			<Wrapper>
				<h1>Загрузка...</h1>
			</Wrapper>
		)
	}
	// eslint-disable-next-line
	// if(error){
	// 	return ( 
	// 		<Wrapper>
	// 			<h1>{error.message}</h1>
	// 		</Wrapper>
	// 	)
	// }
  return (
		<>{children}</>
	)	
}

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
`

export default AuthWrapper
