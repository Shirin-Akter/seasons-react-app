import React from 'react';

const seasonConfig = {
    summer: {
        text: "Let's hit the beach",
        iconName: 'massive sun icon'
    },
    winter: {
        text: 'Hurray! it is cold',
        iconName: 'massive snowflake icon'
    }
};

const getSeason = (lat, month) => {
    if (month > 2 && month < 9){
        return 'summer';
    }else{
        return 'winter'
    }
};

const SeasonDisplay = props => {
    const season = getSeason(props.lat, new Date().getMonth());
    // const seasonName = season === 'winter' ? 'Hurray! it is cold' : 'Lets hit the beach';
    // const icon = season === 'winter' ? 'massive snowflake icon' : 'sun';

    const {text, iconName} = seasonConfig[season];

    return (
        <div>
            <i className={iconName}></i>
            <h1>{text}</h1>
            <i className={iconName}></i>
        </div>
    );
};

export default SeasonDisplay;