import React, { useCallback, useEffect, useState } from 'react'
import Header from '../Header/Header'
import './candidates.scss'
import Filters from '../Filters/Filters'
import candidates from '../../constants/constants'
import CandidateCard from '../CandidateCard/CandidateCard'
function Candidates() {
    const [selectedOption, setSelectedOption] = useState(options[0])
    const [filteredCandidates, setFilteredCandidates] = useState([]);
    const [topFilteredCandidates, setTopFilteredCandidates] = useState([]);

    const [filterConfig, setFilterConfig] = useState({
        jobTitle: '',
        experience: '',
        location: '',
        jobType: '',
        jobPreference: '',
        skills: '',
        certification: ''
    })

    const filterCandidates = useCallback((candidates, filterConfig) => {
        return candidates.filter(candidate => {
            const matchesJobTitle = !filterConfig.jobTitle || candidate.jobTitle === filterConfig.jobTitle;
            const matchesExperience = !filterConfig.experience || candidate.experience === filterConfig.experience;
            const matchesLocation = !filterConfig.location || candidate.location === filterConfig.location;
            const matchesJobType = !filterConfig.jobType || candidate.jobType === filterConfig.jobType;
            const matchesJobPreference = !filterConfig.jobPreference || candidate.jobPreference === filterConfig.jobPreference;
            const matchesSkills = !filterConfig.skills || candidate.skills.some(skill => skill.id === filterConfig.skills);
            const matchesCertification = !filterConfig.certification || candidate.certification === filterConfig.certification;

            return (
                matchesJobTitle &&
                matchesExperience &&
                matchesLocation &&
                matchesJobType &&
                matchesJobPreference &&
                matchesSkills &&
                matchesCertification
            );
        });
    }, []);

    useEffect(() => {
        const filtered = filterCandidates(candidates, filterConfig);
        const topFiltered = filtered.filter(candidate => candidate.isTopProfile);
        const nonTopFiltered = filtered.filter(candidate => !candidate.isTopProfile);
        setFilteredCandidates(nonTopFiltered);
        setTopFilteredCandidates(topFiltered);
    }, [filterConfig, filterCandidates]);
    return (
        <div className='candidates-section'>
            <Header title={'Candidates'} />
            <div className='options-wrapper'>
                {
                    options.map(item =>
                        <div
                            onClick={() => setSelectedOption(item)}
                            className={selectedOption.id === item.id ? "selected" : ""}
                            key={item.id + 'options'}>
                            {item.name}
                        </div>
                    )
                }
            </div>
            <Filters filterConfig={filterConfig} setFilterConfig={setFilterConfig} />
            <div className='candidate-list-wrapper'>
                {
                    topFilteredCandidates.length ? <>
                        <h3>Showing {topFilteredCandidates.length} Top Profiles</h3>
                        {
                            topFilteredCandidates.map(item => <CandidateCard candidate={item} />)
                        }
                    </> : null
                }
                {
                    filteredCandidates.length ? <><h3>Showing {filteredCandidates.length} profiles</h3>
                        {
                            filteredCandidates.map(item => <CandidateCard candidate={item} />)
                        }</> : null
                }
                {topFilteredCandidates.length || filterCandidates.length ? null : <h3>No profile found</h3>}
            </div>
        </div>
    )
}

const options = [
    { id: 1, name: "New" },
    { id: 2, name: "Qualified" },
    { id: 3, name: "On-Hold" },
    { id: 4, name: "Rejected" },
]
export default Candidates