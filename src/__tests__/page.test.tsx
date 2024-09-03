import {expect, test, it, describe, beforeEach} from 'vitest'
import {act, fireEvent, render, screen, waitFor } from '@testing-library/react'
import Page from '../app/page'
import '@testing-library/jest-dom/vitest'

describe('HomePage', () => {
  beforeEach(() => {
    render(<Page/>);
  })

  it('should start the page with a loading screen', async () => {
    expect(screen.getByRole('status')).toBeDefined();
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    expect(document.querySelector('body')).toMatchSnapshot();

    await waitFor(async () => await screen.findAllByText(/Search/), {timeout: 2_000});

    expect(screen.queryAllByText('Loading...').length).toEqual(0);
    expect(document.querySelector('body')).toMatchSnapshot();
  })

  it('should call the api and update the page with result', async () => {
    const input = await screen.findByPlaceholderText('Search Pika, Chari...');
    const searchButton = document.querySelector('button');

    expect(searchButton).not.toBeNull()

    act(() => {
      fireEvent.change(input, {target: {value: 'pich'}})
      searchButton!.click()
    })

    await waitFor(async () => screen.findAllByText(/Loading/), {timeout: 2_000})
    await waitFor(async () => screen.findAllByText(/172/), {timeout: 2_000})
    const card = screen.getByText('pichu');
    expect(card).toBeInTheDocument()
  })
})
