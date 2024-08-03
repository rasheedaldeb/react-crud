import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Read = () => {
  const [data, setdata] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:4000/users/${id}`)
      .then((res) => setdata(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h3>Detail of User</h3>
        <div>
          <strong>Name : {data.name}</strong>
        </div>
        <div>
          <strong>Email : {data.email}</strong>
        </div>
        <div>
          <strong>Phone : {data.phone}</strong>
        </div>
        <Link to={`/update/${id}`} className="btn btn-success">
          Edit
        </Link>
        <Link to="/" className="btn btn-primary ms-3">
          Back
        </Link>
      </div>
    </div>
  );
};

export default Read;
