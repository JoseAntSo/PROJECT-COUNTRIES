import style from './CardActivities.module.css';

export const CardActivities = ({name,difficulty,duration,season,countries}) => {
    return(
        <div className={style.card}>
            <h1>{name}</h1>
            <h4>Difficulty: {difficulty}</h4>
            <h4>Duration: {duration} Hs</h4>
            <h4>Season: {season}</h4>
            <h4>Countries: {countries.map((e)=>{return e.name}).join(', ')}</h4>
        </div>
    )
}