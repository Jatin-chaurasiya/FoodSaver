import React from 'react';
import { Link } from 'react-router-dom';

const NGO = () => {
  const benefits = [
    'Access to quality food donations from local restaurants',
    'Efficient coordination system for food pickups',
    'Expand your community reach and impact',
    'Track donations and impact with detailed analytics',
    'Connect with multiple restaurants in your area',
    'Reduce operational costs for food procurement'
  ];

  const features = [
    {
      title: 'Browse Donations',
      description: 'View available food donations from restaurants in your area',
      icon: '🔍'
    },
    {
      title: 'Easy Coordination',
      description: 'Coordinate pickups directly through our platform',
      icon: '📞'
    },
    {
      title: 'Impact Tracking',
      description: 'Track your organization\'s impact and food distribution',
      icon: '📊'
    },
    {
      title: 'Community Network',
      description: 'Connect with other NGOs and build community partnerships',
      icon: '🤝'
    }
  ];

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
          minHeight: '400px',
          flexDirection: 'column',
          gap: '24px',
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80")',
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
            For NGOs
          </h1>
          <h2 style={{ color: 'white', fontSize: '1rem', fontWeight: '400', lineHeight: '1.5' }}>
            Access quality food donations and expand your community impact. Join NGOs making a difference.
          </h2>
        </div>
        <Link to="/registration" style={{
          display: 'flex',
          minWidth: '84px',
          maxWidth: '480px',
          cursor: 'pointer',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          borderRadius: '12px',
          height: '48px',
          padding: '0 20px',
          backgroundColor: '#38e07b',
          color: '#0e1a13',
          fontSize: '16px',
          fontWeight: 'bold',
          lineHeight: 'normal',
          letterSpacing: '0.015em',
          textDecoration: 'none'
        }}>
          <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Get Started</span>
        </Link>
      </div>

      {/* Benefits Section */}
      <div style={{ padding: '0 16px', marginBottom: '40px' }}>
        <h2
          style={{
            color: '#0e1a13',
            fontSize: '28px',
            fontWeight: '700',
            textAlign: 'center',
            marginBottom: '32px'
          }}
        >
          Why Join FoodSaver?
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
          {benefits.map((benefit, index) => (
            <div
              key={index}
              style={{
                padding: '20px',
                backgroundColor: '#e8f2ec',
                borderRadius: '8px',
                border: '1px solid #daeded'
              }}
            >
              <p style={{ color: '#0e1a13', fontSize: '16px', lineHeight: '1.5', margin: 0 }}>
                ✓ {benefit}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div style={{ padding: '0 16px', marginBottom: '40px' }}>
        <h2
          style={{
            color: '#0e1a13',
            fontSize: '28px',
            fontWeight: '700',
            textAlign: 'center',
            marginBottom: '32px'
          }}
        >
          Platform Features
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
          {features.map((feature, index) => (
            <div
              key={index}
              style={{
                padding: '24px',
                backgroundColor: '#f8fbfa',
                borderRadius: '12px',
                border: '1px solid #daeded',
                textAlign: 'center'
              }}
            >
              <div
                style={{
                  fontSize: '48px',
                  marginBottom: '16px'
                }}
              >
                {feature.icon}
              </div>
              <h3
                style={{
                  color: '#0e1a13',
                  fontSize: '20px',
                  fontWeight: '700',
                  marginBottom: '12px'
                }}
              >
                {feature.title}
              </h3>
              <p
                style={{
                  color: '#51946c',
                  fontSize: '16px',
                  lineHeight: '1.6',
                  margin: 0
                }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works Section */}
      <div style={{ padding: '0 16px', marginBottom: '40px' }}>
        <h2
          style={{
            color: '#0e1a13',
            fontSize: '28px',
            fontWeight: '700',
            textAlign: 'center',
            marginBottom: '32px'
          }}
        >
          How It Works for NGOs
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '60px',
                height: '60px',
                backgroundColor: '#38e07b',
                borderRadius: '50%',
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#0e1a13',
                flexShrink: 0
              }}
            >
              1
            </div>
            <div>
              <h3 style={{ color: '#0e1a13', fontSize: '20px', fontWeight: '700', marginBottom: '8px' }}>
                Register Your NGO
              </h3>
              <p style={{ color: '#51946c', fontSize: '16px', lineHeight: '1.6', margin: 0 }}>
                Create your NGO profile and provide information about your organization and service areas.
              </p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '60px',
                height: '60px',
                backgroundColor: '#38e07b',
                borderRadius: '50%',
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#0e1a13',
                flexShrink: 0
              }}
            >
              2
            </div>
            <div>
              <h3 style={{ color: '#0e1a13', fontSize: '20px', fontWeight: '700', marginBottom: '8px' }}>
                Browse Available Donations
              </h3>
              <p style={{ color: '#51946c', fontSize: '16px', lineHeight: '1.6', margin: 0 }}>
                View food donations from restaurants in your area. Filter by food type, quantity, and pickup time.
              </p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '60px',
                height: '60px',
                backgroundColor: '#38e07b',
                borderRadius: '50%',
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#0e1a13',
                flexShrink: 0
              }}
            >
              3
            </div>
            <div>
              <h3 style={{ color: '#0e1a13', fontSize: '20px', fontWeight: '700', marginBottom: '8px' }}>
                Coordinate Pickup
              </h3>
              <p style={{ color: '#51946c', fontSize: '16px', lineHeight: '1.6', margin: 0 }}>
                Contact restaurants to arrange pickup times and locations that work for both parties.
              </p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '60px',
                height: '60px',
                backgroundColor: '#38e07b',
                borderRadius: '50%',
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#0e1a13',
                flexShrink: 0
              }}
            >
              4
            </div>
            <div>
              <h3 style={{ color: '#0e1a13', fontSize: '20px', fontWeight: '700', marginBottom: '8px' }}>
                Distribute to Community
              </h3>
              <p style={{ color: '#51946c', fontSize: '16px', lineHeight: '1.6', margin: 0 }}>
                Distribute the collected food to those in need in your community efficiently and safely.
              </p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '60px',
                height: '60px',
                backgroundColor: '#38e07b',
                borderRadius: '50%',
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#0e1a13',
                flexShrink: 0
              }}
            >
              5
            </div>
            <div>
              <h3 style={{ color: '#0e1a13', fontSize: '20px', fontWeight: '700', marginBottom: '8px' }}>
                Track Your Impact
              </h3>
              <p style={{ color: '#51946c', fontSize: '16px', lineHeight: '1.6', margin: 0 }}>
                Monitor your organization\'s impact through our dashboard and share success stories.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div style={{ textAlign: 'center', padding: '40px 16px' }}>
        <h2
          style={{
            color: '#0e1a13',
            fontSize: '24px',
            fontWeight: '700',
            marginBottom: '24px'
          }}
        >
          Ready to Expand Your Impact?
        </h2>
        <p
          style={{
            color: '#51946c',
            fontSize: '18px',
            lineHeight: '1.6',
            marginBottom: '32px'
          }}
        >
          Join NGOs already making a difference in their communities through food donations.
        </p>
        <Link
          to="/registration"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '16px 32px',
            backgroundColor: '#38e07b',
            color: '#0e1a13',
            fontWeight: '700',
            fontSize: '18px',
            borderRadius: '8px',
            textDecoration: 'none',
            transition: 'background-color 0.3s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#2bc066'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#38e07b'}
        >
          Start Collecting Donations
        </Link>
      </div>
    </div>
  );
};

export default NGO;
