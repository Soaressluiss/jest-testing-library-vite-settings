import { render, screen } from '@testing-library/react'
import App from './App'

describe('App test component', ()=>{
    test('mostrar elementos', ()=>{
      render(<App/>)

      const btn = screen.getByText("confirmar")
      expect(btn).toBeInTheDocument()
    })
})