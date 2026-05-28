import React, { useEffect, useState } from 'react';

export default function Application() {
  const [data, setData] = useState({
    title: 'Simple Card',
    description:
      'This is a simple card component. Use it to display a title and a short description.',
  });

  useEffect(() => {
    const stored = window.localStorage.getItem('applicationData');
    if (!stored) {
      return;
    }

    try {
      const parsed = JSON.parse(stored);
      setData((current) => ({
        title: parsed.title || current.title,
        description: parsed.description || current.description,
      }));
    } catch (error) {
      console.warn('Failed to parse localStorage applicationData:', error);
    }
  }, []);

  return (
    <div style={styles.card}>
      <h2 style={styles.title}>{data.title}</h2>
      <p style={styles.description}>{data.description}</p>
    </div>
  );
}

const styles = {
  card: {
    maxWidth: '320px',
    margin: '16px',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#ffffff',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    margin: '0 0 12px 0',
    fontSize: '1.4rem',
    color: '#222',
  },
  description: {
    margin: 0,
    lineHeight: 1.5,
    color: '#555',
  },
};
