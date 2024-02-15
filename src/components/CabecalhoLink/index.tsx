import './CabecalhoLink.css'
import { Link } from 'react-router-dom'

interface CabecalhoLinkProps {
    url: string
    children: string
}

export const CabecalhoLink = ({url, children}: CabecalhoLinkProps) => {
    return (
        <Link to={url} className='link'>
            {children}
        </Link>
    )

}

export default CabecalhoLink