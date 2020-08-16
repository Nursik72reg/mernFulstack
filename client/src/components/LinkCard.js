import React from "react";

export const LinkCard = ({link}) =>{
    const styles = {
        fontSize:"15px",
        padding:"10px"
    }
    return(
        <div style={styles}>
            <h2>Ссылка</h2>

            <p>Ваша ссылка : <a href={link.to} target = "_blank" rel = "noopener noreferrer">{link.to}</a></p>
            <p>Откуда : <a href={link.from} target = "_blank">{link.from}</a></p>
            <p>Колличество кликов по ссылке : <strong>{link.clicks}</strong></p>
            <p>Дата создания : <strong>{new Date(link.date).toLocaleDateString()}</strong></p>
        </div>
    )
}