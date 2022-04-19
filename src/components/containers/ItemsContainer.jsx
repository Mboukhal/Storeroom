import React from 'react';
import styled from 'styled-components';
import { Spin } from 'antd';
import { SearchBar } from '../Items/SearchBar.jsx';

import 'antd/dist/antd.css';
import AddItem from '../Items/AddItem.jsx';
import ConsumablesList from '../Items/ConsumablesList.jsx';
import ReagentsList from '../Items/ReagentsList.jsx';
import CellLinesList from '../Items/CellLinesList.jsx';
import EquipmentList from '../Items/EquipmentList.jsx';

import { useSelector } from 'react-redux';

const ItemsContainer = () => {
  const display = useSelector((state) => state.counter.display);

  const Wrapper = styled.div`
    width: 80vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const StyledSpin = styled(Spin)`
    margin: 2rem;
  `;

  return (
    <Wrapper>
      <div style={{ display: 'flex' }}>
        <AddItem></AddItem>
        <SearchBar></SearchBar>
      </div>

      {display === 'consumables' && <ConsumablesList></ConsumablesList>}
      {display === 'reagents' && <ReagentsList></ReagentsList>}
      {display === 'cells' && <CellLinesList></CellLinesList>}
      {display === 'equipment' && <EquipmentList></EquipmentList>}
      {display === 'default' && <StyledSpin></StyledSpin>}
    </Wrapper>
  );
};

export default ItemsContainer;
