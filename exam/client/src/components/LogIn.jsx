import { useState , useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { Link,navigate } from '@reach/router';


    
    
const LogIn = props => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [Confirm, setConfirm] = useState("");

    return (
        <div className="container mt-5 ">
            <div className="row">
                <div className="col-6">
                    <form>
                        <h1>Regstrtion</h1>
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">User Name</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control-plaintext" value={name} onChange={e=>setName(e.target.value)}/>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">Email</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control-plaintext" value={email} onChange={e=>setEmail(e.target.value)} />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">Password</label>
                            <div class="col-sm-10">
                                <input type="password" class="form-control" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">Confirm</label>
                            <div class="col-sm-10">
                                <input type="password" class="form-control" placeholder="Password" onChange={e=>setConfirm(e.target.value)} />
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary mb-2">Regster</button>
                    </form>
                </div>

                <div className="col-6">
                    <form>
                        <h1>Log In </h1>
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">Email</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control-plaintext" value={email} onChange={e=>setEmail(e.target.value)} />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">Password</label>
                            <div class="col-sm-10">
                                <input type="password" class="form-control" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary mb-2">LogIn</button>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default LogIn;
