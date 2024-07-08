import React from 'react'
import Candidates from '../Candidates/Candidates'
import Header from '../Header/Header'

function ContentSelector({ selectedItem }) {
    switch (selectedItem) {
        case 'Candidates':
            return <Candidates />

        default:
            return <div>
                <Header title={selectedItem} />
            </div>
    }
}

export default ContentSelector