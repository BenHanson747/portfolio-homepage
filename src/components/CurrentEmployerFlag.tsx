import React from "react";

type CurrentEmployerFlagProps = {
    currentEmployer: boolean;
}

const CurrentEmployerFlag = ({currentEmployer}: CurrentEmployerFlagProps) => {
    return currentEmployer ? (
        <span className="currentEmployer"> - Current Employer</span>
    ) : null;
} 

export default CurrentEmployerFlag;