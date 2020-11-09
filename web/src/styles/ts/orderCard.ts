import styled, { css } from 'styled-components';

import { OrderCardProps } from '../../components/OrderCard';

export const CardContainer = styled.div`
  width: 92%;
  height: max-content;

  background-color: #fff;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  cursor: grab;

  ${(props: OrderCardProps) =>
    props.isDragging &&
    css`
      opacity: 0;
    `}
`;

export const CardContent = styled.div`
  padding: 8px 18px 5px 15px;
`;

export const OrderIdTable = styled.div`
  height: 20%;

  font-size: 13px;
  display: flex;
  justify-content: space-between;
`;

export const OrderInfoContainer = styled.div`
  margin-top: 10px;
  line-height: 22px;

  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const OrderRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Observations = styled.span`
  font-size: 12px;
`;

export const ImageCrop = styled.div`
  position: relative;
  right: 3.5px;
  top: 20px;
`;
