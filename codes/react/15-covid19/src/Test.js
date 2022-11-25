import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getList, getItem, postItem, putItem, deleteItem } from "./slices/DepartmentSlice";

const Test = memo(() => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.DepartmentSlice);

  useEffect(() => {
    dispatch(getList());

    // dispatch(getItem({id: 101}));

    // dispatch(postItem({dname: 'React.js', loc: '1403호'}));

    // dispatch(putItem({id: 203, dname: 'React.js수정', loc: '1406호'}));

    // dispatch(deleteItem({id: 202}));
  }, [dispatch]);

  return loading ? "loading..." : error ? JSON.stringify(error) : <>{JSON.stringify(data)}</>;
});

export default Test;
