import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getActivities } from "../../../redux/actions";
import { CardActivities } from "../CardActivities/CardActivities";
import style from './CardsActivities.module.css'
// "id": "563808df-8067-4fba-b0a9-cfbe46d824f2",
//         "name": "jodaghglyocaa",
//         "difficulty": 4,
//         "duration": 4,
//         "season": "Verano"
//     },
export const CardsActivities = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getActivities())
    },[]);
    const activities = useSelector((state)=>state.AllActivities);    

    const getOneActivities = useSelector((state)=>state.ActivitiesFilt)
    let MapActivitie = getOneActivities.length>0? getOneActivities : activities

    return(
        <div className={style.cardsContainer}>
            {MapActivitie.map((act,index)=>{
                return(
                    <CardActivities
                        key={index}
                        id={act.id}
                        name={act.name}
                        difficulty={act.difficulty}
                        duration={act.duration}
                        season={act.season}
                        countries={act.Countries}
                    />
                )
            })}
        </div>
    )
}