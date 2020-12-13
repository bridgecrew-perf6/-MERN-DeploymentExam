import  React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Link,navigate } from '@reach/router';
import axios from 'axios';

  
    
const ProjectForm = props => {

    const [project, setProject] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [status, setStatus] = useState("Backlog");
    const [errors, setErrors] = useState({});
    const [all, setAll] = useState([]);

    useEffect(() => {
        getAll();
    }, []);

    function getAll() {
        axios.get("http://localhost:8000/api/project")
            .then(res => {
                console.log(all)
                setAll(res.data)                
            })
            .catch(err => console.error(err));
    }

    const handelName = (e) =>{
        setProject(e.target.value);
        NameErrors(e);
    };
    const NameErrors = (e) =>{
        let value= e.target.value;
        let message=''
        if(value.length<3){
            message=' project name must be at least 3 characters'
        }
        setErrors({...errors, Name: message});

    };
    const handelClick = (e) => {
        e.preventDefault();
        if(check(project)){
            axios.post('http://localhost:8000/api/project/new', {project,dueDate,status})
            .then(res=>{
                // console.log(res);
                if(res.data.errors) {
                    setErrors(res.data.errors);
                    console.log('errors',errors)
                } else {
                    navigate("/");
                }
            })
            .catch(err=>console.log(err));
        }else{
            setErrors({message:"project name shoud be unique"});
        }
    };

    function check(projectName){
        var flag=true;
        for(var i=0 ; i< all.length ; i++){
            if(all[i].project == projectName){
                flag= false;
                break;
            }
        }

        return flag;
    }

    return (
        <div className="container mt-5 ">
            <div className="row">
                <Link to={`/`}> <u>Back to DashBoard</u> </Link>
            </div>
            <div className="row">
                <div className="col-12 p-3">
                    <form onSubmit={handelClick} className="form-inline">
                        <fieldset className="border p-2">
                            <legend className="w-auto">Plan a new project :</legend>

                            <div className="form-group">
                                <label className="col-sm-3 col-form-label"> Project </label>
                                <input type="text" className='col-sm-9' onChange={handelName} onBlur={NameErrors} value={project}/>
                                <p className="text-danger">{errors.project ? errors.project.message: ''}</p>
                                <p className="text-danger">{errors ? errors.message: ''}</p>
                            </div>

                            <div className="form-group mt-3">
                                <label className="col-4 col-form-label"> Due Date </label>
                                <input type="date" className='col-8' onChange={e => setDueDate(e.target.value)} value={dueDate}/>
                                <p className="text-danger">{errors.dueDate ? errors.dueDate.message: ''}</p>
                            </div>
                            
                            <input type="submit" value="Plan project" className="btn btn-info mt-3 btn-block"/>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default ProjectForm;
