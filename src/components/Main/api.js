import { proPublicaApiInstance } from '../../utils/requestHelper';
import errorHandler from '../../utils/errorHandler';

export function getCongress(params) {
  return proPublicaApiInstance({
    url: 'congress/v1/116/senate/members.json',
    method: 'get',
    params,
  })
    .then(({ data }) => data.results[0])
    .catch(errorHandler);
}
