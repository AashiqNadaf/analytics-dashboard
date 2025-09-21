import { memo } from 'react';
import { useThemeStore } from '../../../../Store/themeStore';
import { TOP_SELLING_PRODUCTS } from './constants';
import type { TopSellingProductsProps } from './interface';

const TopSellingProducts: React.FC<TopSellingProductsProps> = ({
  data = TOP_SELLING_PRODUCTS,
}) => {
  const { theme } = useThemeStore();

  return (
    <div
      className="w-full h-full min-h-[250px] p-2 sm:p-4 rounded-lg"
      style={{ backgroundColor: theme.primary }}
    >
      <h3
        className="text-base font-semibold mb-4"
        style={{ color: theme.text }}
      >
        Top Selling Products
      </h3>

      <div className="w-full h-[calc(100%-40px)] overflow-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th
                className="text-left text-xs font-medium pb-2 border-b"
                style={{
                  color: theme.secondaryText,
                  borderColor: theme.border,
                }}
              >
                Name
              </th>
              <th
                className="text-left text-xs font-medium pb-2 border-b"
                style={{
                  color: theme.secondaryText,
                  borderColor: theme.border,
                }}
              >
                Price
              </th>
              <th
                className="text-left text-xs font-medium pb-2 border-b"
                style={{
                  color: theme.secondaryText,
                  borderColor: theme.border,
                }}
              >
                Quantity
              </th>
              <th
                className="text-left text-xs font-medium pb-2 border-b"
                style={{
                  color: theme.secondaryText,
                  borderColor: theme.border,
                }}
              >
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((product, index) => (
              <tr key={index} className="border-b-0">
                <td className="text-xs py-3" style={{ color: theme.text }}>
                  {product.name}
                </td>
                <td className="text-xs py-3" style={{ color: theme.text }}>
                  {product.price}
                </td>
                <td className="text-xs py-3" style={{ color: theme.text }}>
                  {product.quantity}
                </td>
                <td className="text-xs py-3" style={{ color: theme.text }}>
                  {product.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default memo(TopSellingProducts);
