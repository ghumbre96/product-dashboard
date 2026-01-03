import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../app/store';
import App from '../App';

test('search product and add to favorites flow', async () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );

  // wait for search input
  const searchInput = await screen.findByPlaceholderText(/search products/i);

  // type search text
  fireEvent.change(searchInput, {
    target: { value: 'shirt' },
  });

  // wait for product cards & favorite buttons
  const favoriteButtons = await screen.findAllByRole('button', {
    name: /favorite/i,
  });

  // click first favorite
  fireEvent.click(favoriteButtons[0]);

  // navigate to favorites
  fireEvent.click(screen.getByText(/favorites/i));

  // verify something rendered in favorites
  expect(await screen.findByText(/₹/i)).toBeInTheDocument();
});
