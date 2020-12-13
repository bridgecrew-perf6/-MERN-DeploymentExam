import { useState , useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { Link ,navigate } from '@reach/router';




function bubble(projects) {
    const arr = [...projects];
    for(let i=0; i<arr.length; i++) {
        for(let j=0; j<arr.length-i-1; j++) {
            if(arr[j].dueDate > arr[j+1].dueDate) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
    return arr;
}

const ShowList = props => {

    const [backlogList, setBacklogList] = useState([]);
    const [prograssList, setPrograssList] = useState([]);
    const [complatedList, setComplatedList] = useState([]);
    const [all, setAll] = useState([]);
    const [project , setProject]= useState('');
    const [date , setDate]= useState('');
    const [stutes , setStutes]= useState('');

    useEffect(() => {
        getAll();
    }, []);

    useEffect(() => {
        setBacklogList(all.filter(project => project.status !== "Backlog"));
        // console.log(backlogList);
    }, []);

    useEffect(() => {
        setPrograssList(all.filter(project => project.status !== "inPrograss"));
    }, []);

    useEffect(() => {
        setComplatedList(all.filter(project => project.status !== "compleated"));
    }, []);

    function getAll() {
        axios.get("http://localhost:8000/api/project")
            .then(res => {
                console.log(all)
                setAll(bubble(res.data))
                setProject("");
                setDate("");
                setStutes("");

                
            })
            .catch(err => console.error(err));
    }

    const Backlog = id => {
        axios.get("http://localhost:8000/api/project/"+ id)
        .then(res => {
            console.log(res)
            const info= {project:res.data.Project.project,dueDate:res.data.Project.dueDate,status:"inPrograss" };
            // console.log('date:',res.data.Project.project)
            axios.put("http://localhost:8000/api/project/"+ id, info)
            .then((res) =>  getAll() )

        }).catch(err => console.error(err));
    }

    const prograss = id => {
        axios.get("http://localhost:8000/api/project/"+ id)
        .then(res => {
            console.log(res)
            const info= {project:res.data.Project.project,dueDate:res.data.Project.dueDate,status:"compleated" };
            axios.put("http://localhost:8000/api/project/" + id, info )
            getAll();
            setProject("");
            setDate("");
            setStutes("");
        }).catch(err => console.error(err));
    }

    const complated = id => {
        axios.delete("http://localhost:8000/api/project/" + id)
        setAll(all.filter(project => project._id !== id));
        getAll();
        navigate("/");
    }

    return (
        <div className="continer">
            <div className="row ml-3 mr-3 border border-dark">
                <div className="row mt-3 mb-3">
                    <div className="col-lg-4">
                        <div className=" row bg-primary p-3 ml-2 text-center"> Backlog </div>
                        {
                            all.filter(p => p.status === "Backlog").map(oneProject =>
                                <div className="border border-dark m-3 p-2"> 
                                    <h3>{oneProject.project}</h3>
                                    <p>{oneProject.dueDate}</p>
                                    <button onClick={()=> Backlog(oneProject._id)} className="btn btn-warning">Start project</button>
                                </div>
                            )
                        }
                        
                    </div>

                    <div className="col-lg-4">
                    <div className=" row bg-warning p-3 ml-2 text-center"> Inprograss </div>
                        {
                            all.filter(p => p.status === "inPrograss").map(oneProject =>
                                <div className="border border-dark m-3 p-2">
                                    <h3>{oneProject.project}</h3>
                                    <p>{oneProject.dueDate}</p>
                                    <button onClick={()=> prograss(oneProject._id)} className="btn btn-success">Move to compleated</button>
                                </div>
                            )
                        }
                        
                    </div>

                    <div className="col-lg-4">
                    <div className=" row bg-success p-3 ml-2 text-center"> Complated </div>
                        {
                            all.filter(p => p.status === "compleated").map(oneProject =>
                                <div className="border border-dark m-3 p-2">
                                    <h3>{oneProject.project}</h3>
                                    <p>{oneProject.dueDate}</p>
                                    <button onClick={() => complated(oneProject._id)} className="btn btn-danger">Remove project</button>
                                </div>
                            )
                        }
                        
                    </div>
                </div>                
            </div>
            <div className="row mt-5 ml-3">
                    <Link to={`/new`} className="btn btn-info"> <u>Add New Project</u> </Link>
            </div>
        </div>
    );
};
export default ShowList;
