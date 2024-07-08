import React from 'react'
import './candidate-card.scss'
function CandidateCard({ candidate }) {
    return (
        <div className='candidate-card'>
            <div className='cc-left'>
                <div className='cc-l-dp'>
                    <img src='https://img.freepik.com/free-photo/closeup-young-female-professional-making-eye-contact-against-colored-background_662251-651.jpg' />

                </div>
                <div className='cc-l-info'>
                    <h5><span>{candidate.name}</span> <img src='/images/verified.png' /></h5>
                    <h6>{jobTypes[candidate.jobTitle]}</h6>
                    <p><img src='https://img.icons8.com/?size=100&id=60688&format=png&color=228BE6' />{candidate.email}</p>
                    <p><img src='https://img.icons8.com/?size=100&id=9730&format=png&color=228BE6' />{candidate.phone}</p>
                    <a>View Resume</a>

                </div>

            </div>
            <div className='cc-right'>
                <div className='cc-r-left'>
                    <h6>Applied for:{candidate.appliedFor}</h6>
                    <h6>Exp CTC: Open</h6>
                    <div className='match-percentage'>
                        <span>Match Percentage</span>
                        <div>
                            <button>{candidate.matchPercentage}</button>
                            <a>View details</a>
                        </div>
                    </div>

                </div>
                <div className='cc-r-right'>
                    <div className='cc-r-r-top'>
                        <h6>Candidate skills</h6>
                        <button><img src='https://img.icons8.com/?size=100&id=123775&format=png&color=228BE6' />Add Notes</button>

                    </div>
                    <div className='cc-r-r-skills'>
                        {
                            candidate.skills.map(skill => <div className='skill'>
                                {skill.name} {skill.rating} <img src='https://img.icons8.com/?size=100&id=7856&format=png&color=228BE6' />

                            </div>)
                        }
                    </div>
                    <div className='cc-r-r-bottom'>
                        <button>Qualify</button>
                        <button>Reject</button>
                        <button>On-Hold</button>
                    </div>
                </div>

            </div>

        </div>
    )
}
const jobTypes = {
    'software-engineer': 'Software Engineer',
    'product-manager': 'Product Manager',
    'data-scientist': 'Data Scientist'
}
export default CandidateCard