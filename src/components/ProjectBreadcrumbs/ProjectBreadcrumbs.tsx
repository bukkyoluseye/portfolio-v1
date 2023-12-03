import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { Link } from "gatsby";
import React from "react";

const ProjectBreadcrumbs = (props: { title: string }) => {
  const { title } = props;
  return (
    <Breadcrumb className="breadcrumbs">
      <BreadcrumbItem>
        <BreadcrumbLink as={Link} to="/#project-list" className="breadcrumbs">
          ALL PROJECTS
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink>{title.toUpperCase()}</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

export default ProjectBreadcrumbs;
