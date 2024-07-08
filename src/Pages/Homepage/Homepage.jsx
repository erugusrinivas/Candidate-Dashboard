import React, { useState } from 'react'
import './homepage.scss'
import Sidebar from '../../Components/Sidebar/Sidebar'
import ContentSelector from '../../Components/ContentSelector/ContentSelector';
function Homepage() {
    const [selectedItem, setSelectedItem] = useState('Candidates');
    return (
        <div className='homepage'>
            <div className='sidebar-wrapper'>
                <Sidebar
                    setSelectedItem={setSelectedItem}
                    selectedItem={selectedItem}
                />

            </div>
            <div className='content-wrapper'>
                <ContentSelector selectedItem={selectedItem} />
            </div>
        </div>
    )
}

export default Homepage