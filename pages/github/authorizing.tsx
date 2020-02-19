import { useEffect } from 'react'
import { AuthLayout } from '../../components/layout'

export default function Authorizing() {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const code = urlParams.get('code')
    localStorage.setItem('github_code', code)
  }, [])
  return (
    <AuthLayout>
      <h2>Authorizing with Github, Please wait...</h2>
    </AuthLayout>
  )
}
