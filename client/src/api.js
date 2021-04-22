class Api {
    async getPosts() {
        try {
            const data = await fetch('/api/posts');
            return data.json();
        } catch (error) {
            console.error(error);
        }
    }
}

const api = new Api();
export default api;