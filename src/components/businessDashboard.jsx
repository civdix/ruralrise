import React, { useState, useContext, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Nav,
  Tab,
  Table,
  Card,
  Badge,
} from "react-bootstrap";
import RuralContext from "./context/ruralContext";
// Sample data for villagers
import { Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
const villagerData = [
  {
    id: 1,
    name: "Ramesh Kumar",
    village: "Gopalpur",
    landSize: "5 acres",
    cropType: "Rice",
    status: "Approved",
    appliedDate: "2025-02-15",
  },
  {
    id: 2,
    name: "Sarita Devi",
    village: "Maheshpur",
    landSize: "3 acres",
    cropType: "Wheat",
    status: "Pending",
    appliedDate: "2025-02-28",
  },
  {
    id: 3,
    name: "Mohan Singh",
    village: "Vrindavan",
    landSize: "7 acres",
    cropType: "Vegetables",
    status: "Rejected",
    appliedDate: "2025-02-10",
  },
  {
    id: 4,
    name: "Lakshmi Prasad",
    village: "Mathura",
    landSize: "2 acres",
    cropType: "Flowers",
    status: "Approved",
    appliedDate: "2025-01-25",
  },
  {
    id: 5,
    name: "Vikram Patel",
    village: "Parikrama",
    landSize: "4 acres",
    cropType: "Pulses",
    status: "Pending",
    appliedDate: "2025-03-01",
  },
];

// Sample data for recommended land
const recommendedLand = [
  {
    id: 1,
    ownerName: "Suresh Yadav",
    village: "Gopalpur",
    landSize: "8 acres",
    soilType: "Alluvial",
    waterSource: "Canal",
    suitability: "Technology Farming",
    distance: "5 km",
  },
  {
    id: 2,
    ownerName: "Preeti Sharma",
    village: "Vrindavan",
    landSize: "4 acres",
    soilType: "Black Soil",
    waterSource: "Well",
    suitability: "IT Infrastructure",
    distance: "3 km",
  },
  {
    id: 3,
    ownerName: "Rajesh Gupta",
    village: "Mathura",
    landSize: "6 acres",
    soilType: "Red Soil",
    waterSource: "River",
    suitability: "Tech Training Center",
    distance: "7 km",
  },
];

// Business details
function RuralRiseBusinessDashboard() {
  const { business, setBusiness, getBusinessDetails } =
    useContext(RuralContext);
  if (business.length < 3) {
    setBusiness({
      firstName: "Shivam",
      lastName: "doxot",
      email: "shivamdixit@gmail.com",
      phone: "9720943948",
      password: "66666600",
      businessName: "Shivdix",
      businessType: "Technology",
      businessAddress: "Vrindavan, Parikrama Marg, panighat",
      businessPhone: "+91943943454",
      businessWebsite: "https://shivamfrommathura.blogspot.com",
      yearsInOperation: 2,
      employeeCount: 1,
      annualRevenue: "Under 50,000",
      businessDescription:
        "I am the sole proprietor for this business, it is an IT Company which provides end-to-end IT support",
      submissionStatus: "Pending",
    });
  }
  // useEffect(() => {
  //   getBusinessDetails();
  // }, []);
  const [businessDetails, setBusinessDetails] = useState({
    businessName: business.businessName,
    businessType: business.businessType,
    businessAddress: business.businessAddress,
    businessPhone: business.businessPhone,
    businessWebsite: business.businessWebsite,
    yearsInOperation: business.yearsInOperation,
    employeeCount: business.employeeCount,
    annualRevenue: business.annualRevenue,
    businessDescription: business.businessDescription,
    submissionStatus: business.submissionStatus,
    createdAt: business.createdAt,
  });
  const [businessOwner, setBusinessOwner] = useState({
    firstName: business.firstName,
    lastName: business.lastName,
    email: business.email,
    phone: business.phone,
  });

  const StatusBadge = ({ status }) => {
    if (status === "Approved") {
      return (
        <Badge bg="success">
          <i className="bi bi-check-circle-fill me-1"></i>Approved
        </Badge>
      );
    } else if (status === "Rejected") {
      return (
        <Badge bg="danger">
          <i className="bi bi-x-circle-fill me-1"></i>Rejected
        </Badge>
      );
    } else {
      return (
        <Badge bg="warning">
          <i className="bi bi-exclamation-circle-fill me-1"></i>Pending
        </Badge>
      );
    }
  };

  return (
    <div className="bg-light min-vh-100">
      {/* Header */}
      <header className="bg-white shadow-sm py-3 mb-4">
        <Container>
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="h3 mb-0">RuralRise - Business Dashboard</h1>
            <div className="d-flex align-items-center">
              <Link style={{ color: "black", textDecoration: "none" }} to="/">
                Home{" "}
              </Link>
            </div>
            <div className="d-flex align-items-center">
              <Link
                to="/Villagelist"
                style={{ color: "black", textDecoration: "none" }}
              >
                Land Listing{" "}
              </Link>
            </div>

            <div className="d-flex align-items-center">
              <span className="me-3">Welcome, {businessOwner.firstName}</span>
              <Badge bg="primary">{businessDetails.businessType}</Badge>
              <FiLogOut
                cursor="pointer"
                className="mx-3"
                size={25}
                onClick={() => {
                  localStorage.clear();
                }}
              />
            </div>
          </div>
        </Container>
      </header>

      {/* Main Content */}
      <Container className="mb-5">
        <Tab.Container defaultActiveKey="villagers">
          <Row>
            <Col xs={12}>
              <Nav variant="tabs" className="mb-4">
                <Nav.Item>
                  <Nav.Link eventKey="villagers">
                    Villager Applications
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="recommendations">
                    Land Recommendations
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="business">Business Profile</Nav.Link>
                </Nav.Item>
              </Nav>

              <Tab.Content>
                {/* Villager Applications Tab */}
                <Tab.Pane eventKey="villagers">
                  <Card className="border-0 shadow-sm">
                    <Card.Header className="bg-white">
                      <Card.Title>Villager Applications</Card.Title>
                      <Card.Subtitle className="text-muted">
                        Manage Your Recent Applied Lands <br /> 1. Success -
                        Ready to Proceed <br /> 2. Pending - Pending from Server
                        or Land owner end <br /> 3. Rejected - Rejected by
                        Villager or Server
                      </Card.Subtitle>
                    </Card.Header>
                    <Card.Body>
                      <div className="d-flex justify-content-between mb-3">
                        <div className="d-flex gap-2">
                          <Badge bg="success">
                            {
                              villagerData.filter(
                                (v) => v.status === "Approved"
                              ).length
                            }{" "}
                            Approved
                          </Badge>
                          <Badge bg="warning">
                            {
                              villagerData.filter((v) => v.status === "Pending")
                                .length
                            }{" "}
                            Pending
                          </Badge>
                          <Badge bg="danger">
                            {
                              villagerData.filter(
                                (v) => v.status === "Rejected"
                              ).length
                            }{" "}
                            Rejected
                          </Badge>
                        </div>
                        <Badge bg="info">Total: {villagerData.length}</Badge>
                      </div>
                      <div className="table-responsive">
                        <Table hover>
                          <thead>
                            <tr>
                              <th>Name</th>
                              <th>Village</th>
                              <th>Land Size</th>
                              {/* <th>Crop Type</th> */}
                              <th>Applied Date</th>
                              <th>Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            {villagerData.map((villager) => (
                              <tr key={villager.id}>
                                <td className="fw-bold">{villager.name}</td>
                                <td>{villager.village}</td>
                                <td>{villager.landSize}</td>
                                {/* <td>{villager.cropType}</td> */}
                                <td>
                                  {new Date(
                                    villager.appliedDate
                                  ).toLocaleDateString()}
                                </td>
                                <td>
                                  <StatusBadge status={villager.status} />
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </Table>
                      </div>
                    </Card.Body>
                  </Card>
                </Tab.Pane>

                {/* Land Recommendations Tab */}
                <Tab.Pane eventKey="recommendations">
                  <Card className="border-0 shadow-sm">
                    <Card.Header className="bg-white">
                      <Card.Title>Land Recommendations</Card.Title>
                      <Card.Subtitle className="text-muted">
                        Land recommendations based on your business needs for{" "}
                        {businessDetails.businessType}.
                      </Card.Subtitle>
                    </Card.Header>
                    <Card.Body>
                      <div className="mb-3">
                        <Badge bg="info">
                          Total Recommendations: {recommendedLand.length}
                        </Badge>
                      </div>
                      <div className="table-responsive">
                        <Table hover>
                          <thead>
                            <tr>
                              <th>Owner</th>
                              <th>Village</th>
                              <th>Land Size</th>
                              <th>Soil Type</th>
                              <th>Water Source</th>
                              <th>Suitability</th>
                              <th>Distance From City</th>
                            </tr>
                          </thead>
                          <tbody>
                            {recommendedLand.map((land) => (
                              <tr key={land.id}>
                                <td className="fw-bold">{land.ownerName}</td>
                                <td>{land.village}</td>
                                <td>{land.landSize}</td>
                                <td>{land.soilType}</td>
                                <td>{land.waterSource}</td>
                                <td>{land.suitability}</td>
                                <td>{land.distance}</td>
                              </tr>
                            ))}
                          </tbody>
                        </Table>
                      </div>
                    </Card.Body>
                  </Card>
                </Tab.Pane>

                {/* Business Profile Tab */}
                <Tab.Pane eventKey="business">
                  <Row>
                    {/* Owner Details */}
                    <Col md={6} className="mb-4">
                      <Card className="border-0 shadow-sm h-100">
                        <Card.Header className="bg-white">
                          <div className="d-flex align-items-center">
                            <i className="bi bi-person-circle me-2"></i>
                            <div>
                              <Card.Title>Owner Details</Card.Title>
                              <Card.Subtitle className="text-muted">
                                Your personal information
                              </Card.Subtitle>
                            </div>
                          </div>
                        </Card.Header>
                        <Card.Body>
                          <dl className="row mb-0">
                            <dt className="col-sm-4">Name</dt>
                            <dd className="col-sm-8">
                              {businessOwner.firstName} {businessOwner.lastName}
                            </dd>

                            <dt className="col-sm-4">Email</dt>
                            <dd className="col-sm-8">{businessOwner.email}</dd>

                            <dt className="col-sm-4">Phone</dt>
                            <dd className="col-sm-8">{businessOwner.phone}</dd>
                          </dl>
                        </Card.Body>
                      </Card>
                    </Col>

                    {/* Business Details */}
                    <Col md={6} className="mb-4">
                      <Card className="border-0 shadow-sm h-100">
                        <Card.Header className="bg-white">
                          <div className="d-flex align-items-center">
                            <i className="bi bi-building me-2"></i>
                            <div>
                              <Card.Title>Business Details</Card.Title>
                              <Card.Subtitle className="text-muted">
                                Your business information
                              </Card.Subtitle>
                            </div>
                          </div>
                        </Card.Header>
                        <Card.Body>
                          <dl className="row mb-0">
                            <dt className="col-sm-5">Business Name</dt>
                            <dd className="col-sm-7">
                              {businessDetails.businessName}
                            </dd>

                            <dt className="col-sm-5">Type</dt>
                            <dd className="col-sm-7">
                              {businessDetails.businessType}
                            </dd>

                            <dt className="col-sm-5">Years Operating</dt>
                            <dd className="col-sm-7">
                              {businessDetails.yearsInOperation}
                            </dd>

                            <dt className="col-sm-5">Employees</dt>
                            <dd className="col-sm-7">
                              {businessDetails.employeeCount}
                            </dd>

                            <dt className="col-sm-5">Revenue</dt>
                            <dd className="col-sm-7">
                              {businessDetails.annualRevenue}
                            </dd>

                            <dt className="col-sm-5">Status</dt>
                            <dd className="col-sm-7">
                              <StatusBadge
                                status={businessDetails.submissionStatus}
                              />
                            </dd>
                          </dl>
                        </Card.Body>
                      </Card>
                    </Col>

                    {/* Address and Contact */}
                    <Col md={12}>
                      <Card className="border-0 shadow-sm">
                        <Card.Header className="bg-white">
                          <div className="d-flex align-items-center">
                            <i className="bi bi-geo-alt me-2"></i>
                            <div>
                              <Card.Title>Address & Contact</Card.Title>
                              <Card.Subtitle className="text-muted">
                                Business location and contact details
                              </Card.Subtitle>
                            </div>
                          </div>
                        </Card.Header>
                        <Card.Body>
                          <Row>
                            <Col md={6}>
                              <Card className="mb-3 border-0 bg-light">
                                <Card.Body>
                                  <h6 className="card-subtitle mb-2 text-muted">
                                    Business Address
                                  </h6>
                                  <p className="card-text">
                                    {businessDetails.businessAddress}
                                  </p>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col md={6}>
                              <Card className="mb-3 border-0 bg-light">
                                <Card.Body>
                                  <h6 className="card-subtitle mb-2 text-muted">
                                    Contact Information
                                  </h6>
                                  <ul className="list-unstyled">
                                    <li>
                                      <strong>Phone:</strong>{" "}
                                      {businessDetails.businessPhone}
                                    </li>
                                    <li>
                                      <strong>Website:</strong>{" "}
                                      <a
                                        href={businessDetails.businessWebsite}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        {businessDetails.businessWebsite}
                                      </a>
                                    </li>
                                    <li>
                                      <strong>Created:</strong>{" "}
                                      {new Date(
                                        businessDetails.createdAt
                                      ).toLocaleDateString()}
                                    </li>
                                  </ul>
                                </Card.Body>
                              </Card>
                            </Col>
                          </Row>
                          <Card className="border-0 bg-light">
                            <Card.Body>
                              <h6 className="card-subtitle mb-2 text-muted">
                                Business Description
                              </h6>
                              <p className="card-text">
                                {businessDetails.businessDescription}
                              </p>
                            </Card.Body>
                          </Card>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>

      {/* Footer */}
      <footer className="bg-white py-3 border-top mt-auto">
        <Container>
          <div className="text-center text-muted">
            <small>
              &copy; 2025 RuralRise App - Helping rural businesses grow
            </small>
          </div>
        </Container>
      </footer>
    </div>
  );
}

export default RuralRiseBusinessDashboard;
