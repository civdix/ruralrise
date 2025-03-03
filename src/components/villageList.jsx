import React, { useState } from "react";
import Navbar from "./Navbar";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkedAlt,
  FaCheckCircle,
  FaHome,
  FaUserAlt,
} from "react-icons/fa";

const UserDetails = ({ data }) => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <div className="card border-primary mb-3">
            <div className="card-header bg-primary text-white">
              User Information
            </div>
            <div className="card-body">
              <p>
                <strong>Name:</strong> {data.name}
              </p>
              <p>
                <strong>Gender:</strong> {data.gender}
              </p>
              <p>
                <strong>Age:</strong> {data.age}
              </p>
              <p>
                <strong>Mobile Number:</strong> {data.mobileNumber}
              </p>
              <p>
                <strong>Alternate Number:</strong> {data.alternateNumber}
              </p>
              <p>
                <strong>Family Members:</strong> {data.familyMembers}
              </p>
              <p>
                <strong>Email:</strong> {data.email}
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card border-success mb-3">
            <div className="card-header bg-success text-white">
              Land Details
            </div>
            <div className="card-body">
              <p>
                <strong>Village Name:</strong> {data.villageName}
              </p>
              <p>
                <strong>Panchayat:</strong> {data.panchayat}
              </p>
              <p>
                <strong>Land Ownership:</strong>{" "}
                {data.landOwnership ? "Yes" : "No"}
              </p>
              <p>
                <strong>Land Area:</strong> {data.landArea} sq. meters
              </p>
              <p>
                <strong>Land Type:</strong> {data.landType}
              </p>
              <p>
                <strong>Land Description:</strong> {data.landDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Dummy data for villages
const dummyVillages = [
  {
    id: 1,
    ownerInformation: {
      name: "Rajesh Kumar",
      gender: "Male",
      age: 40,
      mobileNumber: 9876543210,
      alternateNumber: 9123456789,
      familyMembers: 5,
      email: "rajesh.kumar@example.com",
      villageName: "Babhani",
      panchayat: "Babhani Panchayat",
      landmark: "Near the temple",
      district: "Ballia",
      tehsil: "Ballia Tehsil",
      state: "Uttar Pradesh",
      landOwnership: true,
      landArea: 100,
      landType: "Agricultural",
      landUsage: [1, 2],
      landDescription:
        "This is fertile agricultural land used for farming rice and wheat.",
      termsAgree: true,
      contactConsent: true,
    },
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
    ownerInformation: {
      name: "Neha Verma",
      gender: "Female",
      age: 32,
      mobileNumber: 9198765432,
      alternateNumber: 9201234567,
      familyMembers: 4,
      email: "neha.verma@example.com",
      villageName: "Jamshedpur",
      panchayat: "Jamshedpur Panchayat",
      landmark: "Near the main road",
      district: "East Singhbhum",
      tehsil: "Jamshedpur",
      state: "Jharkhand",
      landOwnership: true,
      landArea: 150,
      landType: "Commercial",
      landUsage: [3],
      landDescription:
        "A commercial land for setting up a retail business or office.",
      termsAgree: true,
      contactConsent: true,
    },
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
    ownerInformation: {
      name: "Amit Kumar",
      gender: "Male",
      age: 38,
      mobileNumber: 9956123456,
      alternateNumber: 9665432100,
      familyMembers: 3,
      email: "amit.kumar@example.com",
      villageName: "Chhapra",
      panchayat: "Chhapra Panchayat",
      landmark: "Near the bus stop",
      district: "Saran",
      tehsil: "Chhapra",
      state: "Bihar",
      landOwnership: true,
      landArea: 90,
      landType: "Mixed",
      landUsage: [2, 3],
      landDescription:
        "A mixed-use plot, part residential and part for small-scale farming.",
      termsAgree: true,
      contactConsent: true,
    },
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
    ownerInformation: {
      name: "Sita Devi",
      gender: "Female",
      age: 45,
      mobileNumber: 9876654321,
      alternateNumber: 9456123456,
      familyMembers: 7,
      email: "sita.devi@example.com",
      villageName: "Madhupur",
      panchayat: "Madhupur Panchayat",
      landmark: "Near the river bank",
      district: "Deoghar",
      tehsil: "Madhupur",
      state: "Jharkhand",
      landOwnership: true,
      landArea: 180,
      landType: "Agricultural",
      landUsage: [1],
      landDescription:
        "A large piece of fertile land used for growing crops like maize and paddy.",
      termsAgree: true,
      contactConsent: true,
    },
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
    ownerInformation: {
      name: "Rahul Mehta",
      gender: "Male",
      age: 30,
      mobileNumber: 9867432100,
      alternateNumber: 9876543210,
      familyMembers: 6,
      email: "rahul.mehta@example.com",
      villageName: "Kharar",
      panchayat: "Kharar Panchayat",
      landmark: "Opposite the market",
      district: "Chandigarh",
      tehsil: "Kharar",
      state: "Punjab",
      landOwnership: true,
      landArea: 120,
      landType: "Commercial",
      landUsage: [2],
      landDescription:
        "A plot of land for building commercial shops and offices.",
      termsAgree: true,
      contactConsent: true,
    },
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
    industrialPotential: "Sugarcane processing & biofuel",
    specialRequirements:
      "Urgent need for primary healthcare center and solar electricity",
  },
  {
    id: 6,
    ownerInformation: {
      name: "Anjali Rani",
      gender: "Female",
      age: 26,
      mobileNumber: 9911122334,
      alternateNumber: 9876541234,
      familyMembers: 2,
      email: "anjali.rani@example.com",
      villageName: "Bokaro",
      panchayat: "Bokaro Panchayat",
      landmark: "Near the post office",
      district: "Bokaro",
      tehsil: "Bokaro Tehsil",
      state: "Jharkhand",
      landOwnership: true,
      landArea: 75,
      landType: "Mixed",
      landUsage: [1, 3],
      landDescription: "A mix of agricultural and residential land.",
      termsAgree: true,
      contactConsent: true,
    },
    basicInfo: {
      villageName: "Dharampur",
      state: "Madhya Pradesh",
      district: "Indore",
      pinCode: "452001",
      gpsCoordinates: "22.7196° N, 75.8577° E",
    },
    panchayatDetails: {
      gramPanchayatName: "Dharampur Gram Panchayat",
      sarpanchName: "Anil Verma",
      sarpanchMobile: "9876543215",
      blockTalukaName: "Sanwer",
      panchayatEmail: "dharampur.gp@gmail.com",
    },
    populationDetails: {
      totalPopulation: 3800,
      malePopulation: 1950,
      femalePopulation: 1850,
      scPopulation: 800,
      stPopulation: 350,
      obcPopulation: 1400,
      generalPopulation: 1250,
      childPopulation: 720,
    },
    availableFacilities: {
      water: true,
      electricity: true,
      pucca_road: true,
      healthcareCenter: false,
      internet: false,
      school: true,
    },
    employmentOpportunities: {
      agriculture: "Soybean, Wheat",
      smallIndustries: "Dairy Farming",
      digitalJobs: "None",
    },
    industrialPotential: "Dairy and food processing",
    specialRequirements: "Need a primary healthcare center and internet access",
  },
  {
    id: 7,
    ownerInformation: {
      name: "Pooja Sharma",
      gender: "Female",
      age: 28,
      mobileNumber: 9912345678,
      alternateNumber: 9908765432,
      familyMembers: 3,
      email: "pooja.sharma@example.com",
      villageName: "Surajpur",
      panchayat: "Surajpur Panchayat",
      landmark: "Near the school",
      district: "Ghaziabad",
      tehsil: "Loni",
      state: "Uttar Pradesh",
      landOwnership: true,
      landArea: 50,
      landType: "Residential",
      landUsage: [2],
      landDescription: "A residential plot for constructing a house.",
      termsAgree: true,
      contactConsent: true,
    },
    basicInfo: {
      villageName: "Rajgarh",
      state: "Gujarat",
      district: "Surat",
      pinCode: "395001",
      gpsCoordinates: "21.1702° N, 72.8311° E",
    },
    panchayatDetails: {
      gramPanchayatName: "Rajgarh Gram Panchayat",
      sarpanchName: "Bhavesh Patel",
      sarpanchMobile: "9876543216",
      blockTalukaName: "Olpad",
      panchayatEmail: "rajgarh.gp@gmail.com",
    },
    populationDetails: {
      totalPopulation: 4200,
      malePopulation: 2200,
      femalePopulation: 2000,
      scPopulation: 750,
      stPopulation: 200,
      obcPopulation: 1800,
      generalPopulation: 1450,
      childPopulation: 900,
    },
    availableFacilities: {
      water: true,
      electricity: true,
      pucca_road: true,
      healthcareCenter: true,
      internet: true,
      school: true,
    },
    employmentOpportunities: {
      agriculture: "Cotton, Groundnut",
      smallIndustries: "Textile Weaving",
      digitalJobs: "Data Entry",
    },
    industrialPotential: "Textile industry & cotton processing",
    specialRequirements:
      "Need a startup incubation center for small-scale textile businesses",
  },
  {
    id: 8,
    ownerInformation: {
      name: "Vikram Singh",
      gender: "Male",
      age: 33,
      mobileNumber: 8776543210,
      alternateNumber: 9887654321,
      familyMembers: 4,
      email: "vikram.singh@example.com",
      villageName: "Sahibganj",
      panchayat: "Sahibganj Panchayat",
      landmark: "Beside the railway station",
      district: "Varanasi",
      tehsil: "Varanasi",
      state: "Uttar Pradesh",
      landOwnership: true,
      landArea: 200,
      landType: "Agricultural",
      landUsage: [1],
      landDescription: "Farming land primarily used for growing sugarcane.",
      termsAgree: true,
      contactConsent: true,
    },
    basicInfo: {
      villageName: "Pannapur",
      state: "West Bengal",
      district: "Nadia",
      pinCode: "741101",
      gpsCoordinates: "23.4042° N, 88.5016° E",
    },
    panchayatDetails: {
      gramPanchayatName: "Pannapur Gram Panchayat",
      sarpanchName: "Suman Ghosh",
      sarpanchMobile: "9876543217",
      blockTalukaName: "Krishnanagar",
      panchayatEmail: "pannapur.gp@gmail.com",
    },
    populationDetails: {
      totalPopulation: 3100,
      malePopulation: 1600,
      femalePopulation: 1500,
      scPopulation: 700,
      stPopulation: 150,
      obcPopulation: 1100,
      generalPopulation: 1150,
      childPopulation: 600,
    },
    availableFacilities: {
      water: true,
      electricity: true,
      pucca_road: false,
      healthcareCenter: false,
      internet: false,
      school: true,
    },
    employmentOpportunities: {
      agriculture: "Rice, Jute",
      smallIndustries: "Handicrafts",
      digitalJobs: "None",
    },
    industrialPotential: "Jute processing & handicraft exports",
    specialRequirements: "Need better roads and a rural banking system",
  },
  {
    id: 9,
    ownerInformation: {
      name: "Rajesh Kumar",
      gender: "Male",
      age: 40,
      mobileNumber: 9876543210,
      alternateNumber: 9123456789,
      familyMembers: 5,
      email: "rajesh.kumar@example.com",
      villageName: "Babhani",
      panchayat: "Babhani Panchayat",
      landmark: "Near the temple",
      district: "Ballia",
      tehsil: "Ballia Tehsil",
      state: "Uttar Pradesh",
      landOwnership: true,
      landArea: 100,
      landType: "Agricultural",
      landUsage: [1, 2],
      landDescription:
        "This is fertile agricultural land used for farming rice and wheat.",
      termsAgree: true,
      contactConsent: true,
    },

    basicInfo: {
      villageName: "Bhavani",
      state: "Tamil Nadu",
      district: "Erode",
      pinCode: "638301",
      gpsCoordinates: "11.4419° N, 77.6820° E",
    },
    panchayatDetails: {
      gramPanchayatName: "Bhavani Gram Panchayat",
      sarpanchName: "Lakshmi Natarajan",
      sarpanchMobile: "9876543218",
      blockTalukaName: "Gobichettipalayam",
      panchayatEmail: "bhavani.gp@gmail.com",
    },
    populationDetails: {
      totalPopulation: 5000,
      malePopulation: 2600,
      femalePopulation: 2400,
      scPopulation: 1200,
      stPopulation: 300,
      obcPopulation: 1900,
      generalPopulation: 1600,
      childPopulation: 1000,
    },
    availableFacilities: {
      water: true,
      electricity: true,
      pucca_road: true,
      healthcareCenter: true,
      internet: true,
      school: true,
    },
    employmentOpportunities: {
      agriculture: "Coconut, Turmeric",
      smallIndustries: "Silk Weaving",
      digitalJobs: "Freelance Work",
    },
    industrialPotential: "Silk textile & turmeric processing",
    specialRequirements:
      "Need an e-commerce training center to help local artisans sell products",
  },
  {
    id: 10,
    ownerInformation: {
      name: "Sita Devi",
      gender: "Female",
      age: 45,
      mobileNumber: 9876654321,
      alternateNumber: 9456123456,
      familyMembers: 7,
      email: "sita.devi@example.com",
      villageName: "Madhupur",
      panchayat: "Madhupur Panchayat",
      landmark: "Near the river bank",
      district: "Deoghar",
      tehsil: "Madhupur",
      state: "Jharkhand",
      landOwnership: true,
      landArea: 180,
      landType: "Agricultural",
      landUsage: [1],
      landDescription:
        "A large piece of fertile land used for growing crops like maize and paddy.",
      termsAgree: true,
      contactConsent: true,
    },
    basicInfo: {
      villageName: "Nandgaon",
      state: "Maharashtra",
      district: "Nashik",
      pinCode: "423106",
      gpsCoordinates: "20.0110° N, 73.7910° E",
    },
    panchayatDetails: {
      gramPanchayatName: "Nandgaon Gram Panchayat",
      sarpanchName: "Prashant More",
      sarpanchMobile: "9876543219",
      blockTalukaName: "Malegaon",
      panchayatEmail: "nandgaon.gp@gmail.com",
    },
    populationDetails: {
      totalPopulation: 4600,
      malePopulation: 2400,
      femalePopulation: 2200,
      scPopulation: 900,
      stPopulation: 400,
      obcPopulation: 1800,
      generalPopulation: 1500,
      childPopulation: 850,
    },
    availableFacilities: {
      water: true,
      electricity: true,
      pucca_road: true,
      healthcareCenter: false,
      internet: false,
      school: true,
    },
    employmentOpportunities: {
      agriculture: "Grapes, Onions",
      smallIndustries: "Wine Making",
      digitalJobs: "Remote Data Entry",
    },
    industrialPotential: "Wine production & onion export",
    specialRequirements: "Need a cold storage facility for perishable goods",
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
                        <h5 className="mb-0">User Address </h5>
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
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="card h-100">
                      <div className="card-header bg-success text-white">
                        <h5 className="mb-0">User's Panchayat Details</h5>
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
                <UserDetails data={village.ownerInformation} />
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
                            Apply for this
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
