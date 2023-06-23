import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { GalleryProvider } from './context/gallery_context';
import { FilterProvider } from './context/filter_context';
import { CartProvider } from './context/cart_context';
import { UserProvider } from './context/user_context';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<GalleryProvider>
		<FilterProvider>
			<App />
		</FilterProvider>
	</GalleryProvider>	
);
