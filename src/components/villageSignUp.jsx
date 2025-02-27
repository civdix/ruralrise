import React, { useState } from "react";

const VillageRegistrationForm = () => {
  const [formData, setFormData] = useState({
    villageName: "",
    state: "",
    district: "",
    pincode: "",
    coordinates: "",
    panchayatName: "",
    sarpanchName: "",
    sarpanchContact: "",
    panchayatEmail: "",
    blockName: "",
    totalPopulation: "",
    malePopulation: "",
    femalePopulation: "",
    childrenPopulation: "",
    literacyRate: "",
    scPopulation: "",
    stPopulation: "",
    obcPopulation: "",
    facilities: {
      water: false,
      electricity: false,
      healthcare: false,
      education: false,
      internet: false,
      roads: false,
    },
    achievements: "",
    developmentProjects: "",
    microBusinesses: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData({
        ...formData,
        facilities: {
          ...formData.facilities,
          [name]: checked,
        },
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
              <h2>Village Registration Form</h2>
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
                        <label htmlFor="pincode" className="form-label">
                          PIN Code <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="pincode"
                          name="pincode"
                          value={formData.pincode}
                          onChange={handleChange}
                          pattern="[0-9]{6}"
                          required
                        />
                      </div>

                      <div className="col-md-6 mb-3">
                        <label htmlFor="coordinates" className="form-label">
                          GPS Coordinates (if available)
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="coordinates"
                          name="coordinates"
                          value={formData.coordinates}
                          onChange={handleChange}
                          placeholder="Latitude, Longitude"
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

                      <div className="col-md-6 mb-3">
                        <label htmlFor="blockName" className="form-label">
                          Block/Taluka Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="blockName"
                          name="blockName"
                          value={formData.blockName}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Population Details */}
                <div className="card mb-4">
                  <div className="card-header bg-light">
                    <h4 className="mb-0 text-primary">Population Details</h4>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-4 mb-3">
                        <label htmlFor="totalPopulation" className="form-label">
                          Total Population{" "}
                          <span className="text-danger">*</span>
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="totalPopulation"
                          name="totalPopulation"
                          value={formData.totalPopulation}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="col-md-4 mb-3">
                        <label htmlFor="malePopulation" className="form-label">
                          Male Population
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="malePopulation"
                          name="malePopulation"
                          value={formData.malePopulation}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="col-md-4 mb-3">
                        <label
                          htmlFor="femalePopulation"
                          className="form-label"
                        >
                          Female Population
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="femalePopulation"
                          name="femalePopulation"
                          value={formData.femalePopulation}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="col-md-4 mb-3">
                        <label
                          htmlFor="childrenPopulation"
                          className="form-label"
                        >
                          Children (0-14 years)
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="childrenPopulation"
                          name="childrenPopulation"
                          value={formData.childrenPopulation}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="col-md-4 mb-3">
                        <label htmlFor="literacyRate" className="form-label">
                          Literacy Rate (%)
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="literacyRate"
                          name="literacyRate"
                          value={formData.literacyRate}
                          onChange={handleChange}
                          min="0"
                          max="100"
                        />
                      </div>

                      <div className="col-md-4 mb-3">
                        <label htmlFor="scPopulation" className="form-label">
                          SC Population
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="scPopulation"
                          name="scPopulation"
                          value={formData.scPopulation}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="col-md-4 mb-3">
                        <label htmlFor="stPopulation" className="form-label">
                          ST Population
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="stPopulation"
                          name="stPopulation"
                          value={formData.stPopulation}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="col-md-4 mb-3">
                        <label htmlFor="obcPopulation" className="form-label">
                          OBC Population
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="obcPopulation"
                          name="obcPopulation"
                          value={formData.obcPopulation}
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
                <div className="card mb-4">
                  <div className="card-header bg-light">
                    <h4 className="mb-0 text-primary">
                      Achievements & Development
                    </h4>
                  </div>
                  <div className="card-body">
                    <div className="mb-3">
                      <label htmlFor="achievements" className="form-label">
                        Village Achievements
                      </label>
                      <textarea
                        className="form-control"
                        id="achievements"
                        name="achievements"
                        value={formData.achievements}
                        onChange={handleChange}
                        rows="4"
                        placeholder="List any awards, recognitions, or notable achievements of the village"
                      ></textarea>
                    </div>

                    <div className="mb-3">
                      <label
                        htmlFor="developmentProjects"
                        className="form-label"
                      >
                        Ongoing Development Projects
                      </label>
                      <textarea
                        className="form-control"
                        id="developmentProjects"
                        name="developmentProjects"
                        value={formData.developmentProjects}
                        onChange={handleChange}
                        rows="4"
                        placeholder="Describe any ongoing development projects or initiatives"
                      ></textarea>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="microBusinesses" className="form-label">
                        Micro Businesses & Local Economy
                      </label>
                      <textarea
                        className="form-control"
                        id="microBusinesses"
                        name="microBusinesses"
                        value={formData.microBusinesses}
                        onChange={handleChange}
                        rows="4"
                        placeholder="Describe local businesses, cottage industries, and economic activities"
                      ></textarea>
                    </div>
                  </div>
                </div>

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
