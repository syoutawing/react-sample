import React from 'react';
import ProductRow from './ProductRow';
import ProductCategoryRow from './ProductCategoryRow';

class ProductTable extends React.Component {
  render() {
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;

    const rows = [];
    let lastCategory = null;

    this.props.products.forEach((p) => {
      if (p.name.indexOf(filterText) === -1) {
        return;
      }
      if (inStockOnly && !p.stocked) {
        return;
      }
      if (p.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow category={p.category} key={p.category} />
        );
      }
      rows.push(<ProductRow product={p} key={p.name} />);
      lastCategory = p.category;
    });
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export default ProductTable;
