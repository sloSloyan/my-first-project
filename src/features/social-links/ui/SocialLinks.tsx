import styles from './SocialLinks.module.scss';

export const SocialLinks = () => {
  const socials = [
    { name: 'Telegram', icon: 'telegram' },
    { name: 'VK', icon: 'vk' },
    { name: 'GitHub', icon: 'github' },
    { name: 'Dribbble', icon: 'dribbble' }
  ];

  return (
    <div className={styles.socialLinks}>
      {socials.map(social => (
        <a 
          key={social.name}
          href={`https://${social.icon}.com/yourcompany`} 
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
          className={styles.socialLink}
        >
          <i className={`icon-${social.icon}`}></i>
        </a>
      ))}
    </div>
  );
};