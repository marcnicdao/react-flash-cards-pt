import React, {Component} from 'react'

export default class Nav extends Component{

    render(){
        const {setView, navItems, view} = this.props
        const listItems = navItems.map(item => {
            const liClass = view === item.view
            ? `nav-link active`
            : 'nav-link'
            return(
                <li className='nav-item' onClick={() => setView(item.view)}>
                    <a className={liClass} href="#">{item.text}</a>
                </li>
            )
        })
        return(
            <ul className="nav nav-tabs">
                {listItems}
            </ul>
        )
    }
}
