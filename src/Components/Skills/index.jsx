/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { InnerLayout } from "../../styles/Layouts";
import Title from "../Title";
import ProgressBar from "../ProgressBar";
import { SkillsStyled } from "./styled";
import { user } from "../../data/data";

export default function Skills() {
  const [skills, setSkills] = useState(user.skills);
  return (
    <SkillsStyled>
      <Title title={"Conhecimentos"} span={""} />
      <InnerLayout>
        <div className="skills">
          {skills.map(({ id, name }) => {
            return (
              <ProgressBar key={id} title={name} 
              />
            );
          })}
        </div>
      </InnerLayout>
    </SkillsStyled>
  );
}
