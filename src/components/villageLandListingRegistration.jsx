import React, { useState } from "react";
import { FaBackward } from "react-icons/fa";
import { Link } from "react-router";

const VillageRegistrationForm = () => {
  const [formData, setFormData] = useState({
    villageName: "", //Done
    panchayat: "",
    district: "", //Done
    state: "", //Done
    pinCode: "",
    censusCode: 0,
    tehsil: "", //Done
    facilities: {
      water: false,
      electricity: false,
      healthcare: false, //Done
      education: false,
      internet: false,
      roads: false,
    },
    coordinates: {
      latitude: "", //Done
      longitude: "", //Done
    },
    googleMapLink: "", //Done

    plotNumber: 0, //Done
    totalArea: 0, //in Acres  //Done
    landType: "", //Done
    registrationNumber: 0, //Done
    landValue: 0, // Done

    landDeed: "",
    landownershipProof: "",
    sarpanchName: "",
    sarpanchPhone: "",
    panchayatEmail: "",

    // microBusinesses: "", we will put this and the all major facotries around 25km radius of village by village registration by sarpanch
  });

  const handleChange = (e) => {
    const { name, value, type, checked, id } = e.target;

    if (type === "checkbox") {
      setFormData({
        ...formData,
        facilities: {
          ...formData.facilities,
          [name]: checked,
        },
      });
    } else if (name == "coordinates") {
      setFormData({
        ...formData,
        [name]: { ...formData.coordinates, [id]: value },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Here you would typically send this data to your backend
    alert("Village registration form submitted successfully!");
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card">
            <div className="card-header bg-primary text-white text-center">
              <Link to="/">
                <FaBackward
                  size={25}
                  className="float-start my-2"
                  color="white"
                />
              </Link>
              <h2>Land Registration Form</h2>
            </div>

            <div className="card-body">
              <form onSubmit={handleSubmit}>
                {/* Basic Information */}
                <div className="card mb-4">
                  <div className="card-header bg-light">
                    <h4 className="mb-0 text-primary">Basic Information</h4>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="villageName" className="form-label">
                          Village Name <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="villageName"
                          name="villageName"
                          value={formData.villageName}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="col-md-6 mb-3">
                        <label htmlFor="state" className="form-label">
                          State <span className="text-danger">*</span>
                        </label>
                        <select
                          className="form-select"
                          id="state"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select State</option>
                          <option value="Andhra Pradesh">Andhra Pradesh</option>
                          <option value="Arunachal Pradesh">
                            Arunachal Pradesh
                          </option>
                          <option value="Assam">Assam</option>
                          <option value="Bihar">Bihar</option>
                          <option value="Chhattisgarh">Chhattisgarh</option>
                          <option value="Gujarat">Gujarat</option>
                          <option value="Haryana">Haryana</option>
                          <option value="Himachal Pradesh">
                            Himachal Pradesh
                          </option>
                          <option value="Jharkhand">Jharkhand</option>
                          <option value="Karnataka">Karnataka</option>
                          <option value="Kerala">Kerala</option>
                          <option value="Madhya Pradesh">Madhya Pradesh</option>
                          <option value="Maharashtra">Maharashtra</option>
                          <option value="Punjab">Punjab</option>
                          <option value="Rajasthan">Rajasthan</option>
                          <option value="Tamil Nadu">Tamil Nadu</option>
                          <option value="Telangana">Telangana</option>
                          <option value="Uttar Pradesh">Uttar Pradesh</option>
                          <option value="Uttarakhand">Uttarakhand</option>
                          <option value="West Bengal">West Bengal</option>
                        </select>
                      </div>

                      <div className="col-md-6 mb-3">
                        <label htmlFor="district" className="form-label">
                          District <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="district"
                          name="district"
                          value={formData.district}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="censusCode" className="form-label">
                          Village Code or CensusCode{" "}
                          <span className="text-danger">*</span>
                        </label>
                        {/* When Villagers fills up the Village Code then after certain length we will make an request in village collection to find village infomation */}
                        <input
                          type="text"
                          className="form-control"
                          id="censusCode"
                          name="censusCode"
                          value={formData.censusCode}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="pinCode" className="form-label">
                          PIN Code <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="pinCode"
                          name="pinCode"
                          value={formData.pincode}
                          onChange={handleChange}
                          pattern="[0-9]{6}"
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="tehsil" className="form-label">
                          Tehsil <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="tehsil"
                          name="tehsil"
                          value={formData.tehsil}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="col-md-6 mb-3">
                        <label htmlFor="coordinates" className="form-label">
                          GPS Coordinates (if available)
                        </label>
                        <div className="d-flex flex-direction-row">
                          <input
                            type="text"
                            className="form-control w-50 "
                            id="latitude"
                            name="coordinates"
                            value={formData.coordinates.latitude}
                            onChange={handleChange}
                            placeholder="Latitude"
                          />{" "}
                          <input
                            type="text"
                            className="form-control w-50 "
                            id="longitude"
                            name="coordinates"
                            value={formData.coordinates.longitude}
                            onChange={handleChange}
                            placeholder="Longitude"
                          />
                        </div>
                        <center>
                          <span>Or</span>
                        </center>
                        <input
                          type="text"
                          className="form-control  "
                          id="googleMapLink"
                          name="googleMapLink"
                          value={formData.googleMapLink}
                          onChange={handleChange}
                          placeholder="Google Map Link"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Panchayat Details */}
                <div className="card mb-4">
                  <div className="card-header bg-light">
                    <h4 className="mb-0 text-primary">Panchayat Details</h4>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="panchayatName" className="form-label">
                          Gram Panchayat Name{" "}
                          <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="panchayatName"
                          name="panchayatName"
                          value={formData.panchayatName}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="col-md-6 mb-3">
                        <label htmlFor="sarpanchName" className="form-label">
                          Sarpanch Name <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="sarpanchName"
                          name="sarpanchName"
                          value={formData.sarpanchName}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="col-md-6 mb-3">
                        <label htmlFor="sarpanchContact" className="form-label">
                          Sarpanch Contact Number{" "}
                          <span className="text-danger">*</span>
                        </label>
                        <input
                          type="tel"
                          className="form-control"
                          id="sarpanchContact"
                          name="sarpanchContact"
                          value={formData.sarpanchContact}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="col-md-6 mb-3">
                        <label htmlFor="panchayatEmail" className="form-label">
                          Panchayat Email (if available)
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="panchayatEmail"
                          name="panchayatEmail"
                          value={formData.panchayatEmail}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Panchayat Details */}
                <div className="card mb-4">
                  <div className="card-header bg-light">
                    <h4 className="mb-0 text-primary">Land Details</h4>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="plotNumber" className="form-label">
                          Plot Number <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="plotNumber"
                          name="plotNumber"
                          value={formData.plotNumber}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="col-md-6 mb-3">
                        <label htmlFor="totalArea" className="form-label">
                          Land Area(in Acres){" "}
                          <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="totalArea"
                          name="totalArea"
                          value={formData.totalArea}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="col-md-6 mb-3">
                        <label htmlFor="landType" className="form-label">
                          Land Type <span className="text-danger">*</span>
                        </label>
                        <select
                          className="form-select"
                          id="landType"
                          name="landType"
                          value={formData.landType}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select Land Type</option>
                          <option value="Agricultural">Agricultural</option>
                          <option value="Berran">Berran</option>
                          <option value="Residential">Resiential</option>
                          <option value="Commercial">Commercial</option>
                          <option value="Mixed">Mixed</option>
                        </select>
                      </div>

                      <div className="col-md-6 mb-3">
                        <label
                          htmlFor="registrationNumber"
                          className="form-label"
                        >
                          Registration Number
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="registrationNumber"
                          name="registrationNumber"
                          value={formData.registrationNumber}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="col-md-6 mb-3">
                        <label htmlFor="landValue" className="form-label">
                          Land Value (In Rupees)
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="landValue"
                          name="landValue"
                          value={formData.landValue}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Land Owner Documents */}
                <div className="card mb-4">
                  <div className="card-header bg-light">
                    <h4 className="mb-0 text-primary">Documents</h4>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="landDeed" className="form-label">
                          Land Deed <span className="text-warning">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="landDeed"
                          name="landDeed"
                          value={formData.landDeed}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="col-md-6 mb-3">
                        <label
                          htmlFor="landOwnershipProof"
                          className="form-label"
                        >
                          Land Ownership Proof{" "}
                          <span className="text-warning">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="landOwnershipProof"
                          name="landOwnershipProof"
                          value={formData.landOwnershipProof}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Facilities */}
                <div className="card mb-4">
                  <div className="card-header bg-light">
                    <h4 className="mb-0 text-primary">Available Facilities</h4>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-4 mb-3">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="water"
                            name="water"
                            checked={formData.facilities.water}
                            onChange={handleChange}
                          />
                          <label className="form-check-label" htmlFor="water">
                            Clean Water Supply
                          </label>
                        </div>
                      </div>

                      <div className="col-md-4 mb-3">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="electricity"
                            name="electricity"
                            checked={formData.facilities.electricity}
                            onChange={handleChange}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="electricity"
                          >
                            Electricity
                          </label>
                        </div>
                      </div>

                      <div className="col-md-4 mb-3">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="healthcare"
                            name="healthcare"
                            checked={formData.facilities.healthcare}
                            onChange={handleChange}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="healthcare"
                          >
                            Healthcare Center
                          </label>
                        </div>
                      </div>

                      <div className="col-md-4 mb-3">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="education"
                            name="education"
                            checked={formData.facilities.education}
                            onChange={handleChange}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="education"
                          >
                            School/Education
                          </label>
                        </div>
                      </div>

                      <div className="col-md-4 mb-3">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="internet"
                            name="internet"
                            checked={formData.facilities.internet}
                            onChange={handleChange}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="internet"
                          >
                            Internet Connectivity
                          </label>
                        </div>
                      </div>

                      <div className="col-md-4 mb-3">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="roads"
                            name="roads"
                            checked={formData.facilities.roads}
                            onChange={handleChange}
                          />
                          <label className="form-check-label" htmlFor="roads">
                            Paved Roads
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Achievements & Development */}

                <div className="text-center mb-3">
                  <button type="submit" className="btn btn-primary btn-lg px-5">
                    Submit Registration
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VillageRegistrationForm;
