import React, { useState } from 'react';
import { Spin } from 'antd';
import styled from 'styled-components';
import StyledCard from './StyledCard.jsx';
import DeleteModal from '../Modals/DeleteModal.jsx';
import UpdateItem from '../Modals/UpdateItem.jsx';
import { useSelector } from 'react-redux';
import SearchInvalid from './SearchInvalid.jsx';

import { useGetCellsQuery } from '../../services/items.js';

const StyledSpin = styled(Spin)`
  margin: 2rem;
`;

const CellLinesList = () => {
  const { data, error, isLoading, isSuccess, isError } = useGetCellsQuery();
  const searchInput = useSelector((state) => state.filter.filter);
  const [foundItems, setFoundItems] = useState(data);

  const filter = () => {
    if (data) {
      if (searchInput !== '') {
        const results = data.filter((item) => {
          return item.name.toLowerCase().startsWith(searchInput.toLowerCase());
        });
        setFoundItems(results);
      } else {
        setFoundItems(data);
      }
    }
  };

  return (
    <div
      className="site-card-border-less-wrapper"
      style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {isLoading && <StyledSpin></StyledSpin>}
      {isError && error.message}
      {isSuccess &&
        data &&
        !foundItems &&
        data.map((item) => {
          const isLow = item.quantity < 10;

          return (
            <StyledCard
              key={item._id}
              hoverable
              // title={item.name}
              bordered={false}
              style={{
                backgroundColor: isLow ? '#f8bdbd' : 'none',
              }}
              onClick={filter}>
              <h3>{item.name}</h3>
              <p>
                <b>Supplier:</b> {item.supplier}
              </p>
              <p>
                <b>Catalog No.:</b> {item.catalog}
              </p>
              <p>
                <b>Species:</b> {item.species}
              </p>
              <p>
                <b>Description:</b> {item.description}
              </p>
              <p>
                <b>Last Freeze:</b> {item.lastFreeze}
              </p>
              <p>
                <b>Qty:</b> {item.quantity}
              </p>
              <div style={{ display: 'flex' }}>
                <UpdateItem id={item._id}></UpdateItem>
                <DeleteModal
                  name={item.name}
                  id={item._id}
                  category="cells"></DeleteModal>
              </div>
            </StyledCard>
          );
        })}
      {foundItems &&
        foundItems.map((item) => {
          const isLow = item.quantity < 10;

          return (
            <StyledCard
              key={item._id}
              hoverable
              // title={item.name}
              bordered={false}
              style={{
                backgroundColor: isLow ? '#f8bdbd' : 'none',
              }}
              onClick={filter}>
              <h3>{item.name}</h3>
              <p>
                <b>Supplier:</b> {item.supplier}
              </p>
              <p>
                <b>Catalog No.:</b> {item.catalog}
              </p>
              <p>
                <b>Species:</b> {item.species}
              </p>
              <p>
                <b>Description:</b> {item.description}
              </p>
              <p>
                <b>Last Freeze:</b> {item.lastFreeze}
              </p>
              <p>
                <b>Qty:</b> {item.quantity}
              </p>
              <div style={{ display: 'flex' }}>
                <UpdateItem id={item._id}></UpdateItem>
                <DeleteModal
                  name={item.name}
                  id={item._id}
                  category="cells"></DeleteModal>
              </div>
            </StyledCard>
          );
        })}
      {foundItems && foundItems.length === 0 && (
        <SearchInvalid filter={filter}></SearchInvalid>
      )}
    </div>
  );
};

export default CellLinesList;
