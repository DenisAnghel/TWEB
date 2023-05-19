import React, { useState } from 'react';

interface MyInfo {
    name: string;
    age: number;
    date_biometrice: string;
}

export function Pagina2() {
    const [myInfo, setMyInfo] = useState<MyInfo>({
        name: 'Anghel Denis',
        age: 21,
        date_biometrice: '2089058007385',
    });

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ): void => {
        setMyInfo({
            ...myInfo,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="container">
            <h1>Informații despre mine</h1>
            <form className="main">
                <div className="input_cont">
                    <label htmlFor="name">Nume:</label>
                    <input className="input"
                        type="text"
                        id="name"
                        name="name"
                        value={myInfo.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="input_cont">
                    <label htmlFor="age">Vârsta:</label>
                    <input className="input"
                        type="number"
                        id="age"
                        name="age"
                        value={myInfo.age}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="input_cont">
                    <label htmlFor="id">Date Biometrice:</label>
                    <input className="input"
                        type="text"
                        id="id"
                        name="id"
                        value={myInfo.date_biometrice}
                        onChange={handleInputChange}
                    />
                </div>
            </form>
        </div>
    );
}


