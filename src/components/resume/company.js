import * as React from 'react'
import styled from 'styled-components'



const CompanyRow = styled.div`
    display: block;
    min-height: 25px;
    font-family: 'Oswald', sans-serif;
`

const Name = styled.div`
    float: left;
    text-align: left;
    font-size: 18px;
    font-weight: 800;
    margin-left: 20px;
    text-transform: uppercase;
`

const Dates = styled.div`
    float: right;
    text-align: right;
    margin-left: 20px;
`

const Location = styled.div`
    float: right;
    text-align: right;
    margin-left: 20px;
`

const Position = styled.div`
    float: left;
    text-align: left;
    margin-left: 40px;
`

const Company = ({ company_name, dates, location, position, url }) => {
    return (
        <div>
            <CompanyRow>
                <Name>{company_name}</Name>
                <Dates>{dates}</Dates>
                <Location>{location}</Location>
            </CompanyRow>
            <CompanyRow>
                <Position>{position}</Position>
                <a href={url}>{url}</a>
            </CompanyRow>
        </div>
    )
}

export default Company