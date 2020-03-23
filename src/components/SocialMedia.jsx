import React from 'react'

const socialMedias = [
  { platform: 'instagram', logo: '', handle: 'elephantech' },
  { platform: 'linkedin', logo: '', handle: 'elephantech' },
  { platform: 'github', logo: '', handle: 'elephantech' },
  { platform: 'youtube', logo: '', handle: 'elephantech' }
];

const SocialMedia = () => {

  const Link = ({ url, logo, platform }) => {
    return (
      <div style={{
        margin: 8,
        height: 50,
        width: 50,
        backgroundImage: `url(${logo})`,
        backgroundSize: 'cover',
        borderRadius: 5
      }}
      >
        {logo ? '' : `${platform.toUpperCase()}: ${url}`}
      </div>
    )
  }
  return (
    <div style={{ zIndex: 5034, display: 'flex', flexDirection: "column" }}>
      {socialMedias.map((item) => {
        const url = `https://www.${item.platform}.com/${item.platform === 'linkedin' ? String.raw`in/` : ''}${item.handle}`;
        return (<Link {...item} url={url} />)
      }
      )}
    </div>
  )
}

export default SocialMedia
