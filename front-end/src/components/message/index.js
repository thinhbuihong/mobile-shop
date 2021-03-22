import React from 'react'

export const Message = ({ message, variant = 'info' }) => {
  const [color, backgroundColor] = ((variant) => {
    switch (variant) {
      case 'info':
        return ['#37277D', '#ABF400'];
      case 'error':
        return ['#B54F27', '#b59327'];

      default:
        return ['#37277D', '#ABF400'];
    }
  })(variant)

  return (
    <div style={{
      color, backgroundColor, fontSize: '2rem',
      lineHeight: '4rem', width: '100%', padding: '0 2rem',
      borderRadius: '.5rem'
    }}>
      {message}
    </div>
  )
}
