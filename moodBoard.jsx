export function MoodBoardItem({ color, image, description }) {
    return (
        <div className="mood-board-item" style={{ backgroundColor: color }}>
            <img src={image} alt="" className="mood-board-image" />
            <h3 className="mood-board-text">{description}</h3>
        </div>
    )
}

export function MoodBoard() {
    return (
        <div className="mood-board">
            <h1 className="mood-board-heading">Destination Mood Board</h1>
            <MoodBoardItem color="#FFDDC1" image="https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg" description="Sunny Beaches" />
            <MoodBoardItem color="#C1E1FF" image="https://cdn.freecodecamp.org/curriculum/labs/shore.jpg" description="Mountain Adventures" />
            <MoodBoardItem color="#D1FFC1" image="https://cdn.freecodecamp.org/curriculum/labs/grass.jpg" description="Cultural Experiences" />
        </div>
    )
}