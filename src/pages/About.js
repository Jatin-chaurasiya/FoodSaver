import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
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
          minHeight: '480px',
          flexDirection: 'column',
          gap: '24px',
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDoOjLf8VnF1NT9GuPF5AGkSyRUAIw20tDdqk1RFxnr2RzgXp2TpN-wKaU5ygC58g5edm4YDe-UOufRZ1HipR5fmPj3s4Tmv84ZHNCOB6W0oZHgqkrrrYB6bFtQ1WYsbpHABdbG_zmouH1x4jRiu8Ywg5QS2vhJjrpn8dydV_pCJuhzFaeoj_ArsoyLYU60vrPYnxP1mK78I-i2cS3R6SqBTulRsceTqNK8-KiQHwNqq_eiBCojcusYw5DN9wfLrAxiAysVTrZL450")',
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
            About FoodShare Connect
          </h1>
          <h2 style={{ color: 'white', fontSize: '1rem', fontWeight: '400', lineHeight: '1.5' }}>
            Connecting restaurants with NGOs to reduce food waste and feed communities.
          </h2>
        </div>
        <Link to="/works" style={{
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
          backgroundColor: '#14b714',
          color: '#f8fcf8',
          fontSize: '16px',
          fontWeight: 'bold',
          lineHeight: 'normal',
          letterSpacing: '0.015em',
          textDecoration: 'none'
        }}>
          <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Learn More</span>
        </Link>
      </div>

      {/* Our Story Section */}
      <div style={{ padding: '0 16px' }}>
        <h2 style={{
          color: '#0e1b0e',
          fontSize: '22px',
          fontWeight: 'bold',
          lineHeight: '1.25',
          letterSpacing: '-0.015em',
          padding: '20px 0 12px 0'
        }}>
          Our Story
        </h2>
        <p style={{
          color: '#0e1b0e',
          fontSize: '16px',
          fontWeight: '400',
          lineHeight: '1.5',
          padding: '8px 0 12px 0'
        }}>
          FoodShare Connect was born from a simple idea: to bridge the gap between surplus food and those in need. 
          Founded by students at Haldia Institute of Technology, we recognized the significant food waste in our 
          community and the potential to make a difference. Our journey began with a passion for sustainability 
          and a commitment to creating a positive impact. We've grown from a campus initiative to a platform 
          serving restaurants and NGOs across the region, driven by our belief that no food should go to waste 
          while people go hungry.
        </p>

        <h2 style={{
          color: '#0e1b0e',
          fontSize: '22px',
          fontWeight: 'bold',
          lineHeight: '1.25',
          letterSpacing: '-0.015em',
          padding: '20px 0 12px 0'
        }}>
          Our Mission & Values
        </h2>
        <p style={{
          color: '#0e1b0e',
          fontSize: '16px',
          fontWeight: '400',
          lineHeight: '1.5',
          padding: '8px 0 12px 0'
        }}>
          Our mission is to create a sustainable ecosystem where food waste is minimized and communities are 
          nourished. We believe in the power of technology to solve real-world problems and are committed to 
          transparency, efficiency, and impact measurement. Our values include environmental responsibility, 
          social equity, and community collaboration.
        </p>

        <h2 style={{
          color: '#0e1b0e',
          fontSize: '22px',
          fontWeight: 'bold',
          lineHeight: '1.25',
          letterSpacing: '-0.015em',
          padding: '20px 0 12px 0'
        }}>
          The Team
        </h2>
        <p style={{
          color: '#0e1b0e',
          fontSize: '16px',
          fontWeight: '400',
          lineHeight: '1.5',
          padding: '8px 0 12px 0'
        }}>
          Our team consists of passionate students and professionals dedicated to making a difference. 
          We come from diverse backgrounds in technology, business, and social work, united by our 
          commitment to solving the food waste challenge. Together, we're building a platform that 
          connects communities and creates lasting impact.
        </p>

        <h2 style={{
          color: '#0e1b0e',
          fontSize: '22px',
          fontWeight: 'bold',
          lineHeight: '1.25',
          letterSpacing: '-0.015em',
          padding: '20px 0 12px 0'
        }}>
          Our Impact
        </h2>
        <p style={{
          color: '#0e1b0e',
          fontSize: '16px',
          fontWeight: '400',
          lineHeight: '1.5',
          padding: '8px 0 12px 0'
        }}>
          Since our launch, we've facilitated the donation of thousands of meals, connecting hundreds 
          of restaurants with local NGOs. Our platform has helped reduce food waste while ensuring 
          that nutritious meals reach those who need them most. We're proud of our impact and committed 
          to scaling our solution to serve more communities.
        </p>
      </div>
    </div>
  );
};

export default About;
