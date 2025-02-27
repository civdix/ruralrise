import React, { useState } from "react";
import Navbar from "./Navbar";

// Dummy data for villages
const dummyVillages = [
  {
    id: 1,
    basicInfo: {
      villageName: "Rampur",
      state: "Uttar Pradesh",
      district: "Sitapur",
      pinCode: "261001",
      gpsCoordinates: "28.6139° N, 77.2090° E",
    },
    panchayatDetails: {
      gramPanchayatName: "Rampur Gram Panchayat",
      sarpanchName: "Rajendra Singh",
      sarpanchMobile: "9876543210",
      blockTalukaName: "Misrikh",
      panchayatEmail: "rampur.gp@gmail.com",
    },
    populationDetails: {
      totalPopulation: 3250,
      malePopulation: 1680,
      femalePopulation: 1570,
      scPopulation: 780,
      stPopulation: 120,
      obcPopulation: 1450,
      generalPopulation: 900,
      childPopulation: 650,
    },
    availableFacilities: {
      water: true,
      electricity: true,
      pucca_road: true,
      healthcareCenter: false,
      internet: false,
      school: true,
    },
    specialRequirements:
      "Need digital literacy center and reliable internet connectivity",
  },
  {
    id: 2,
    basicInfo: {
      villageName: "Chandpur",
      state: "Bihar",
      district: "Patna",
      pinCode: "800001",
      gpsCoordinates: "25.5941° N, 85.1376° E",
    },
    panchayatDetails: {
      gramPanchayatName: "Chandpur Gram Panchayat",
      sarpanchName: "Savita Devi",
      sarpanchMobile: "9876543211",
      blockTalukaName: "Phulwari",
      panchayatEmail: null,
    },
    populationDetails: {
      totalPopulation: 2100,
      malePopulation: 1050,
      femalePopulation: 1050,
      scPopulation: 450,
      stPopulation: 200,
      obcPopulation: 950,
      generalPopulation: 500,
      childPopulation: 520,
    },
    availableFacilities: {
      water: true,
      electricity: false,
      pucca_road: false,
      healthcareCenter: false,
      internet: false,
      school: false,
    },
    specialRequirements:
      "Urgent need for primary healthcare center and solar electricity",
  },
  {
    id: 3,
    basicInfo: {
      villageName: "Suryapur",
      state: "Maharashtra",
      district: "Pune",
      pinCode: "411001",
      gpsCoordinates: "18.5204° N, 73.8567° E",
    },
    panchayatDetails: {
      gramPanchayatName: "Suryapur Gram Panchayat",
      sarpanchName: "Mahesh Patil",
      sarpanchMobile: "9876543212",
      blockTalukaName: "Haveli",
      panchayatEmail: "suryapur.gp@gmail.com",
    },
    populationDetails: {
      totalPopulation: 4500,
      malePopulation: 2300,
      femalePopulation: 2200,
      scPopulation: 900,
      stPopulation: 250,
      obcPopulation: 1850,
      generalPopulation: 1500,
      childPopulation: 950,
    },
    availableFacilities: {
      water: true,
      electricity: true,
      pucca_road: true,
      healthcareCenter: true,
      internet: true,
      school: true,
    },
    specialRequirements: "Need skill development center for youth",
  },
  {
    id: 4,
    basicInfo: {
      villageName: "Lakshmipur",
      state: "Kerala",
      district: "Thrissur",
      pinCode: "680001",
      gpsCoordinates: "10.5276° N, 76.2144° E",
    },
    panchayatDetails: {
      gramPanchayatName: "Lakshmipur Gram Panchayat",
      sarpanchName: "Jayalakshmi K",
      sarpanchMobile: "9876543213",
      blockTalukaName: "Chalakudy",
      panchayatEmail: "lakshmipur.gp@gmail.com",
    },
    populationDetails: {
      totalPopulation: 5200,
      malePopulation: 2500,
      femalePopulation: 2700,
      scPopulation: 1100,
      stPopulation: 300,
      obcPopulation: 2100,
      generalPopulation: 1700,
      childPopulation: 1050,
    },
    availableFacilities: {
      water: true,
      electricity: true,
      pucca_road: true,
      healthcareCenter: true,
      internet: true,
      school: true,
    },
    specialRequirements: "Need better flood management infrastructure",
  },
  {
    id: 5,
    basicInfo: {
      villageName: "Bharatpur",
      state: "Rajasthan",
      district: "Jaipur",
      pinCode: "302001",
      gpsCoordinates: "26.9124° N, 75.7873° E",
    },
    panchayatDetails: {
      gramPanchayatName: "Bharatpur Gram Panchayat",
      sarpanchName: "Ramesh Choudhary",
      sarpanchMobile: "9876543214",
      blockTalukaName: "Amber",
      panchayatEmail: null,
    },
    populationDetails: {
      totalPopulation: 2800,
      malePopulation: 1450,
      femalePopulation: 1350,
      scPopulation: 600,
      stPopulation: 400,
      obcPopulation: 1200,
      generalPopulation: 600,
      childPopulation: 700,
    },
    availableFacilities: {
      water: false,
      electricity: true,
      pucca_road: false,
      healthcareCenter: false,
      internet: false,
      school: true,
    },
    specialRequirements:
      "Need water conservation infrastructure and reliable water supply",
  },
];

const VillagesList = () => {
  const [villages, setVillages] = useState(dummyVillages);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [expandedVillage, setExpandedVillage] = useState(null);

  // Extract unique states for filter dropdown
  const states = [
    ...new Set(villages.map((village) => village.basicInfo.state)),
  ];

  // Filter villages based on search term and selected state
  const filteredVillages = villages.filter((village) => {
    const matchesSearch =
      village.basicInfo.villageName
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      village.basicInfo.district
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    const matchesState =
      selectedState === "" || village.basicInfo.state === selectedState;
    return matchesSearch && matchesState;
  });

  // Toggle expanded view for a village
  const toggleExpand = (id) => {
    if (expandedVillage === id) {
      setExpandedVillage(null);
    } else {
      setExpandedVillage(id);
    }
  };

  return (
    <div className="container mt-4">
      <Navbar />
      <div className="row mb-4">
        <div className="col-12">
          <h2 className="mb-3">RURAL RISE - Village Directory</h2>
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search by village name or district..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <select
                    className="form-select"
                    value={selectedState}
                    onChange={(e) => setSelectedState(e.target.value)}
                  >
                    <option value="">All States</option>
                    {states.map((state, index) => (
                      <option key={index} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-md-2 mb-3">
                  <span className="badge bg-primary p-2">
                    {filteredVillages.length} Villages Found
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {filteredVillages.length === 0 ? (
        <div className="alert alert-info">
          No villages found matching your search criteria.
        </div>
      ) : (
        filteredVillages.map((village) => (
          <div className="card mb-3" key={village.id}>
            <div
              className="card-header bg-light d-flex justify-content-between align-items-center"
              onClick={() => toggleExpand(village.id)}
              style={{ cursor: "pointer" }}
            >
              <div>
                <h5 className="mb-0">{village.basicInfo.villageName}</h5>
                <small>
                  {village.basicInfo.district}, {village.basicInfo.state}
                </small>
              </div>
              <div className="d-flex align-items-center">
                <div className="facilities-icons me-3">
                  {village.availableFacilities.water && (
                    <span className="badge bg-info me-1" title="Water Supply">
                      💧
                    </span>
                  )}
                  {village.availableFacilities.electricity && (
                    <span className="badge bg-warning me-1" title="Electricity">
                      ⚡
                    </span>
                  )}
                  {village.availableFacilities.pucca_road && (
                    <span
                      className="badge bg-secondary me-1"
                      title="Paved Roads"
                    >
                      🛣️
                    </span>
                  )}
                  {village.availableFacilities.healthcareCenter && (
                    <span
                      className="badge bg-danger me-1"
                      title="Healthcare Center"
                    >
                      🏥
                    </span>
                  )}
                  {village.availableFacilities.internet && (
                    <span className="badge bg-primary me-1" title="Internet">
                      🌐
                    </span>
                  )}
                  {village.availableFacilities.school && (
                    <span className="badge bg-success me-1" title="School">
                      🏫
                    </span>
                  )}
                </div>
                <span className="btn btn-sm btn-outline-secondary">
                  {expandedVillage === village.id
                    ? "Hide Details"
                    : "View Details"}
                </span>
              </div>
            </div>

            {expandedVillage === village.id && (
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4">
                    <div className="card h-100">
                      <div className="card-header bg-primary text-white">
                        <h5 className="mb-0">Basic Information</h5>
                      </div>
                      <div className="card-body">
                        <table className="table table-sm">
                          <tbody>
                            <tr>
                              <th>Village Name</th>
                              <td>{village.basicInfo.villageName}</td>
                            </tr>
                            <tr>
                              <th>State</th>
                              <td>{village.basicInfo.state}</td>
                            </tr>
                            <tr>
                              <th>District</th>
                              <td>{village.basicInfo.district}</td>
                            </tr>
                            <tr>
                              <th>PIN Code</th>
                              <td>{village.basicInfo.pinCode}</td>
                            </tr>
                            <tr>
                              <th>GPS Coordinates</th>
                              <td>
                                {village.basicInfo.gpsCoordinates ||
                                  "Not available"}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="card h-100">
                      <div className="card-header bg-success text-white">
                        <h5 className="mb-0">Panchayat Details</h5>
                      </div>
                      <div className="card-body">
                        <table className="table table-sm">
                          <tbody>
                            <tr>
                              <th>Gram Panchayat</th>
                              <td>
                                {village.panchayatDetails.gramPanchayatName}
                              </td>
                            </tr>
                            <tr>
                              <th>Sarpanch Name</th>
                              <td>{village.panchayatDetails.sarpanchName}</td>
                            </tr>
                            <tr>
                              <th>Sarpanch Mobile</th>
                              <td>{village.panchayatDetails.sarpanchMobile}</td>
                            </tr>
                            <tr>
                              <th>Block/Taluka</th>
                              <td>
                                {village.panchayatDetails.blockTalukaName}
                              </td>
                            </tr>
                            <tr>
                              <th>Panchayat Email</th>
                              <td>
                                {village.panchayatDetails.panchayatEmail ||
                                  "Not available"}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="card h-100">
                      <div className="card-header bg-info text-white">
                        <h5 className="mb-0">Population Details</h5>
                      </div>
                      <div className="card-body">
                        <table className="table table-sm">
                          <tbody>
                            <tr>
                              <th>Total Population</th>
                              <td>
                                {village.populationDetails.totalPopulation.toLocaleString()}
                              </td>
                            </tr>
                            <tr>
                              <th>Male Population</th>
                              <td>
                                {village.populationDetails.malePopulation.toLocaleString()}
                              </td>
                            </tr>
                            <tr>
                              <th>Female Population</th>
                              <td>
                                {village.populationDetails.femalePopulation.toLocaleString()}
                              </td>
                            </tr>
                            <tr>
                              <th>Child Population (0-14)</th>
                              <td>
                                {village.populationDetails.childPopulation.toLocaleString()}
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <div className="mt-3">
                          <h6>Category-wise Population</h6>
                          <div
                            className="progress mb-2"
                            style={{ height: "25px" }}
                          >
                            <div
                              className="progress-bar bg-danger"
                              style={{
                                width: `${
                                  (village.populationDetails.scPopulation /
                                    village.populationDetails.totalPopulation) *
                                  100
                                }%`,
                              }}
                            >
                              SC (
                              {Math.round(
                                (village.populationDetails.scPopulation /
                                  village.populationDetails.totalPopulation) *
                                  100
                              )}
                              %)
                            </div>
                            <div
                              className="progress-bar bg-warning"
                              style={{
                                width: `${
                                  (village.populationDetails.stPopulation /
                                    village.populationDetails.totalPopulation) *
                                  100
                                }%`,
                              }}
                            >
                              ST (
                              {Math.round(
                                (village.populationDetails.stPopulation /
                                  village.populationDetails.totalPopulation) *
                                  100
                              )}
                              %)
                            </div>
                            <div
                              className="progress-bar bg-info"
                              style={{
                                width: `${
                                  (village.populationDetails.obcPopulation /
                                    village.populationDetails.totalPopulation) *
                                  100
                                }%`,
                              }}
                            >
                              OBC (
                              {Math.round(
                                (village.populationDetails.obcPopulation /
                                  village.populationDetails.totalPopulation) *
                                  100
                              )}
                              %)
                            </div>
                            <div
                              className="progress-bar bg-success"
                              style={{
                                width: `${
                                  (village.populationDetails.generalPopulation /
                                    village.populationDetails.totalPopulation) *
                                  100
                                }%`,
                              }}
                            >
                              GEN (
                              {Math.round(
                                (village.populationDetails.generalPopulation /
                                  village.populationDetails.totalPopulation) *
                                  100
                              )}
                              %)
                            </div>
                          </div>
                          <div className="d-flex justify-content-between small">
                            <span>
                              SC: {village.populationDetails.scPopulation}
                            </span>
                            <span>
                              ST: {village.populationDetails.stPopulation}
                            </span>
                            <span>
                              OBC: {village.populationDetails.obcPopulation}
                            </span>
                            <span>
                              GEN: {village.populationDetails.generalPopulation}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-6">
                    <div className="card">
                      <div className="card-header bg-warning text-dark">
                        <h5 className="mb-0">Available Facilities</h5>
                      </div>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-4 mb-2">
                            <div
                              className={`card ${
                                village.availableFacilities.water
                                  ? "border-success"
                                  : "border-danger"
                              }`}
                            >
                              <div
                                className={`card-body text-center ${
                                  village.availableFacilities.water
                                    ? "bg-success bg-opacity-25"
                                    : "bg-danger bg-opacity-25"
                                }`}
                              >
                                <h1>💧</h1>
                                <h6>Water Supply</h6>
                                <span
                                  className={`badge ${
                                    village.availableFacilities.water
                                      ? "bg-success"
                                      : "bg-danger"
                                  }`}
                                >
                                  {village.availableFacilities.water
                                    ? "Available"
                                    : "Not Available"}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 mb-2">
                            <div
                              className={`card ${
                                village.availableFacilities.electricity
                                  ? "border-success"
                                  : "border-danger"
                              }`}
                            >
                              <div
                                className={`card-body text-center ${
                                  village.availableFacilities.electricity
                                    ? "bg-success bg-opacity-25"
                                    : "bg-danger bg-opacity-25"
                                }`}
                              >
                                <h1>⚡</h1>
                                <h6>Electricity</h6>
                                <span
                                  className={`badge ${
                                    village.availableFacilities.electricity
                                      ? "bg-success"
                                      : "bg-danger"
                                  }`}
                                >
                                  {village.availableFacilities.electricity
                                    ? "Available"
                                    : "Not Available"}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 mb-2">
                            <div
                              className={`card ${
                                village.availableFacilities.pucca_road
                                  ? "border-success"
                                  : "border-danger"
                              }`}
                            >
                              <div
                                className={`card-body text-center ${
                                  village.availableFacilities.pucca_road
                                    ? "bg-success bg-opacity-25"
                                    : "bg-danger bg-opacity-25"
                                }`}
                              >
                                <h1>🛣️</h1>
                                <h6>Paved Roads</h6>
                                <span
                                  className={`badge ${
                                    village.availableFacilities.pucca_road
                                      ? "bg-success"
                                      : "bg-danger"
                                  }`}
                                >
                                  {village.availableFacilities.pucca_road
                                    ? "Available"
                                    : "Not Available"}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 mb-2">
                            <div
                              className={`card ${
                                village.availableFacilities.healthcareCenter
                                  ? "border-success"
                                  : "border-danger"
                              }`}
                            >
                              <div
                                className={`card-body text-center ${
                                  village.availableFacilities.healthcareCenter
                                    ? "bg-success bg-opacity-25"
                                    : "bg-danger bg-opacity-25"
                                }`}
                              >
                                <h1>🏥</h1>
                                <h6>Healthcare</h6>
                                <span
                                  className={`badge ${
                                    village.availableFacilities.healthcareCenter
                                      ? "bg-success"
                                      : "bg-danger"
                                  }`}
                                >
                                  {village.availableFacilities.healthcareCenter
                                    ? "Available"
                                    : "Not Available"}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 mb-2">
                            <div
                              className={`card ${
                                village.availableFacilities.internet
                                  ? "border-success"
                                  : "border-danger"
                              }`}
                            >
                              <div
                                className={`card-body text-center ${
                                  village.availableFacilities.internet
                                    ? "bg-success bg-opacity-25"
                                    : "bg-danger bg-opacity-25"
                                }`}
                              >
                                <h1>🌐</h1>
                                <h6>Internet</h6>
                                <span
                                  className={`badge ${
                                    village.availableFacilities.internet
                                      ? "bg-success"
                                      : "bg-danger"
                                  }`}
                                >
                                  {village.availableFacilities.internet
                                    ? "Available"
                                    : "Not Available"}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 mb-2">
                            <div
                              className={`card ${
                                village.availableFacilities.school
                                  ? "border-success"
                                  : "border-danger"
                              }`}
                            >
                              <div
                                className={`card-body text-center ${
                                  village.availableFacilities.school
                                    ? "bg-success bg-opacity-25"
                                    : "bg-danger bg-opacity-25"
                                }`}
                              >
                                <h1>🏫</h1>
                                <h6>School</h6>
                                <span
                                  className={`badge ${
                                    village.availableFacilities.school
                                      ? "bg-success"
                                      : "bg-danger"
                                  }`}
                                >
                                  {village.availableFacilities.school
                                    ? "Available"
                                    : "Not Available"}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="card h-100">
                      <div className="card-header bg-danger text-white">
                        <h5 className="mb-0">Special Requirements</h5>
                      </div>
                      <div className="card-body">
                        <p className="lead">
                          {village.specialRequirements ||
                            "No special requirements specified."}
                        </p>

                        <div className="alert alert-warning mt-3">
                          <strong>Development Priority Areas:</strong>
                          <ul className="mb-0 mt-2">
                            {!village.availableFacilities.water && (
                              <li>Water infrastructure needed</li>
                            )}
                            {!village.availableFacilities.electricity && (
                              <li>Electricity supply needed</li>
                            )}
                            {!village.availableFacilities.pucca_road && (
                              <li>Road infrastructure needed</li>
                            )}
                            {!village.availableFacilities.healthcareCenter && (
                              <li>Healthcare facilities needed</li>
                            )}
                            {!village.availableFacilities.internet && (
                              <li>Internet connectivity needed</li>
                            )}
                            {!village.availableFacilities.school && (
                              <li>Educational facilities needed</li>
                            )}
                            {Object.values(village.availableFacilities).every(
                              Boolean
                            ) && <li>All basic facilities available</li>}
                          </ul>
                        </div>

                        <div className="d-grid gap-2 mt-3">
                          <button className="btn btn-primary">
                            Contact Sarpanch
                          </button>
                          <button className="btn btn-outline-success">
                            View Intervention Plans
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default VillagesList;
