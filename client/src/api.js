class Api {
    async getPosts() {
        try {
            const data = await fetch('/api/posts');
            return data.json();
        } catch (error) {
            console.error(error);
        }
    }

    async getExchangeRates() {
        try {
            const data = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
            return data.json();
        } catch (error) {
            console.error(error);
        }
    }
}

const api = new Api();
export default api;