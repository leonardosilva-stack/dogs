import React from 'react'

const useFetch = () => {
    const [data, setData] = React.useState(null);
    const [error, setError]  = React.useState(null);
    const [loading, setLoading]  = React.useState(false);

  return {
      data, loading, error
  }
}

export default useFetch