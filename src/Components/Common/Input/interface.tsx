export interface InputProps {
  placeholder: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  onChange?: (value: string) => void;
  value?: string;
  backgroundColor?: string;
}