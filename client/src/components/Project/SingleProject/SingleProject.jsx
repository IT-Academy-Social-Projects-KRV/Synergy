import SingleProjectBill from './SingleProjectBill/SingleProjectBill'
import SingleProjectDiagram from './SingleProjectDiagram/SingleProjectDiagram'
import SingleProjectInfo from './SingleProjectInfo/SingleProjectInfo'
import SingleProjectListItems from './SingleProjectListItems/SingleProjectListItems'


const SingleProject = () => {
    return (
        <div>
            SingleProject
            <SingleProjectBill/>
            <SingleProjectInfo/>
            <SingleProjectDiagram/>
            <SingleProjectListItems/> 
        </div>
    )
}

export default SingleProject