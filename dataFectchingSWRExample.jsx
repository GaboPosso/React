import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const useFetch = (url) => {
  const { data, error } = useSWR(url, fetcher);

  return {
    data,
    loading: !data && !error,
    error,
  };
};

export default useFetch;