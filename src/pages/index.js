import * as React from "react";
import { Button, ChakraProvider } from "@chakra-ui/react";
import MiniPlayer from "../components/MiniPlayer";
import ProjectList from "../components/ProjectList";
import VisuallyHidden from "../components/VisuallyHidden/VisuallyHidden";
import SocialMediaBar from "../components/SocialMediaBar/SocialMediaBar";
import Container from "../components/Container";
import Hero from "../components/Hero/Hero";
import ThemeSwitchButton from "../components/DarkMode/ThemeSwitchButton";
import Seo from "../components/SEO";
import Layout from "../templates/layout";
import "../style/normalize.css";
import "../style/variables.css";

const IndexPage = () => {
  return (
    <ChakraProvider>
      <SocialMediaBar />
      <VisuallyHidden>
        <Button className="skip-to-content-link" href="#main">
          Skip to content
        </Button>
      </VisuallyHidden>
      <Layout>
        <Hero />
        <ThemeSwitchButton />
        <section>
          <MiniPlayer />
          <Container>
            <ProjectList id="#project-list" />
          </Container>
        </section>
      </Layout>
    </ChakraProvider>
  );
};

export default IndexPage;

export const Head = () => <Seo />;
