import { proPublicaApiInstance } from '../../utils/requestHelper';
import errorHandler from '../../utils/errorHandler';

export function getCongressmanDetails(id) {
  return proPublicaApiInstance({
    url: `congress/v1/members/${id}.json`,
    method: 'get',
  })
    .then(({ data }) => data.results[0])
    .catch(errorHandler);
}
