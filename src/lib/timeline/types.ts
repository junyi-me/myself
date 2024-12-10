export type TimeEventType = {
  txOrg: string;
  txTitle: string;
  startDate: Date;
  endDate?: Date;
  color: string;
  onClick: () => void;
};

export type IslandType = {
  id: number;
  txTitle: string;
  txOrg: string;
  onClick: () => void;
  color: string;
  offset: number;
  width: number;
  startDate: Date;
  endDate?: Date;
}

