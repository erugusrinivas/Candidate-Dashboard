import React from 'react'
import './filters.scss'
import Dropdown from '../Dropdown/Dropdown'
function Filters({ filterConfig, setFilterConfig }) {
    return (
        <div className='filters-main'>
            <div className='fm-left'>
                <span className='fl-l-title'>
                    <img src='https://img.icons8.com/?size=100&id=3004&format=png&color=000000' />
                    Filters:
                </span>
                {
                    filterList.map(item => <Dropdown
                        setFilterConfig={setFilterConfig}
                        title={item.title}
                        options={item.list}
                        field={item.field}
                        selectedField={filterConfig[item.field]}

                    />)
                }

            </div>
            <div className='fm-right'>
                <button>
                    <img src="https://img.icons8.com/?size=100&id=366&format=png&color=000000" />
                </button>

            </div>

        </div>
    )
}

const filterList = [
    {
        title: 'Job Title',
        field: 'jobTitle',
        list: [
            { id: 'software-engineer', name: 'Software Engineer' },
            { id: 'product-manager', name: 'Product Manager' },
            { id: 'data-scientist', name: 'Data Scientist' },
        ],
    },
    {
        title: 'Experience',
        field: 'experience',
        list: [
            { id: '0-1', name: '0-1 years' },
            { id: '2-3', name: '2-3 years' },
            { id: '4-5', name: '4-5 years' },
            { id: '6+', name: '6+ years' },
        ],
    },
    {
        title: 'Location',
        field: 'location',
        list: [
            { id: 'location-new-york', name: 'New York' },
            { id: 'location-san-francisco', name: 'San Francisco' },
            { id: 'location-austin', name: 'Austin' },
            { id: 'location-remote', name: 'Remote' },
        ],
    },
    {
        title: 'Job Type',
        field: 'jobType',
        list: [
            { id: 'job-type-full-time', name: 'Full Time' },
            { id: 'job-type-part-time', name: 'Part Time' },
            { id: 'job-type-contract', name: 'Contract' },
        ],
    },
    {
        title: 'Job Preference',
        field: 'jobPreference',
        list: [
            { id: 'job-preference-onsite', name: 'Onsite' },
            { id: 'job-preference-remote', name: 'Remote' },
            { id: 'job-preference-hybrid', name: 'Hybrid' },
        ],
    },
    {
        title: 'Skills',
        field: 'skills',
        list: [
            { id: 'skill-javascript', name: 'JavaScript' },
            { id: 'skill-react', name: 'React' },
            { id: 'skill-nodejs', name: 'Node.js' },
            { id: 'skill-python', name: 'Python' },
        ],
    },
    {
        title: 'Certification',
        field: 'certification',
        list: [
            { id: 'certification-aws', name: 'AWS Certified Solutions Architect' },
            { id: 'certification-scrum', name: 'Certified Scrum Master' },
            { id: 'certification-google-cloud', name: 'Google Cloud Professional Data Engineer' },
        ],
    },
];



export default Filters