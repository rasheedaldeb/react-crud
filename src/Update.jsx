import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Update = () => {
  // const [data, setdata] = useState([]);
  const { id } = useParams();
  const [values, setvalues] = useState({
    name: "",
    email: "",
    phone: "",
  });
  useEffect(() => {
    axios
      .get(`http://localhost:4000/users/${id}`)
      .then((res) => {
        setvalues(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const navigate = useNavigate();
  const handleUpdate = (event) => {
    event.preventDefault();
    axios
      .put(`http://localhost:4000/users/${id}`, values)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h1>Update User</h1>
        <form onSubmit={handleUpdate}>
          <div className="mb-2">
            <label htmlFor="name">Name :</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter Name"
              value={values.name}
              onChange={(e) => setvalues({ ...values, name: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email">Email :</label>
            <input
              type="text"
              name="email"
              className="form-control"
              placeholder="Enter Email"
              value={values.email}
              onChange={(e) => setvalues({ ...values, email: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="phone">Phone :</label>
            <input
              type="text"
              name="phone"
              className="form-control"
              placeholder="Enter Phone"
              value={values.phone}
              onChange={(e) => setvalues({ ...values, phone: e.target.value })}
            />
          </div>
          <button className="btn btn-success">Submit</button>
          <Link to="/" className="btn btn-primary ms-3">
            Back
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Update;
