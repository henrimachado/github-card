import React from 'react';
import './Card.css';
import { ArrowTopRightOnSquareIcon, SparklesIcon } from '@heroicons/react/24/solid'

const Card = ({ avatar_url,
    name,
    html_url,
    public_repos,
    joined_at,
    bio,
    company,
    blog,
    location, 
    languages
}) => {

    const date = new Date(joined_at);

    return (
        <div className='main-content'>
            <div className='cardsContainer'>
                <div className="card">
                    <img src={avatar_url} alt={name} />
                    <div className='titleContainer'>
                        <h2 className='userName'>{name}</h2>
                        <p>{location}</p>
                        <p>{company}</p>
                    </div>
                    <p className='bio'>{bio}</p>
                    <p><strong>Repositórios:</strong> {public_repos}</p>
                    <p><strong>Perfil criado em:</strong> {date.getDay().toString()}/{date.getMonth().toString()}/{date.getFullYear().toString()} </p>
                    <div className='buttons'>
                        <a className="btn github" href={html_url} target='blank'> Ver perfil no Github <ArrowTopRightOnSquareIcon width={20} /> </a>
                        {blog &&
                            <a className="btn blog" href={blog} target='blank'>Ver meu blog <ArrowTopRightOnSquareIcon width={20} /> </a>}
                    </div>
                </div>

                {languages && 
                    <div className='languagesContainer'>
                        <div className="languages">
                            <h2 className='languagesTitle'>Linguagens</h2>
                            <div>
                                <ul className='languages-list'>
                                    {languages.map((language, index) =>
                                        <li className='language' key={index}><SparklesIcon className = "languageIcon" width={15} />{language}</li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                } 
            </div>
        </div>
    );
};

export default Card;