import { useLocation } from "react-router-dom";

const useQueryString = (props) => {
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const params = Object.fromEntries(query);

  return params;
};

export { useQueryString };
