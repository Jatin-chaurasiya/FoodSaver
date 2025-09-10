import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
  const [formData, setFormData] = useState({
    organizationType: '',
    organizationName: '',
    contactPerson: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    description: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Registration submitted successfully! We will contact you soon.');
    }, 2000);
  };

  return (
    <div className="content-wrapper">
      {/* Back to Home Button */}
      <div style={{ padding: '12px 16px' }}>
        <Link
          to="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '8px 16px',
            backgroundColor: '#94e0b2',
            color: '#101914',
            fontWeight: 'bold',
            fontSize: '14px',
            borderRadius: '12px',
            textDecoration: 'none',
            transition: 'background-color 0.3s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#7bcc9b'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#94e0b2'}
        >
          ⬅ Back to Home
        </Link>
      </div>

      {/* Hero Section */}
      <div
        style={{
          display: 'flex',
          minHeight: '300px',
          flexDirection: 'column',
          gap: '24px',
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          borderRadius: '8px',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '16px',
          marginBottom: '40px'
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', textAlign: 'center' }}>
          <h1
            style={{
              color: 'white',
              fontSize: '2.5rem',
              fontWeight: '900',
              lineHeight: '1.25',
              letterSpacing: '-0.033em'
            }}
          >
            Join FoodSaver
          </h1>
          <h2 style={{ color: 'white', fontSize: '1rem', fontWeight: '400', lineHeight: '1.5' }}>
            Register your organization and start making a difference in your community.
          </h2>
        </div>
      </div>

      {/* Registration Form */}
      <div style={{ padding: '0 16px', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{
          padding: '32px',
          backgroundColor: '#f8fbfa',
          borderRadius: '12px',
          border: '1px solid #daeded',
          marginBottom: '40px'
        }}>
          <h2
            style={{
              color: '#0e1a13',
              fontSize: '24px',
              fontWeight: '700',
              textAlign: 'center',
              marginBottom: '32px'
            }}
          >
            Organization Registration
          </h2>

          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '24px' }}>
              <div>
                <label style={{ display: 'block', color: '#0e1a13', fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>
                  Organization Type *
                </label>
                <select
                  name="organizationType"
                  value={formData.organizationType}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #daeded',
                    borderRadius: '8px',
                    fontSize: '16px',
                    backgroundColor: 'white'
                  }}
                >
                  <option value="">Select Organization Type</option>
                  <option value="restaurant">Restaurant</option>
                  <option value="ngo">NGO / Non-Profit</option>
                  <option value="catering">Catering Service</option>
                  <option value="bakery">Bakery</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', color: '#0e1a13', fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>
                  Organization Name *
                </label>
                <input
                  type="text"
                  name="organizationName"
                  value={formData.organizationName}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #daeded',
                    borderRadius: '8px',
                    fontSize: '16px'
                  }}
                  placeholder="Enter organization name"
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '24px' }}>
              <div>
                <label style={{ display: 'block', color: '#0e1a13', fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>
                  Contact Person *
                </label>
                <input
                  type="text"
                  name="contactPerson"
                  value={formData.contactPerson}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #daeded',
                    borderRadius: '8px',
                    fontSize: '16px'
                  }}
                  placeholder="Enter contact person name"
                />
              </div>

              <div>
                <label style={{ display: 'block', color: '#0e1a13', fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #daeded',
                    borderRadius: '8px',
                    fontSize: '16px'
                  }}
                  placeholder="Enter email address"
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '24px' }}>
              <div>
                <label style={{ display: 'block', color: '#0e1a13', fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #daeded',
                    borderRadius: '8px',
                    fontSize: '16px'
                  }}
                  placeholder="Enter phone number"
                />
              </div>

              <div>
                <label style={{ display: 'block', color: '#0e1a13', fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>
                  Address *
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #daeded',
                    borderRadius: '8px',
                    fontSize: '16px'
                  }}
                  placeholder="Enter street address"
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', marginBottom: '24px' }}>
              <div>
                <label style={{ display: 'block', color: '#0e1a13', fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>
                  City *
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #daeded',
                    borderRadius: '8px',
                    fontSize: '16px'
                  }}
                  placeholder="Enter city"
                />
              </div>

              <div>
                <label style={{ display: 'block', color: '#0e1a13', fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>
                  State *
                </label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #daeded',
                    borderRadius: '8px',
                    fontSize: '16px'
                  }}
                  placeholder="Enter state"
                />
              </div>

              <div>
                <label style={{ display: 'block', color: '#0e1a13', fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>
                  ZIP Code *
                </label>
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #daeded',
                    borderRadius: '8px',
                    fontSize: '16px'
                  }}
                  placeholder="Enter ZIP code"
                />
              </div>
            </div>

            <div style={{ marginBottom: '32px' }}>
              <label style={{ display: 'block', color: '#0e1a13', fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>
                Organization Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows="4"
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #daeded',
                  borderRadius: '8px',
                  fontSize: '16px',
                  resize: 'vertical'
                }}
                placeholder="Tell us about your organization and how you plan to use the platform..."
              />
            </div>

            <div style={{ textAlign: 'center' }}>
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  padding: '16px 32px',
                  backgroundColor: isSubmitting ? '#cccccc' : '#38e07b',
                  color: '#0e1a13',
                  fontWeight: '700',
                  fontSize: '18px',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  transition: 'background-color 0.3s'
                }}
                onMouseOver={(e) => {
                  if (!isSubmitting) e.target.style.backgroundColor = '#2bc066';
                }}
                onMouseOut={(e) => {
                  if (!isSubmitting) e.target.style.backgroundColor = '#38e07b';
                }}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Registration'}
              </button>
            </div>
          </form>
        </div>

        {/* Additional Information */}
        <div style={{
          padding: '24px',
          backgroundColor: '#e8f2ec',
          borderRadius: '12px',
          border: '1px solid #daeded',
          textAlign: 'center'
        }}>
          <h3 style={{ color: '#0e1a13', fontSize: '20px', fontWeight: '700', marginBottom: '16px' }}>
            What Happens Next?
          </h3>
          <p style={{ color: '#51946c', fontSize: '16px', lineHeight: '1.6', marginBottom: '16px' }}>
            After submitting your registration, our team will review your application and contact you within 2-3 business days to complete the onboarding process.
          </p>
          <p style={{ color: '#51946c', fontSize: '16px', lineHeight: '1.6' }}>
            If you have any questions, please contact us at{' '}
            <a href="mailto:info@foodsaver.com" style={{ color: '#38e07b', textDecoration: 'none', fontWeight: '600' }}>
              info@foodsaver.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
