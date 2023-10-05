import '../../assets/styles/components/ui/status.scss';
import { ProductStatus } from '../../models/Product';

type StatusProps = {
  status: ProductStatus;
  className?: string;
};
const Status = ({ status, className }: StatusProps) => {
  return (
    <div className={`status ${status.toLowerCase()} ${className}`}>
      {status}
    </div>
  );
};

export default Status;
