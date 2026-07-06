import { Button, Container, Title, useMantineTheme } from "@mantine/core";
import { useAuth } from "../contexts/AuthProvider";
import { signInAnonymously } from "../lib/supabase";

const SignInPage = () => {
    const theme = useMantineTheme();
    const { authUser, setAuthUser, isSignedIn, setIsSignedIn } = useAuth();

    const handleSignIn = async () => {
        console.log("Signing in anonymously...");
        signInAnonymously().then((data) => {
            console.log("Signed in anonymously:", data);
            setAuthUser(data);
            setIsSignedIn(true);
        });
    };

    return (
        <Container style={{ textAlign: "center" }}>
            <Title c={theme.colors.main[9]}>Sign In</Title>
            <Button onClick={handleSignIn}>Sign In Anonymously</Button>
        </Container>
    );
};

export default SignInPage;
