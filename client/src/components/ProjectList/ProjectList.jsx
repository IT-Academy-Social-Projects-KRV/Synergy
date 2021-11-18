import React, {useEffect, useState} from 'react'
import axios from "axios";
import styles from './ProjectList.module.scss';
import EmptyProjectList from "./EmptyProjectList"
import ProjectListItem from "./ProjectListItem/ProjectListItem";

const ProjectList = () => {
    let [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:4000/api/project')
            .then(response => {
                console.log(response.data)
                setData(response.data)
            });
    }, [])
    return(
        <div>
            <h1 className={styles.title}>Projects List</h1>
            <ul className={styles.list}>
                <li className={styles.list_head}><div>ID</div>
                    <div>Capital</div>
                    <div>Added date</div>
                    <div>Release date</div>
                    <div>Description</div>
                    <div>Owner</div>
                </li>
                {data.map(d => <ProjectListItem
                    key={d.id}
                    id={d.id}
                    name={d.name}
                    desc={d.description}
                    capital={d.capital}
                    start={d.date_start}
                    finish={d.date_finish}
                />)}
            </ul>
        </div>
    )
}

export default ProjectList