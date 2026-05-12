'use client';

import { useState } from 'react';

const apiKey = process.env.NEXT_PUBLIC_WEB3_SECRET_KEY;
const apiUrl = process.env.NEXT_PUBLIC_WEB3_SECRET_URL;

export default function ContactForm() {
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    formData.append('access_key', apiKey);

    if (!apiKey || !apiUrl) {
      setResult(
        'API key or URL is missing. Please check your environment variables.',
      );
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setResult('Form submitted successfully!');
        setLoading(false);
        e.target.reset();
      } else {
        setResult('Form submission failed. Please try again.');
        setLoading(false);
      }
    } catch (err) {
      setResult('An error occurred. Please try again.');
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h4 className='mb-0'>Get In Touch</h4>
      {result && (
        <div className='alert alert-danger mt-16 mb-0' role='alert'>
          {result}
        </div>
      )}
      <span className='d-block border border-neutral-30 my-24 border-dashed' />
      <div className='mb-24'>
        <label
          htmlFor='name'
          className='text-neutral-700 text-lg fw-medium mb-12'>
          Name{' '}
        </label>
        <input
          type='text'
          className='common-input rounded-pill border-transparent focus-border-main-600'
          id='name'
          name='name'
          placeholder='Enter Name...'
          style={{ maxWidth: '100% !important' }}
          required
        />
      </div>
      <div className='mb-24'>
        <label
          htmlFor='email'
          className='text-neutral-700 text-lg fw-medium mb-12'>
          Email{' '}
        </label>
        <input
          type='email'
          className='common-input rounded-pill border-transparent focus-border-main-600'
          id='email'
          name='email'
          placeholder='Enter Email...'
          style={{ maxWidth: '100% !important' }}
          required
        />
      </div>
      <div className='mb-24'>
        <label
          htmlFor='phone'
          className='text-neutral-700 text-lg fw-medium mb-12'>
          Phone{' '}
        </label>
        <input
          type='tel'
          className='common-input rounded-pill border-transparent focus-border-main-600'
          id='phone'
          name='phone'
          placeholder='Enter Your Number...'
          style={{ maxWidth: '100% !important' }}
          required
        />
      </div>
      <div className='mb-24'>
        <label
          htmlFor='desc'
          className='text-neutral-700 text-lg fw-medium mb-12'>
          Message
        </label>
        <textarea
          id='desc'
          className='common-input rounded-24 border-transparent focus-border-main-600 h-110'
          placeholder='Enter Your Message...'
          name='message'
          style={{ maxWidth: '100% !important' }}
          required
        />
      </div>
      <div className='mb-0'>
        <button
          disabled={loading}
          type='submit'
          className='btn btn-main rounded-pill flex-center gap-8 mt-40'>
          Send Message
          <i className='ph-bold ph-arrow-up-right d-flex text-lg' />
        </button>
      </div>
    </form>
  );
}
