import React from "react";
import { Container as ChakraContainer } from "@chakra-ui/react";
import './index.css';

const Container = (props: { children: any; centerAligned?: boolean; }) => {
  const { centerAligned, children } = props;
  return (
    <ChakraContainer
      className={`center-aligned`}
      centerContent={centerAligned ? centerAligned : true}
      width="100%"
      maxW={{
        base: "100%",
        xs: "container.xs",
        sm: "container.sm",
        md: "container.md",
        lg: "container.lg",
        xl: "container.xl",
      }}
    >
      {children}
    </ChakraContainer>
  );
};

export default Container;
