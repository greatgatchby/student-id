import React from "react";

const Front = ({student}) => {
    return (
        <div className={'front h-100'}>
            <div className={'card-header bg-gold'}>
                Lorum University
            </div>
            <p>id: {student.studentID}</p>
            <div className={'avatar-container'}>
                <img src={student.picture} alt={'student id'} className={'avatar'} />
            </div>
            <div className={'card-content text-start p-2'} style={{fontSize: '1.2rem'}}>
                <strong>Name: </strong>{student.name}<br/>
                <strong>Department: </strong>{student.department}<br/>
                <strong>Status: </strong>{student.status}<br/>
                <strong>Expiry: </strong>{student.valid_until}<br/>
            </div>
        </div>
    );
}

export default Front
