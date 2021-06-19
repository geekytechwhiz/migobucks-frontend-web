import _ from 'lodash';

export interface IOrderObject {
    data: Object;
    key: string[];
    direction: 'asc' | 'desc'
}

export const orderObjectBy = (payload: IOrderObject): Object => {
  const { data, direction, key } = payload;
  return _.orderBy(data, key, direction);
};
