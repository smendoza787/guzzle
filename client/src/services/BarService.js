const API_URL = process.env.REACT_APP_API_URL;

const BarService = {
  fetchBars() {
    return fetch(`${API_URL}/bars`)
      .then(response => response.json())
  },

  fetchBar(barId) {
    return fetch(`${API_URL}/bars/${barId}`)
      .then(response => response.json())
  },

  createBar(bar) {
    const request = {
      method: 'POST',
      body: JSON.stringify({
        bar: bar
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    };

    return fetch(`${API_URL}/bars`, request)
      .then(response => response.json())
  }
}

export default BarService;
