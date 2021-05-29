import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import POKEMONS from './testPokemons';
import Header from './components/Header';

test('renders heading text', () => {
  render(<App />);
  const headerElement = screen.getByText(/Top 60 Pokémon!/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders the overall stats', async () => {
  render(<Header pokemons={POKEMONS} />);
  await waitFor(() => screen.getAllByRole('list'))
  const weightStat = screen.getByText(/321 hectograms/g);
  expect(weightStat).toBeInTheDocument();
  const maxBaseExpStat = screen.getByText(/venusaur: 236/g)
  expect(maxBaseExpStat).toBeInTheDocument();
})
