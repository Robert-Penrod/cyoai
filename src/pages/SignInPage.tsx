import { Button, Container, Title, useMantineTheme } from "@mantine/core";
import { useAuth } from "../data/contexts/AuthProvider";
import { signInAnonymously } from "../lib/supabase";

const SignInPage = () => {
    const theme = useMantineTheme();
    const { authUser, setAuthUser } = useAuth();

    const handleSignIn = async () => {
        console.log("Signing in anonymously...");
        signInAnonymously().then((authResponse) => {
            console.log("Signed in anonymously:", authResponse);
            setAuthUser(authResponse?.data?.user ?? null);
        });
    };

    return (
        <Container style={{ textAlign: "center" }}>
            <Title c={theme.colors.main[9]} mb='xl'>
                Sign In
            </Title>
            <Button onClick={handleSignIn}>Sign In Anonymously</Button>
        </Container>
    );
};

export default SignInPage;
