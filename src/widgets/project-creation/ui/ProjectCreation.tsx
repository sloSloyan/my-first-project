

import { useState, useRef } from 'react';
import styles from './ProjectCreation.module.scss';
import { Button } from '../../../shared/ui/Button';


export const ProjectCreation = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectDetails: ''
  });

  const validateField = (name: string, value: string) => {
    if (!value.trim()) {
      return 'Это поле обязательно';
    }
    if (name === 'email' && !/^\S+@\S+\.\S+$/.test(value)) {
      return 'Введите корректный email';
    }
    return '';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Валидация при изменении
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Валидация всех полей
    const newErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      projectDetails: validateField('projectDetails', formData.projectDetails)
    };
    
    setErrors(newErrors);
    
    // Проверка на отсутствие ошибок
    if (!Object.values(newErrors).some(error => error)) {
      alert('Форма отправлена!');
      // Здесь можно добавить отправку данных
    }
  };

  return (
    <section className={styles.section} ref={formRef} id="project-creation">
      <div className="container">
        
        <form className={styles.form} onSubmit={handleSubmit}>
          <h3 className={styles.formTitle}>Начните свой проект</h3>
          
          <div className={styles.formGroup}>
            <div className={styles.inputWrapper}>
              <input
                type="text"
                name="name"
                placeholder="Ваше имя"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.name ? styles.error : ''}
              />
              <span className={styles.requiredMark}>*</span>
              {errors.name && <span className={styles.errorText}>{errors.name}</span>}
            </div>
            
            <div className={styles.inputWrapper}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.email ? styles.error : ''}
              />
              <span className={styles.requiredMark}>*</span>
              {errors.email && <span className={styles.errorText}>{errors.email}</span>}
            </div>
          </div>
          
          <div className={styles.inputWrapper}>
            <textarea
              name="projectDetails"
              placeholder="Расскажите о вашем проекте"
              rows={5}
              value={formData.projectDetails}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.projectDetails ? styles.error : ''}
            ></textarea>
            <span className={styles.requiredMark}>*</span>
            {errors.projectDetails && (
              <span className={styles.errorText}>{errors.projectDetails}</span>
            )}
          </div>
          <div className={styles.btn}>
          <Button
            variant="primary" 
            type="submit"
            className={styles.submitButton}
          >
            Отправить заявку
          </Button>
          </div>
        </form>
      </div>
    </section>
  );
};