import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { GalleryProvider } from './context/gallery_context';
import { FilterProvider } from './context/filter_context';
import { UserProvider } from './context/user_context';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));

// dev-1iaflog6mq0vhv60.us.auth0.com
// UHjVtL7f01nRYmBX0UTcMJZGTuzt707Y


root.render(
	<Auth0Provider
    domain='dev-1iaflog6mq0vhv60.us.auth0.com'
    clientId='UHjVtL7f01nRYmBX0UTcMJZGTuzt707Y'
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
	<UserProvider>
	<GalleryProvider>
		<FilterProvider>
			<App />
		</FilterProvider>
	</GalleryProvider>	
	</UserProvider>
	</Auth0Provider>
);
