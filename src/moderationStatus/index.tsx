import React from 'react';
import { Color } from '../ui';
import styled from 'styled-components';

enum Statuses {
  DRAFT = 'DRAFT',
  MODERATION = 'MODERATION',
  REJECTED = 'REJECTED',
  APPROVED = 'APPROVED',
  NO_PAY = 'NO_PAY',
  PAYED = 'PAYED',
}

const StatusComponent = styled.div`
  padding: 4px 7px;
  font-weight: 600;
  font-size: 12px;
  line-height: 1;
  border-radius: 12px;
  color: ${Color.white};
  white-space: nowrap;
  display: inline-flex;
`;

const statusRusName = {
  [Statuses.MODERATION]: 'На модерации',
  [Statuses.APPROVED]: 'Одобрено',
  [Statuses.REJECTED]: 'Отклонено',
  [Statuses.DRAFT]: 'Черновик',
  [Statuses.NO_PAY]: 'Не оплачен',
  [Statuses.PAYED]: 'Оплачен',
};



const statusColor = (status: keyof typeof Statuses) => {
  if (status === Statuses.MODERATION) {
    return Color.orange;
  }
  if (status === Statuses.REJECTED) {
    return Color.red;
  }
  if (status === Statuses.APPROVED) {
    return Color.aquamarine;
  }
  if (status === Statuses.DRAFT) {
    return Color.lightGray;
  }
  if (status === Statuses.NO_PAY) {
    return Color.red;
  }
  if (status === Statuses.PAYED) {
    return Color.aquamarine;
  }

  return Color.lightGray;
};

export const ModerationStatus = ({ status }: {status: keyof typeof Statuses}) => {
  const color = statusColor(status);

  return (
    <StatusComponent style={{ background: color }}>
      {statusRusName[status]}
    </StatusComponent>
  );
};
