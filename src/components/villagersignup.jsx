import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { FaBackward } from "react-icons/fa";
import { Link } from "react-router";
const VillagerRegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    age: 0,
    mobileNumber: "",
    alternateNumber: "",
    email: "",
    aadhaarNumber: "",
    familyMembers: 0,

    villageName: "",
    panchayat: "",
    landmark: "",
    district: "",
    tehsil: "",
    state: "",
    pincode: "",

    landOwnership: "",
    landArea: "",
    landType: "",
    landUsage: [],
    landDescription: "",
    termsAgree: false,
    contactConsent: false,
  });

  const [validated, setValidated] = useState(false);
  const [showLandDetails, setShowLandDetails] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      if (name === "termsAgree" || name === "contactConsent") {
        setFormData({
          ...formData,
          [name]: checked,
        });
      } else if (name.startsWith("landUsage.")) {
        const usageKey = name.split(".")[1];
        setFormData({
          ...formData,
          landUsage: [...formData.landUsage, usageKey],
        });
      } else if (name.startsWith("resources.")) {
        const resourceKey = name.split(".")[1];
        setFormData({
          ...formData,
          resources: {
            ...formData.resources,
            [resourceKey]: checked,
          },
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });

      if (name === "landOwnership") {
        setShowLandDetails(value === "yes");
      }
    }
  };

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    console.log(formData);
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    setValidated(true);

    const response = fetch(
      "http://localhost:5000/api/auth/VillagerRegistration",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    )
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => {
        console.error("Error:", error);
      });
    // Here you would typically send the data to your server
    alert(
      "Thank you for registering with Rural Rise! Your information has been submitted successfully."
    );
    // Reset the form
    setFormData({
      name: "",
      gender: "",
      age: 0,
      mobileNumber: "",
      alternateNumber: "",
      email: "",
      adhaarNumber: "",
      familyMembers: 0,

      villageName: "",
      panchayat: "",
      landmark: "",
      district: "",
      tehsil: "",
      state: "",
      pincode: "",

      landOwnership: "",
      landArea: "",
      landType: "",
      landUsage: [],
      landDescription: "",
      termsAgree: false,
      contactConsent: false,
    });
    setValidated(false);
    setShowLandDetails(false);
  };

  return (
    <Container className="my-4">
      <Card className="border-0 shadow">
        <Card.Header className="bg-success text-white text-center py-4">
          <Link to="/">
            <FaBackward size={25} className="float-start my-2" color="white" />
          </Link>
          <h2 className="mb-0">Rural Rise - Villager Registration</h2>
          <p className="mb-0">
            Register yourself and your village to join our rural development
            initiative
          </p>
        </Card.Header>

        <Card.Body className="p-4">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            {/* Personal Information Section */}
            <div className="mb-4">
              <h4 className="mb-3 text-success border-bottom pb-2">
                Personal Information
              </h4>

              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group controlId="fullName">
                    <Form.Label>
                      Full Name <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide your full name.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="gender">
                    <Form.Label>Gender</Form.Label>
                    <Form.Select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                    >
                      <option value="">Please select</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                      <option value="preferNotToSay">Prefer not to say</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group controlId="mobileNumber">
                    <Form.Label>
                      Mobile Number <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="number"
                      name="mobileNumber"
                      value={formData.mobileNumber}
                      onChange={handleChange}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide your mobile number.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="alternateNumber">
                    <Form.Label>Alternate Number</Form.Label>
                    <Form.Control
                      type="number"
                      name="alternateNumber"
                      value={formData.alternateNumber}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group controlId="password">
                    <Form.Label>
                      Password(Minimum: 8, Maximum:20)
                      <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide your Password.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="email">
                    <Form.Label>
                      Email Address <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <Form.Text className="text-muted">
                      We'll use this to send important backup and updates
                    </Form.Text>
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group controlId="adhaarNumber">
                    <Form.Label>
                      Adhar Number <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="number"
                      name="aadhaarNumber"
                      value={formData.aadhaarNumber}
                      onChange={handleChange}
                      required
                    />
                    <Form.Text className="text-muted">
                      We'll use this to Verify Your Identity
                    </Form.Text>
                    <Form.Control.Feedback type="invalid">
                      Please provide your Adhaar number.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
            </div>

            {/* Village Information Section */}
            <div className="mb-4">
              <h4 className="mb-3 text-success border-bottom pb-2">Address</h4>

              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group controlId="villageName">
                    <Form.Label>
                      Village Name <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="villageName"
                      value={formData.villageName}
                      onChange={handleChange}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide your village name.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="panchayat">
                    <Form.Label>Gram Panchayat</Form.Label>
                    <Form.Control
                      type="text"
                      name="panchayat"
                      value={formData.panchayat}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group controlId="tehsil">
                    <Form.Label>
                      Block/Tehsil <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="tehsil"
                      value={formData.tehsil}
                      onChange={handleChange}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide your block/tehsil.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="district">
                    <Form.Label>
                      District <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="district"
                      value={formData.district}
                      onChange={handleChange}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide your district.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">
                {/* <Col md={6}>
                  <Form.Group controlId="villageCode">
                    <Form.Label>
                      Village Code (Census Code, Ask Village officials about it){" "}
                      <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="villageCode"
                      value={formData.state}
                      onChange={handleChange}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide your state.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col> */}
                <Col md={6}>
                  <Form.Group controlId="state">
                    <Form.Label>
                      State <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide your state.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="pincode">
                    <Form.Label>
                      Pincode <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="number"
                      name="pinCode"
                      value={formData.pinCode}
                      onChange={handleChange}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide your pincode.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3" controlId="landmark">
                <Form.Label>Nearby Landmarks</Form.Label>
                <Form.Control
                  type="text"
                  name="landmark"
                  value={formData.landmark}
                  onChange={handleChange}
                />
                <Form.Text className="text-muted">
                  Help us locate your village easily
                </Form.Text>
              </Form.Group>
            </div>

            {/* Land Details Section */}
            <div className="mb-4">
              <h4 className="mb-3 text-success border-bottom pb-2">
                Land Details
              </h4>

              <Form.Group className="mb-3" controlId="landOwnership">
                <Form.Label>
                  Do you own land in this village?{" "}
                  <span className="text-danger">*</span>
                </Form.Label>
                <Form.Select
                  name="landOwnership"
                  value={formData.landOwnership}
                  onChange={handleChange}
                  required
                >
                  <option value="">Please select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Please select an option.
                </Form.Control.Feedback>
              </Form.Group>

              {showLandDetails && (
                <>
                  <Row className="mb-3">
                    <Col md={6}>
                      <Form.Group controlId="landArea">
                        <Form.Label>Land Area (in acres)</Form.Label>
                        <Form.Control
                          type="number"
                          step="0.01"
                          name="landArea"
                          value={formData.landArea}
                          placeholder="Land Area in Square Yard"
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="landType">
                        <Form.Label>Land Type</Form.Label>
                        <Form.Select
                          name="landType"
                          value={formData.landType}
                          onChange={handleChange}
                        >
                          <option value="">Please select</option>
                          <option value="Agricultural">Agricultural</option>
                          <option value="Residential">Residential</option>
                          <option value="Commercial">Commercial</option>
                          <option value="Mixed">Mixed Use</option>
                          <option value="Barren">Barren Land</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label>Current Land Usage</Form.Label>
                    <div>
                      <Form.Check
                        type="checkbox"
                        id="usage_farming"
                        label="Farming"
                        name="landUsage.farming"
                        onChange={handleChange}
                        className="mb-2"
                      />
                      <Form.Check
                        type="checkbox"
                        id="usage_livestock"
                        label="Livestock"
                        name="landUsage.livestock"
                        checked={formData.livestock}
                        onChange={handleChange}
                        className="mb-2"
                      />
                      <Form.Check
                        type="checkbox"
                        id="usage_orchard"
                        label="Orchard/Plantation"
                        name="landUsage.orchard"
                        checked={formData.orchard}
                        onChange={handleChange}
                        className="mb-2"
                      />
                      <Form.Check
                        type="checkbox"
                        id="usage_residential"
                        label="Residential"
                        name="landUsage.residential"
                        checked={formData.residential}
                        onChange={handleChange}
                        className="mb-2"
                      />
                      <Form.Check
                        type="checkbox"
                        id="usage_unused"
                        label="Unused/Vacant"
                        name="landUsage.unused"
                        checked={formData.unused}
                        onChange={handleChange}
                        className="mb-2"
                      />
                    </div>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="landDescription">
                    <Form.Label>Brief Description of Your Land</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="landDescription"
                      value={formData.landDescription}
                      onChange={handleChange}
                    />
                    <Form.Text className="text-muted">
                      Mention water sources, soil type, crops grown, etc.
                    </Form.Text>
                  </Form.Group>
                </>
              )}
            </div>

            {/* Village Resources Section */}
            {/* <div className="mb-4">
              <h4 className="mb-3 text-success border-bottom pb-2">
                Village Resources & Opportunities
              </h4>

              <Form.Group className="mb-3">
                <Form.Label>Available Resources in Village</Form.Label>
                <div>
                  <Form.Check
                    type="checkbox"
                    id="resource_water"
                    label="Water Bodies (River, Lake, Pond)"
                    name="resources.water"
                    checked={formData.resources.water}
                    onChange={handleChange}
                    className="mb-2"
                  />
                  <Form.Check
                    type="checkbox"
                    id="resource_forest"
                    label="Forest/Woodland"
                    name="resources.forest"
                    checked={formData.resources.forest}
                    onChange={handleChange}
                    className="mb-2"
                  />
                  <Form.Check
                    type="checkbox"
                    id="resource_minerals"
                    label="Minerals/Stones"
                    name="resources.minerals"
                    checked={formData.resources.minerals}
                    onChange={handleChange}
                    className="mb-2"
                  />
                  <Form.Check
                    type="checkbox"
                    id="resource_handicrafts"
                    label="Traditional Handicrafts"
                    name="resources.handicrafts"
                    checked={formData.resources.handicrafts}
                    onChange={handleChange}
                    className="mb-2"
                  />
                  <Form.Check
                    type="checkbox"
                    id="resource_tourism"
                    label="Tourism Potential"
                    name="resources.tourism"
                    checked={formData.resources.tourism}
                    onChange={handleChange}
                    className="mb-2"
                  />
                </div>
              </Form.Group>

              <Form.Group className="mb-3" controlId="villageDescription">
                <Form.Label>Tell us about your village</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  name="villageDescription"
                  value={formData.villageDescription}
                  onChange={handleChange}
                />
                <Form.Text className="text-muted">
                  Describe special features, needs, opportunities, or challenges
                </Form.Text>
              </Form.Group>
            </div> */}

            {/* Terms and Consent */}
            <div className="mb-4">
              <Form.Group className="mb-3" controlId="termsAgree">
                <Form.Check
                  type="checkbox"
                  name="termsAgree"
                  checked={formData.termsAgree}
                  onChange={handleChange}
                  label={
                    <>
                      I confirm that the information provided is accurate to the
                      best of my knowledge{" "}
                      <span className="text-danger">*</span>
                    </>
                  }
                  required
                  feedback="You must agree before submitting."
                  feedbackType="invalid"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="contactConsent">
                <Form.Check
                  type="checkbox"
                  name="contactConsent"
                  checked={formData.contactConsent}
                  onChange={handleChange}
                  label={
                    <>
                      I consent to be contacted by Rural Rise representatives
                      regarding this registration{" "}
                      <span className="text-danger">*</span>
                    </>
                  }
                  required
                  feedback="You must agree before submitting."
                  feedbackType="invalid"
                />
              </Form.Group>
            </div>

            <div className="d-flex justify-content-end gap-2">
              <Button
                variant="outline-secondary"
                type="reset"
                onClick={() => {
                  setFormData({
                    personalInfo: {
                      name: "",
                      gender: "",
                      age: 0,
                      mobileNumber: "",
                      alternateNumber: "",
                      email: "",
                      adhaarNumber: "",
                      familyMembers: 0,
                    },
                    address: {
                      villageName: "",
                      panchayat: "",
                      landmark: "",
                      district: "",
                      tehsil: "",
                      state: "",
                      pincode: "",
                    },
                    landDetails: {
                      landOwnership: "",
                      landArea: "",
                      landType: "",
                      landUsage: [],
                      landDescription: "",
                      termsAgree: false,
                      contactConsent: false,
                    },
                  });
                  setValidated(false);
                  setShowLandDetails(false);
                }}
              >
                Reset Form
              </Button>
              <Button variant="success" type="submit">
                Submit Registration
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default VillagerRegistrationForm;
