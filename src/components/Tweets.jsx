export default function Tweets() {

    const getTweets = (id, content, image) => {
        const tweets = document.querySelector('#tweets')
        const template=`
            <div class="tweet_container" id=${id}>
                <p class="tweet_content">${content}</p>
                <img class="tweet_image" src=${image} alt="avatar" width="400px" />
            </div>`
        tweets.insertAdjacentHTML("beforeend", template);
    }

    const fetchTweets = () => {
        const server = fetch(
            ` http://domer.tech:9999/tweets/`, {
                method: "GET",
            }
        );
        server
            .then((response) => response.json())
            .then((data) => {
                console.log(data.data)
                data.data.map(({ id, content, image }) => getTweets(id, content, image))})
            .catch((err) => {
                console.log("Error:", err);
            })
    }

    return (<div id="tweets">{fetchTweets()}</div>)
}