function GifContainer({trend}) {
    return (
    <ul>
        {
            trend.map((ele) =>{
                return(
                    <li key={ele.id}>
                    <img src={ele.url} alt="trending-Gifs" />
                </li>
                )
            })
        }
    </ul>
    )
}

export default GifContainer
