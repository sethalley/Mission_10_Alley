import React, { useState, useEffect } from 'react';
import { Bowlers } from './types/Bowlers';
//prettier-ignore
function BowlerList() {
    const [bowlerData, setBowlerData] = useState<Bowlers[]>([]);

    useEffect(() => {
        const fetchBowlerData = async () => {
            try {
                const rsp = await fetch('http://localhost:5156/api/bowlers');
                const data = await rsp.json();

                // Filter data where teamName is either 'Sharks' or 'Marlins'
                const filteredData = data.filter((bowler: { team: { teamName: string; }; }) => bowler.team.teamName === 'Sharks' || bowler.team.teamName === 'Marlins');

                setBowlerData(filteredData);
            } catch (error) {
                console.error('Error fetching bowler data:', error);
            }
        };


        fetchBowlerData();
    }, []);

    return (
        <>
            <div className="row">
                <h1>Bowlers</h1>
            </div>
            <table id="bowlerTable">
                <thead>
                    <tr>
                        <th>Bowler First Name</th>
                        <th>Bowler MI</th>
                        <th>Bowler Last Name</th>
                        <th>Team Name</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zip</th>
                        <th>Phone #</th>
                    </tr>
                </thead>
                <tbody>
                    {bowlerData.map((bowler) => (
                        <tr key={bowler.bowlerID}>
                            <td>{bowler.bowlerFirstName}</td>
                            <td>{bowler.bowlerMiddleInit}</td>
                            <td>{bowler.bowlerLastName}</td>
                            <td>{bowler.team.teamName}</td>
                            <td>{bowler.bowlerAddress}</td>
                            <td>{bowler.bowlerCity}</td>
                            <td>{bowler.bowlerState}</td>
                            <td>{bowler.bowlerZip}</td>
                            <td>{bowler.bowlerPhoneNumber}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default BowlerList;
