import * as React from "react";
import { Button, ChakraProvider } from "@chakra-ui/react";
import ProjectList from "../components/ProjectList/ProjectList";
import VisuallyHidden from "../components/VisuallyHidden/VisuallyHidden";
import SocialMediaBar from "../components/SocialMediaBar/SocialMediaBar";
import Hero from "../components/Hero/Hero";
import SEO from "../components/SEO";
import Layout from "../components/layout";
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
        <section>
          <ProjectList id="#project-list" />
        </section>
      </Layout>
    </ChakraProvider>
  );
};

export default IndexPage;

export const Head = () => <SEO />;
