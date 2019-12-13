export default function errorHandler(error) {
  console.log(error);
  throw new Error(error);
}
