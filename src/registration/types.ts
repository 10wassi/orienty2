export interface StepProps {
  number: number;
  description: string;
  isActive?: boolean;
}

export interface InputFieldProps {
  label: string;
  placeholder: string;
  type?: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  error?: string;
}

export interface SocialButtonProps {
  icon: string;
  altText: string;
  text: string;
  onClick: () => void;
}

export interface RegistrationFormData {
  lastName: string;
  firstName: string;
  username: string;
}
