import type { WrapperProps } from "../../../types/ComponentsProps";

const Text: React.FC<WrapperProps> = ({ children }) => {
  return <p className="mt-6 text-sm text-white">{children}</p>;
};

export default Text;
