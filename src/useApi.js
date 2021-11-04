import { useEffect, useState } from "react";
import { remoteAdd, remoteFetch } from "./remoteCall";

export function useApi() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = async (item) => {
    setIsLoading(true);
    const res = await remoteAdd(item);
    setData(res);
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    remoteFetch().then((res) => {
      setData(res);
      setIsLoading(false);
    });
  }, []);
  return { onSubmit, isLoading, data };
}