import styles from './SocialLinks.module.scss';
import telegramIcon from '../../../assets/icon/telegram.png';
import vkIcon from '../../../assets/icon/vk.png';
import githubIcon from '../../../assets/icon/github.png';
import dribbbleIcon from '../../../assets/icon/dribble.png';


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
        <div 
          key={social.name}
          rel="noopener noreferrer"
          aria-label={social.name}
          className={styles.socialLink}
        >
         {social.icon === 'telegram' && <img className={styles.iconImage} src={telegramIcon} />}
         {social.icon === 'vk' && <img className={styles.iconImage} src={vkIcon} />}
         {social.icon === 'github' && <img className={styles.iconImage} src={githubIcon} />}
         {social.icon === 'dribbble' && <img className={styles.iconImage} src={dribbbleIcon} />}
        </div>
      ))}
    </div>
  );
};