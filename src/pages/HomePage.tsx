import { Button, Container } from "@mantine/core";
import { Link } from "react-router";

const HomePage = () => {
    const handleNewStory = () => {};

    return (
        <Container
            style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Link to='/story/0'>
                <Button onClick={handleNewStory}>New Story</Button>
            </Link>
        </Container>
    );
};

export default HomePage;
