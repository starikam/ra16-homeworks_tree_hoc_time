import { Component } from "react";


export const withPrettyDate = (Component) => {
    return function (props) {
        const { date } = props;
        const current = new Date();
        const videoDate = new Date(date);
        const diff = current.getTime() - videoDate.getTime();
        
        if (diff < 3600000) {
            const minutes = Math.floor(diff / 60000);
            return <Component {...props} date={`${minutes} минут назад`} />
        } else if (diff < 86400000) {
            const hours = Math.floor(diff / 3600000);
            return <Component {...props} date={`${hours} часов назад`} />
        } else {
            const days = Math.floor(diff / 86400000);
            return <Component {...props} date={`${days} дней назад`} />
        }
            
        
    }
    
}