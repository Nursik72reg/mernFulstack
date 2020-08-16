import React from "react";
import {Link} from "react-router-dom";

export const LinkList = ({link}) =>{
    const styles = {
        fontSize:"15px"
    }
    if(!link.length){
        return <p className="center">Ссылок пока нет</p>
    }
    return(
        <table style={styles}>
            <thead>
            <tr>
                <th>№</th>
                <th>Оригинальнная</th>
                <th>Сокращенная</th>
                <th>Открыть</th>
            </tr>
            </thead>

            <tbody>
            {link.map((link,index)=>{
                return(
                <tr>
                    <td>{index + 1}</td>
                    <td>{link.from}</td>
                    <td>{link.to}</td>
                    <td>
                        <Link to={`/detail/${link._id}`}>Открыть</Link>
                    </td>
                </tr>
                )
            })}

            </tbody>
        </table>
    )
};