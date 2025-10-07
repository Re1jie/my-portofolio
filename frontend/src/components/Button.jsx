import clsx from 'clsx';

export const Button = ({ children, className, disabled, ...props }) => {
  const baseClasses = "inline-flex justify-center px-3 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md transition-colors duration-200";
  const themeClasses = "text-[#2E3440] bg-[#88C0D0] hover:bg-[#81A1C1]";
  const disabledClasses = "disabled:cursor-not-allowed disabled:bg-[#D8DEE9] disabled:text-[#4C566A]";
  return (
    <button
      disabled={disabled}
      className={clsx(
        baseClasses,
        themeClasses,
        disabledClasses,
        className 
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;