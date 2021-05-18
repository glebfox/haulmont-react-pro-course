/* Core */
import React, { ReactElement } from 'react';

export const Layout: React.FC<PropTypes> = ({ children }) => {
    return (
        <section className='layout'>{children}</section>
    )
}

interface PropTypes {
    children: ReactElement | ReactElement[]
}
