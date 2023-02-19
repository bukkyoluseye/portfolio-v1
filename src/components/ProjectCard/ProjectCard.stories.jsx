import React from "react";
import ProjectCard from "./ProjectCard";

export default {
  title: "Molecules/Project Card",
  component: ProjectCard,
};

const Template = (args) => <ProjectCard {...args} />;

const ListTemplate = (args) => <ProjectCard {...args} />;

export const card = Template.bind({});
card.args = {
  title: "Redesign of an App for Tutors",
  subtitle: "Floriss",
  href: "https://google.com"
};

// export const List = ListTemplate.bind({});
// List.args = {
//   children: ,
//   title: "Redesign of an App for Tutors",
//   subtitle: "Floriss",
// };
