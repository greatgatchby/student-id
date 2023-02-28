import React from "react";
import Front from "./front";
import Back from "./back";

const StudentCard = ({student,...props}) => {
    return (
        <div id={'student-card'} className={'card text-dark'} style={{width: '350px', height: '500px', overflow: "hidden", marginBottom: 35}} {...props}>
            <div className={'card-inner h-100'}>
                <Front student={student} />
                <Back barcode={student.barcode} />
            </div>
        </div>
    )
}

export default StudentCard;
