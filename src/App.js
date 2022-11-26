// import logo from './logo.svg';
// import './App.css';

import { useState } from "react";

function App() {
  const [active, setActive] = useState(false)
  const [showEdit, setShowEdit] = useState(false)
  let arr = []

  let null_data = {
    TechCareRole: "",
    UserManagement: false,
    ServiceRequest: false,
    RecentAlarms: false,
    Cycles: false,
    Insights: false,
    DeviceData: false,
    TroubleShoot: false,
    Events: false,
  }
  let formdata = {
    TechCareRole: "",
    UserManagement: false,
    ServiceRequest: false,
    RecentAlarms: false,
    Cycles: false,
    Insights: false,
    DeviceData: false,
    TroubleShoot: false,
    Events: false,
  }




  const AddRole = () => {
    console.log(formdata.TechCareRole);
    arr.push(formdata)
    formdata = null_data
    console.log(arr);
  }

  const EditSection = () => {
    return (
      <div >
        <h1 className="font-bold text-3xl cursor-default w-fit" onClick={() => setShowEdit(false)}>x</h1>

        <br />
        <div className="my-4 border w-fit p-2">

          <input type="text" placeholder="TechCare Role *" onChange={(e) => { formdata.TechCareRole = e.target.value }} />
        </div>
        <div className="flex flex-col border p-5 w-auto justify-center items-center">
          <h1 className="self-start font-bold text-xl" >Assign Modules</h1><br />
          <div className="flex flex-row flex-wrap items-center">
            <div className="mx-3 mb-1">
              <input type="checkbox" onChange={(e) => {
                formdata.UserManagement = e.target.checked
              }} value="" id="flexCheckDefault" />
              <label label class="form-check-label inline-block text-gray-800" for="flexCheckDefault">
                User Management
              </label>
            </div>
            <div class="mx-3 mb-1">
              <input type="checkbox" onChange={(e) => { formdata.ServiceRequest = e.target.checked }} value="" id="flexCheckDefault" />
              <label label class="form-check-label inline-block text-gray-800" for="flexCheckDefault">
                Service Request
              </label>
            </div>
            <div className="mx-3 mb-1">
              <input type="checkbox" onChange={(e) => { formdata.RecentAlarms = e.target.checked }} value="" id="flexCheckChecked" checked />
              <label label class="form-check-label inline-block text-gray-800" for="flexCheckChecked">
                Recent Alarms
              </label>
            </div> <div class="mx-3 mb-1">
              <input type="checkbox" onChange={(e) => { formdata.Cycles = e.target.checked }} value="" id="flexCheckDefault" />
              <label label class="form-check-label inline-block text-gray-800" for="flexCheckDefault">
                Cycles
              </label>
            </div>
            <div className="mx-3 mb-1">
              <input type="checkbox" onChange={(e) => { formdata.Insights = e.target.checked }} value="" id="flexCheckChecked" checked />
              <label label class="form-check-label inline-block text-gray-800" for="flexCheckChecked">
                Insights
              </label>
            </div> <div class="mx-3 mb-1">
              <input type="checkbox" onChange={(e) => { formdata.DeviceData = e.target.checked }} value="" id="flexCheckDefault" />
              <label label class="form-check-label inline-block text-gray-800" for="flexCheckDefault">
                Device Data
              </label>
            </div>
            <div className="mx-3 mb-1">
              <input type="checkbox" onChange={(e) => { formdata.TroubleShoot = e.target.checked }} value="" id="flexCheckChecked" checked />
              <label label class="form-check-label inline-block text-gray-800" for="flexCheckChecked">
                Troubleshoot
              </label>
            </div>
            <div className="mx-3 mb-1">
              <input type="checkbox" onChange={(e) => { formdata.Events = e.target.checked }} value="" id="flexCheckChecked" checked />
              <label label class="form-check-label inline-block text-gray-800" for="flexCheckChecked">
                Events
              </label>
            </div>





          </div>


        </div>
        <br />
        <div className="flex justify-end">
          <button onClick={() => AddRole()
          } className="bg-blue-400 text-white p-1 px-2 rounded">Add</button>
        </div>
      </div >
    )
  }




  return (
    <div  >
      <div className="mb-5 bg-white p-4 flex  justify-between ">
        <div className="flex ">
          <h2>
            Connect Care
          </h2>
          &nbsp;
          &nbsp;
          |
          &nbsp;
          &nbsp;
          <h2>
            Technical Care Portal
          </h2>

        </div>
        <div >
          Welcome,satish
        </div>

      </div>
      <div className="w-auto rounded bg-white p-5 my-4 mx-6 ">
        <h1 className="font-bold text-xl">
          User Management
        </h1>
        <br />
        <hr />  <div className="my-3 flex w-fit text-xl font-bold">

          <h1 className={`cursor-default ${!active && 'underline'} decoration-blue-600`} onClick={() => setActive(false)}>Tech Care Role Management</h1>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <h1 className={`cursor-default ${active && 'underline'} decoration-blue-600`} onClick={() => setActive(true)}> AD Role Mapping</h1>
        </div>

        <hr />
        {
          active ? (<div>

            <div className="flex justify-between my-4 items-center">
              <h1 className="font-bold">Filters</h1> &nbsp;&nbsp;
              &nbsp;&nbsp;
              <input className=" " type="text" placeholder="AD Role" /> &nbsp;&nbsp;
              <input className="" type="text" placeholder="TechCare Role" />
              <div>
                <button className="cursor-default text-lg bg-blue-400 p-1 rounded text-white ">+ Role Mapping</button>
              </div>
            </div>
          </div>) : (
            showEdit ? <EditSection /> :
              <div className="border p-2 "  >

                <div className="flex justify-between  items-center">
                  <div className="flex">
                    <h1 className="font-bold">Filters</h1>
                    &nbsp;&nbsp;&nbsp;
                    <input className=" border " type="text" placeholder="Role Title" /> &nbsp;&nbsp;
                  </div>
                  <div >
                    <button className="cursor-default text-lg bg-blue-400 p-1 rounded text-white " onClick={() => setShowEdit(true
                    )}>+ Add TechCare Role</button>
                  </div>
                </div>
              </div>
          )
        }




      </div >

    </div >

  );
}

export default App;
